let response = "42";
//force fully convert to string
let numericLength = response.length;
let bookString = '{"name":"One thing"}';
let bookObject = JSON.parse(bookString);
console.log(bookObject);
const inputElement = document.getElementById("username");
let value;
value = "chai";
value = [1, 2, 3];
value = 2.5;
value.toUpperCase();
let newValue;
newValue = "chai";
newValue = [1, 2, 3];
newValue = 2.5;
if (typeof newValue === "string") {
    newValue.toUpperCase();
}
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log("Errror", error);
    const data = "chai aur code";
    const strData = data;
    function redirectBasedOnRole(role) {
        if (role === "admin") {
            console.log("redirecting to admin dashboard");
            return;
        }
        if (role === "user") {
            console.log("redirecting to user dashboard");
            return;
        }
        role;
    }
    function neverReturn() {
        while (true) { }
    }
}
export {};
//# sourceMappingURL=moreTypes.js.map