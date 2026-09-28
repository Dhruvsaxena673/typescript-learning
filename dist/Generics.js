function wrapInArray(item) {
    return [item];
}
wrapInArray("masala");
wrapInArray(42);
wrapInArray({ flavour: "ginger" });
function pair(a, b) {
    return [a, b];
}
pair("masala", 20);
pair("masala", { flavor: "Ginger" });
const numberBox = { content: 10 };
const numberBoxCup = { content: "10" };
const res = {
    status: 200,
    data: { flavor: "masala" }
};
export {};
//# sourceMappingURL=Generics.js.map