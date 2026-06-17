# TypeScript Boilerplate for Katas

A template for Coding Dojos, Katas, or starting a new TypeScript project.

## Stack

| Tool | Version | Role |
|---|---|---|
| [TypeScript](https://www.typescriptlang.org/) | 6 | Language + type checking |
| [Vitest](https://vitest.dev/) | 4 | Test runner + coverage |
| [Biome](https://biomejs.dev/) | 2 | Linter + formatter |
| [pnpm](https://pnpm.io/) | 11 | Package manager |

## Requirements

- **Node.js 24 LTS** or later
- **pnpm >= 11.7.0** — install with `npm install -g pnpm` or via [corepack](https://nodejs.org/api/corepack.html)

## Setup

```bash
pnpm install
```

## Scripts

| Command | What it does |
|---|---|
| `pnpm test` | Run all tests once (verbose) |
| `pnpm run test:watch` | Re-run tests on file changes |
| `pnpm run test:coverage` | Generate coverage report in `coverage/` |
| `pnpm run build` | Lint + type check (no output emitted) |
| `pnpm run lint` | Lint with Biome |
| `pnpm run lint:fix` | Lint and auto-fix |
| `pnpm run format` | Format all files with Biome |
| `pnpm run check` | Lint + format check together |

## Project structure

```
src/
  main.ts           # Starting point for your kata
  main.spec.ts      # Test file
  core/             # (optional) shared logic — importable as @core/*
```

Test files are picked up automatically if they match `**/*.spec.ts` or `**/*.test.ts` inside `src/`.

## Path alias

The alias `@core/*` resolves to `src/core/*`. Use it for shared utilities:

```typescript
import { something } from "@core/utils";
```

The `src/core/` directory is not created by default — add it when you need it.

## Notes and considerations

### Module format

`package.json` has no `"type"` field, so Node.js treats all `.ts` files as **CommonJS** under `module: nodenext`. If you want ESM, add `"type": "module"` to `package.json`.

### Type checking does not emit files

`tsc --noEmit` is used for type checking only. There is no build output. The `build/` directory referenced in `package.json` is a leftover from the original boilerplate and is not used in this setup.

### Vitest globals

`describe`, `it`, `expect`, and other Vitest globals are available in test files **without explicit imports**. This is configured via `globals: true` in `vitest.config.ts` and `types: ["vitest/globals"]` in `tsconfig.json`.

### Biome linter rules

The linter is configured with `preset: "none"` — **no rules are enabled by default**. This is intentional to keep the template minimal. Enable rules as needed in `biome.json`:

```json
"linter": {
  "enabled": true,
  "rules": {
    "preset": "recommended"
  }
}
```

### Biome replaces ESLint and Prettier

There is no ESLint, no Prettier, and no `.editorconfig`. Biome handles both linting and formatting. Style is configured in `biome.json` (double quotes, 2-space indent, ES5 trailing commas).

### `pnpm run build` runs lint first

The `build` script is `biome lint . && tsc --noEmit`. A lint error will prevent the type check from running.

### Version pinning

All `devDependencies` are pinned to exact versions (no `^` or `~`). Update intentionally:

```bash
pnpm update --latest
```
