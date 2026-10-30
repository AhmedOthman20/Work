#!/usr/bin/env node
// غلاف لـ Shopify CLI يختار كلمة مرور Theme Access المناسبة لكل متجر.
// الاستخدام: node scripts/theme.mjs <levai|dz> <command> [args...]
import { spawnSync } from 'node:child_process';

const TOKENS = {
  levai: 'LEVAI_THEME_TOKEN',
  dz: 'DZ_THEME_TOKEN',
};

const [env, command, ...args] = process.argv.slice(2);
if (!TOKENS[env] || !command) {
  console.error(`Usage: node scripts/theme.mjs <${Object.keys(TOKENS).join('|')}> <command> [args...]`);
  process.exit(1);
}

const childEnv = { ...process.env };
const token = process.env[TOKENS[env]];
if (token) childEnv.SHOPIFY_CLI_THEME_TOKEN = token;

const result = spawnSync('npx', ['shopify', 'theme', command, '-e', env, ...args], {
  stdio: 'inherit',
  env: childEnv,
});
process.exit(result.status ?? 1);
