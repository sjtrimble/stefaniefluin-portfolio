# Route Password Protection Instructions

This project includes a reusable, lightweight route-password system.

## What Is Already Implemented

- Guard: `src/app/security/password-route.guard.ts`
- Service: `src/app/security/route-password.service.ts`
- Route helper: `src/app/security/with-password-protection.ts`
- Unlock page: `src/app/pages/unlock-page/unlock-page.component.ts`

## Protect A Route

Wrap a route with `withPasswordProtection` in `src/app/app.routes.ts`:

```ts
withPasswordProtection(
  { path: 'case-study/:slug', component: CaseStudyPageComponent },
  'caseStudies'
)
```

- First argument: normal Angular route object
- Second argument: password area key (for example `caseStudies`)

## Where Passwords Come From

1. Default fallback in code:

- `src/app/security/route-password.service.ts`
- `DEFAULT_ROUTE_PASSWORDS`

2. Local runtime override (recommended for private local values):

- `public/route-passwords.local.js`

`src/index.html` loads this script before app startup.

If present, values from `window.__ROUTE_PASSWORDS__` override defaults.

## Keep Passwords Out Of GitHub

- `public/route-passwords.local.js` is gitignored in `.gitignore`
- Use this example to create your local file:
  - `public/route-passwords.local.js.example`

Example content:

```js
window.__ROUTE_PASSWORDS__ = {
  caseStudies: 'your-real-password'
};
```

## Security Note

This is a **client-side soft gate**. Anyone with browser dev tools can inspect client code/runtime values.

For real security, use hosting or edge protection (Cloudflare Access, Vercel/Netlify auth, etc.) in front of the route.
