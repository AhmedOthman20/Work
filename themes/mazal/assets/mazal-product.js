/* Mazal product page: variant picker, gallery, add to cart, sticky bar, wishlist, share. Used by sections/mazal-product.liquid. */
class MazalProduct extends HTMLElement {
  connectedCallback() {
    this.controller = new AbortController();
    const { signal } = this.controller;
    const data = this.querySelector('[data-variants]');
    this.variants = data ? JSON.parse(data.textContent) : [];
    this.form = this.querySelector('[data-product-form]');
    this.variantInput = this.querySelector('[data-variant-input]');
    this.qtyInput = this.querySelector('[data-qty-input]');
    this.mainImage = this.querySelector('.mazal-pdp__main-image');
    const names = this.querySelector('[data-option-names]');
    this.optionNames = names ? JSON.parse(names.textContent) : [];
    this.sticky = this.querySelector('[data-sticky]');
    this.colorKeyword = (this.dataset.colorOption || 'color').toLowerCase();
    this.currentVariant = this.variants.find((item) => String(item.id) === this.variantInput?.value);
    this.updateStickyOptions();
    this.observeSticky();

    this.addEventListener('click', (event) => this.onClick(event), { signal });
    this.form?.addEventListener('submit', (event) => this.onSubmit(event), { signal });
    this.restoreWishlist();
  }

  disconnectedCallback() {
    this.controller?.abort();
    this.stickyObserver?.disconnect();
  }

  /* Show the bar once the page's own Buy now / Add to cart buttons have scrolled up out of view. */
  observeSticky() {
    const ctas = this.querySelector('.mazal-pdp__ctas');
    if (!this.sticky || !ctas || !('IntersectionObserver' in window)) return;
    this.stickyObserver = new IntersectionObserver(([entry]) => {
      const show = !entry.isIntersecting && entry.boundingClientRect.top < 0;
      this.sticky.classList.toggle('is-visible', show);
      this.sticky.setAttribute('aria-hidden', String(!show));
      this.sticky.inert = !show;
    });
    this.stickyObserver.observe(ctas);
  }

  /* "COLOR : Pink | SIZE (CM) : 140 x 200": color first, like the design. */
  updateStickyOptions() {
    const target = this.querySelector('[data-sticky-options]');
    const variant = this.currentVariant;
    if (!target || !variant) return;
    const parts = this.optionNames.map((name, index) => ({ name, value: variant.options[index] }));
    parts.sort((a, b) => Number(b.name.toLowerCase() === this.colorKeyword) - Number(a.name.toLowerCase() === this.colorKeyword));
    target.textContent = parts.map((part) => `${part.name.toUpperCase()} : ${part.value}`).join('  |  ');
  }

  updateSticky(variant) {
    if (!this.sticky) return;
    const price = this.sticky.querySelector('[data-sticky-price]');
    const compare = this.sticky.querySelector('[data-sticky-compare]');
    const save = this.sticky.querySelector('[data-sticky-save]');
    const image = this.sticky.querySelector('[data-sticky-image]');
    const button = this.sticky.querySelector('[data-sticky-add]');
    const label = this.sticky.querySelector('[data-sticky-add-label]');
    const addButton = this.querySelector('[data-add-to-cart]');
    if (price) price.textContent = variant ? variant.price : '';
    if (compare) {
      compare.hidden = !variant || !variant.compare;
      compare.textContent = (variant && variant.compare) || '';
    }
    if (save) {
      save.hidden = !variant || !variant.save;
      if (variant && variant.save) save.textContent = save.dataset.template.replace('[percent]', variant.save);
    }
    if (image && variant && variant.image) {
      image.src = variant.image;
      image.removeAttribute('srcset');
    }
    const available = Boolean(variant && variant.available);
    if (button) button.disabled = !available;
    if (label && addButton) label.textContent = available ? addButton.dataset.label : addButton.dataset.soldOutLabel;
    this.updateStickyOptions();
  }

