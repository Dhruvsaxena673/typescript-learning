import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export function Counter() {
    const [count, setCount] = useState(0);
    return (_jsxs(_Fragment, { children: [_jsxs("p", { children: ["Cups ordered: ", count] }), _jsx("button", { onClick: () => setCount((c) => c + 1), children: "Order one more" })] }));
}
//# sourceMappingURL=Counter.js.map