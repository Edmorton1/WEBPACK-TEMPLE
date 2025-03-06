import { lazy } from "react";
export var LazyShop = lazy(function () { return import("./Shop"); });
export var LazyAbout = lazy(function () { return import("./About"); });
