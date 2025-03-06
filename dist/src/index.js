import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import { LazyAbout, LazyShop } from "@/pages/index.lazy";
var domNode = document.getElementById('root');
var root = ReactDOM.createRoot(domNode);
var router = createBrowserRouter([{
        path: '/',
        element: _jsx(App, {}),
        children: [
            {
                path: '/about',
                element: _jsx(Suspense, { fallback: "loading...", children: _jsx(LazyAbout, {}) })
            },
            {
                path: '/shop',
                element: _jsx(Suspense, { fallback: "loading...", children: _jsx(LazyShop, {}) })
            }
        ]
    }]);
root.render(_jsx(RouterProvider, { router: router }));
