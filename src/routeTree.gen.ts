/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const ThanksLazyImport = createFileRoute('/thanks')()
const CartLazyImport = createFileRoute('/cart')()
const R500LazyImport = createFileRoute('/500')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const ThanksLazyRoute = ThanksLazyImport.update({
  path: '/thanks',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/thanks.lazy').then((d) => d.Route))

const CartLazyRoute = CartLazyImport.update({
  path: '/cart',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/cart.lazy').then((d) => d.Route))

const R500LazyRoute = R500LazyImport.update({
  path: '/500',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/500.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/500': {
      id: '/500'
      path: '/500'
      fullPath: '/500'
      preLoaderRoute: typeof R500LazyImport
      parentRoute: typeof rootRoute
    }
    '/cart': {
      id: '/cart'
      path: '/cart'
      fullPath: '/cart'
      preLoaderRoute: typeof CartLazyImport
      parentRoute: typeof rootRoute
    }
    '/thanks': {
      id: '/thanks'
      path: '/thanks'
      fullPath: '/thanks'
      preLoaderRoute: typeof ThanksLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  R500LazyRoute,
  CartLazyRoute,
  ThanksLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/500",
        "/cart",
        "/thanks"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/500": {
      "filePath": "500.lazy.tsx"
    },
    "/cart": {
      "filePath": "cart.lazy.tsx"
    },
    "/thanks": {
      "filePath": "thanks.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