  onClick(event) {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;

    const optionButton = target.closest('[data-option-value]');
    if (optionButton) return this.selectOption(optionButton);

    const thumb = target.closest('.mazal-pdp__thumb');
    if (thumb) return this.showMedia(thumb.dataset.mediaId, thumb);

    const step = target.closest('[data-qty-step]');
    if (step && this.qtyInput) {
      const next = Math.max(1, (parseInt(this.qtyInput.value, 10) || 1) + Number(step.dataset.qtyStep));
      this.qtyInput.value = String(next);
      return;
    }

    const add = target.closest('[data-add-to-cart]');
    if (add) return this.addToCart(add);

    const stickyAdd = target.closest('[data-sticky-add]');
    if (stickyAdd) return this.addToCart(stickyAdd);

    const wishlist = target.closest('[data-wishlist]');
    if (wishlist) return this.toggleWishlist(wishlist);

    const copy = target.closest('[data-copy-link]');
    if (copy) return this.copyLink();
  }

  /* Option buttons: one selected per option position (color groups share a position). */
  selectOption(button) {
    const fieldset = button.closest('[data-option-position]');
    if (!fieldset) return;
    const position = fieldset.dataset.optionPosition;
    this.querySelectorAll(`[data-option-position="${position}"] [data-option-value]`).forEach((item) => {
      const selected = item === button;
      item.classList.toggle('is-selected', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    this.updateVariant();
  }

  selectedOptions() {
    const positions = new Map();
    this.querySelectorAll('[data-option-position]').forEach((fieldset) => {
      const selected = fieldset.querySelector('[data-option-value].is-selected');
      if (selected) positions.set(Number(fieldset.dataset.optionPosition), selected.dataset.optionValue);
    });
    return [...positions.keys()].sort((a, b) => a - b).map((key) => positions.get(key));
  }

  updateVariant() {
    const options = this.selectedOptions();
    const variant = this.variants.find((item) => item.options.every((value, index) => value === options[index]));
    this.currentVariant = variant;
    this.updateAvailability(options);
    this.updateSticky(variant);

    const addButton = this.querySelector('[data-add-to-cart]');
    const buyNow = this.querySelector('[data-buy-now]');
    const label = this.querySelector('[data-add-label]');

    if (!variant) {
      if (addButton) addButton.disabled = true;
      if (buyNow) buyNow.disabled = true;
      if (label && addButton) label.textContent = addButton.dataset.soldOutLabel;
      return;
    }

    if (this.variantInput) this.variantInput.value = String(variant.id);
    const price = this.querySelector('[data-price-current]');
    const compare = this.querySelector('[data-price-compare]');
    if (price) price.textContent = variant.price;
    if (compare) {
      compare.hidden = !variant.compare;
      compare.textContent = variant.compare || '';
    }
    if (addButton) addButton.disabled = !variant.available;
    if (buyNow) buyNow.disabled = !variant.available;
    if (label && addButton) label.textContent = variant.available ? addButton.dataset.label : addButton.dataset.soldOutLabel;
    if (variant.media) this.showMedia(String(variant.media));

    const url = new URL(window.location.href);
    url.searchParams.set('variant', String(variant.id));
    window.history.replaceState({}, '', url.toString());
  }

  /* Grey out values that have no available variant together with the other selected options. */
  updateAvailability(options) {
    this.querySelectorAll('[data-option-position]').forEach((fieldset) => {
      const index = Number(fieldset.dataset.optionPosition) - 1;
      fieldset.querySelectorAll('[data-option-value]').forEach((button) => {
        const candidate = [...options];
        candidate[index] = button.dataset.optionValue;
        const available = this.variants.some(
          (item) => item.available && item.options.every((value, i) => value === candidate[i])
        );
        button.classList.toggle('is-unavailable', !available);
      });
    });
  }

  showMedia(mediaId, thumb) {
    const button = thumb || this.querySelector(`.mazal-pdp__thumb[data-media-id="${mediaId}"]`);
    if (!button || !this.mainImage) return;
    this.mainImage.src = button.dataset.src;
    this.mainImage.srcset = button.dataset.srcset;
    this.mainImage.alt = button.querySelector('img')?.alt || this.mainImage.alt;
    this.querySelectorAll('.mazal-pdp__thumb').forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    if (thumb && window.matchMedia('(min-width: 750px)').matches) {
      this.querySelector('.mazal-pdp__main-media')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  onSubmit(event) {
    /* "Buy now" posts the form with return_to=/checkout; anything else goes through the cart drawer. */
    if (event.submitter && event.submitter.matches('[data-buy-now]')) return;
    event.preventDefault();
    this.addToCart(this.querySelector('[data-add-to-cart]'));
  }

  /* Same flow as Horizon's product form: announce the add, post it, then hand the updated cart to the
     theme so the cart drawer opens and the cart count updates. Falls back to a normal form post. */
  async addToCart(button) {
    if (!this.form || !button || button.disabled) return;
    button.setAttribute('aria-busy', 'true');
    try {
      const { CartLinesUpdateEvent } = await import('@shopify/events');
      const formData = new FormData(this.form);
      formData.delete('return_to');
      const sectionIds = Array.from(document.querySelectorAll('cart-items-component'))
        .map((element) => element.dataset.sectionId)
        .filter(Boolean);
      if (sectionIds.length) formData.append('sections', sectionIds.join(','));

      const quantity = Math.max(1, parseInt(String(formData.get('quantity')), 10) || 1);
      const deferred = CartLinesUpdateEvent.createPromise();
      this.dispatchEvent(
        new CartLinesUpdateEvent({
          action: 'add',
          context: 'product',
          lines: [{ merchandiseId: String(formData.get('id')), quantity }],
          promise: deferred.promise,
        })
      );

      const addUrl = (window.Theme && window.Theme.routes && window.Theme.routes.cart_add_url) || '/cart/add';
      const response = await fetch(addUrl, {
        method: 'POST',
        headers: { Accept: 'application/javascript', 'X-Requested-With': 'XMLHttpRequest' },
        body: formData,
      }).then((result) => result.json());

      const cartItems = document.querySelector('cart-items-component');
      let cart;
      if (cartItems && typeof cartItems.fetchCartData === 'function') {
        await customElements.whenDefined('cart-items-component');
        cart = await cartItems.fetchCartData();
      } else {
        cart = await fetch('/cart.js', { headers: { Accept: 'application/json' } }).then((result) => result.json());
      }

      deferred.resolve({
        cart: CartLinesUpdateEvent.createCartFromAjaxResponse(cart),
        detail: {
          items: cart.items,
          source: 'mazal-product',
          sourceId: this.dataset.sectionId,
          itemCount: quantity,
          productId: this.dataset.productId,
          sections: response.sections,
          didError: Boolean(response.status),
        },
      });

      if (response.status && response.description) window.alert(response.description);
    } catch (error) {
      console.error(error);
      this.form.submit();
    } finally {
      button.removeAttribute('aria-busy');
    }
  }

  wishlistKey() {
    return 'mazal-wishlist';
  }

  readWishlist() {
    try {
      return JSON.parse(window.localStorage.getItem(this.wishlistKey()) || '[]');
    } catch (error) {
      return [];
    }
  }

  restoreWishlist() {
    const button = this.querySelector('[data-wishlist]');
    if (!button) return;
    button.setAttribute('aria-pressed', String(this.readWishlist().includes(this.dataset.productId)));
  }

  toggleWishlist(button) {
    const list = this.readWishlist().filter((id) => id !== this.dataset.productId);
    const pressed = button.getAttribute('aria-pressed') !== 'true';
    if (pressed) list.push(this.dataset.productId);
    button.setAttribute('aria-pressed', String(pressed));
    try {
      window.localStorage.setItem(this.wishlistKey(), JSON.stringify(list));
    } catch (error) {
      /* Storage unavailable: the toggle still works for this visit. */
    }
  }

  async copyLink() {
    const status = this.querySelector('[data-copy-status]');
    const url = window.location.origin + (this.dataset.productUrl || window.location.pathname);
    try {
      await navigator.clipboard.writeText(url);
      if (status) status.textContent = 'Link copied';
    } catch (error) {
      window.prompt('Copy link', url);
    }
  }
}

if (!customElements.get('mazal-product')) {
  customElements.define('mazal-product', MazalProduct);
}
