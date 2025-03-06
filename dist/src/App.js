import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Outlet, Link } from 'react-router-dom';
import Linux from "@/assets/logo.svg";
// ДЛЯ АССИНХРОННЫХ ОПЕРАЦИЙ ИСПОЛЬЗОВАТЬ suspense
function App() {
    function todo(a) {
    }
    todo('a');
    return (_jsxs(_Fragment, { children: [_jsxs("h1", { children: ["PLATFORM: ", __PLATFORM__] }), _jsx("div", { children: _jsx(Linux, { fill: "red" }) }), _jsx(Link, { to: '/about', children: "About" }), _jsx(Link, { to: '/shop', children: "About" }), _jsx(Outlet, {})] }));
}
export default App;
