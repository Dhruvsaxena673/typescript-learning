function getChai(kind) {
    if (typeof kind === "string") {
        return `Making ${kind} chai...`;
    }
    return `Chai order: ${kind}`;
}
function serveChai(msg) {
    if (msg) {
        return `Serving ${msg}`;
    }
    return 'Serving default masala chai';
}
function orderChai(size) {
    if (size === "small") {
        return "small chai";
    }
    if (size === "medium" || size === "large") {
        return "make extra chai";
    }
    return `chai order #${size}`;
}
class KulhadChai {
    serve() {
        return `Serving kulhad chai`;
    }
}
class CuttingChai {
    serve() {
        return `Serving Cutting chai`;
    }
}
function serve(chai) {
    if (chai instanceof KulhadChai) {
        return chai.serve();
    }
}
function isChaiOrder(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number");
}
function serveOrder(item) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar`;
    }
    return `Serving custom chai: ${item}`;
}
function MakeChai(order) {
    switch (order.type) {
        case "masala":
            return "Masala chai";
            break;
        case "elaichi":
            return "elaichi chai";
            break;
    }
}
function brew(order) {
    if ("spicelevel" in order) {
        // 
    }
}
function isStringArray(arr) {
}
export {};
//# sourceMappingURL=typeNarrowing.js.map