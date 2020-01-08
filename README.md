# koa-router-static
Static file serving compatible with koa-router.

rewrite with typescript

## Usage

Simply use the middleware in your router and choose a directory. The module will already find the file you requested and serve it for you.

Full-code example:

```typescript
import Router from "koa-router";
import serve from "koa-router-static";

let router = new Router();

router.get('/*', serve('./assets/'));
```

In this case, the contents of the `assets` directory will be made available for your route.

You can also stack more than one serve (in case you want to have different assets for each route):

```typescript
router.get('/*', serve('./images/'));
router.get('/*', serve('./assets/'));
```
