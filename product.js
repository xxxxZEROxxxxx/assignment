function calculateTotalPrice(products) {
    return products.reduce(function (total, product) { return total + product.price; }, 0);
}
// Example usage:
var products = [
    { name: "Apple", price: 1.2 },
    { name: "Banana", price: 0.8 },
    { name: "Orange", price: 1.5 }
];
var totalPrice = calculateTotalPrice(products);
console.log("The total price of the products is: $".concat(totalPrice.toFixed(2))); // Print with a clear message
// Task 5: Email Validation
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
// Example usage:
var email1 = "example@domain.com";
var email2 = "invalid-email";
console.log("Is \"".concat(email1, "\" a valid email? ").concat(isValidEmail(email1))); // Print with a clear message
console.log("Is \"".concat(email2, "\" a valid email? ").concat(isValidEmail(email2))); // Print with a clear message
