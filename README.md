# Reproduction: Compatibility Issue with Cloudflare Worker

This is a reproduction for issue [Placeholder](...)

## Steps to Reproduce

1. Clone this repo.
2. Install dependencies with `pnpm install`.
3. Run the development server with `pnpm dev`.
4. Go to `http://localhost:5173`, verify that `cuid2` works as expected.
5. Build the project with `pnpm build`.
6. Run build in Cloudflare workerd environment with `pnpm wrangler dev`.
7. Observe output in terminal

### Expected Result

Server starts without errors, and visiting `http://localhost:8787` shows a generated CUID2.

### Actual Output

Server fails to start with the following error:

```log
✘ [ERROR] service core:user:cloudflare-vite-get-started: Uncaught Error: Disallowed operation called within global scope. Asynchronous I/O (ex: fetch() or connect()), setting a timeout, and generating random values are not allowed within global scope. To fix this error, perform this operation within a handler. https://developers.cloudflare.com/workers/runtime-apis/handlers/

    at null.<anonymous> (index.js:1613:25)
    at null.<anonymous> (index.js:1660:38) in init
    at null.<anonymous> (index.js:1678:18)
```

## Additional Information

This code was bootstrapped following [Cloudflare official docs](https://developers.cloudflare.com/workers/vite-plugin/get-started/).

Code of interest is at [src/index.ts`](./src/index.ts):
