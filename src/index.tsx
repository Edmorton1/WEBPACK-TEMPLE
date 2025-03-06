import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { LazyAbout, LazyShop } from "@/pages/index.lazy";

const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

const router = createBrowserRouter([{
    path: '/',
    element: <App />,
    children: [
        {
            path: '/about',
            element:  <Suspense fallback="loading..."><LazyAbout /></Suspense>
        },
        {
            path: '/shop',
            element: <Suspense fallback="loading..."><LazyShop /></Suspense>

        }
    ]
}])
root.render(
    <RouterProvider router={router}/>
)