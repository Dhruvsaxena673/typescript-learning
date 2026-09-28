import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import { ChaiCard } from './components/ChaiCard.tsx';
import { Counter } from './components/Counter.tsx';
import ChaiList from './components/ChaiList.tsx';
import { OrderForm } from './components/OrderForm.tsx';
const menu = [
    { id: 1, name: "Masala", price: 25 },
    { id: 2, name: "Ginger", price: 50 },
    { id: 3, name: "Lemon", price: 60 },
];
function App() {
    return (_jsxs(_Fragment, { children: [_jsxs("div", { children: [_jsx(ChaiCard, { name: "Headphone", price: 5000 }), _jsx(ChaiCard, { name: "Iphone", price: 200000 })] }), _jsx("div", { children: _jsx(Counter, {}) }), _jsx("div", { children: _jsx(ChaiList, { items: menu }) }), _jsx("div", { children: _jsx(OrderForm, { onSubmit: (order) => {
                        console.log("Placed", order.name, order.cups);
                    } }) })] }));
}
export default App;
//# sourceMappingURL=App.js.map