# shadcn-next-dashboard

Boilerplate Next.js 15 dashboard with App Router and shadcn/ui

- [Next.js 15 App Router](https://nextjs.org/docs/app)
- [TypeScript](https://www.typescriptlang.org/)
- [React 19](https://react.dev/blog/2024/12/05/react-19)
- [Shadcn-ui](https://ui.shadcn.com/)
- [Tanstack React Table](https://tanstack.com/table)
- [Tailwind CSS](https://tailwindcss.com/)
- [Biome](https://biomejs.dev/)
- [Playwright](https://playwright.dev/)


## Getting Started

```
npm i
npm run dev
```

## Format
Code formatting with Biome

```
npm run format
```

## E2E Testing
End-to-end tests with Playwright

```bash
# Run all e2e tests
npm run test:e2e

# Run tests in UI mode
npm run test:e2e:ui

# Run tests in headed mode (see browser)
npm run test:e2e:headed

# Debug tests
npm run test:e2e:debug
```

The test suite includes comprehensive tests for:
- Home page with DataTable
- Sidebar navigation and toggle
- Theme switching
- Layout and responsiveness across different viewports