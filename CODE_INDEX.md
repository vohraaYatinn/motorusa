## Project Code Index

This file provides a high-level index of the code in the `motorusa` project so you can quickly navigate and understand the structure.

### app
- **`app/layout.tsx`**: Root layout for the Next.js App Router (shared shell, metadata, providers).
- **`app/page.tsx`**: Home page of the site.
- **`app/globals.css`**: Global styles loaded by the app router.

- **`app/contact/page.tsx`**: Contact page route.

- **`app/inventory/page.tsx`**: Inventory listing page (shows multiple vehicles).
- **`app/inventory/[id]/page.tsx`**: Dynamic inventory detail page for a specific vehicle by `id`.

### components
- **`components/header.tsx`**: Main site header/navigation component.
- **`components/footer.tsx`**: Global footer for the site.
- **`components/theme-provider.tsx`**: Theme and dark/light mode provider integration.

#### components/ui
Reusable UI primitives (likely Shadcn or similar). Each file exports one or more UI components:

- **Layout & containers**: `card.tsx`, `accordion.tsx`, `collapsible.tsx`, `drawer.tsx`, `dialog.tsx`, `sheet.tsx`, `resizable.tsx`, `scroll-area.tsx`, `hover-card.tsx`, `popover.tsx`, `tooltip.tsx`.
- **Navigation & menus**: `breadcrumb.tsx`, `dropdown-menu.tsx`, `context-menu.tsx`, `navigation-menu.tsx`, `menubar.tsx`, `pagination.tsx`, `tabs.tsx`, `sidebar.tsx`.
- **Inputs & forms**: `button.tsx`, `button-group.tsx`, `input.tsx`, `textarea.tsx`, `checkbox.tsx`, `radio-group.tsx`, `select.tsx`, `switch.tsx`, `slider.tsx`, `input-group.tsx`, `input-otp.tsx`, `field.tsx`, `form.tsx`.
- **Feedback & overlays**: `alert.tsx`, `alert-dialog.tsx`, `toast.tsx`, `toaster.tsx`, `sonner.tsx`, `progress.tsx`, `skeleton.tsx`, `spinner.tsx`, `badge.tsx`, `empty.tsx`.
- **Media & visualization**: `avatar.tsx`, `aspect-ratio.tsx`, `carousel.tsx`, `chart.tsx`.
- **Misc & utilities**: `item.tsx`, `kbd.tsx`, `label.tsx`, `separator.tsx`, `table.tsx`, `tabs.tsx`, `command.tsx`, `drawer.tsx`, `use-mobile.tsx`, `use-toast.tsx`.

These are typically imported from `components/ui/...` by higher-level pages and components.

### hooks
- **`hooks/use-mobile.ts`**: Custom React hook for detecting mobile viewport / responsive behavior.
- **`hooks/use-toast.ts`**: Custom hook for toast/notification handling.

### lib
- **`lib/utils.ts`**: Shared utility functions (e.g., class name helpers, formatters).

### styles
- **`styles/globals.css`**: Global CSS (legacy or shared styles, may complement `app/globals.css`).

### config & tooling
- **`next.config.mjs`**: Next.js configuration.
- **`tsconfig.json`**: TypeScript configuration.
- **`postcss.config.mjs`**: PostCSS configuration.
- **`components.json`**: Component library (e.g., Shadcn) configuration.
- **`package.json` / `pnpm-lock.yaml` / `package-lock.json`**: Project dependencies and lockfiles.
- **`next-env.d.ts`**: Next.js TypeScript types.

### public assets
- **Images**: Vehicle photos (inventory imagery), placeholder avatars, logos, and icons.
- **Icons**: `apple-icon.png`, `icon.svg`, `icon-dark-32x32.png`, `icon-light-32x32.png`.

---

If you want, I can extend this index with:
- A list of exports per file, or
- A route map (including dynamic route params), or
- A dependency graph between key components/pages.



