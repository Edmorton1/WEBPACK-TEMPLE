import { lazy } from "react";

export const LazyShop = lazy(() => import("./Shop"))
export const LazyAbout = lazy(() => import("./About"))