// Task 4: Product Interface and Total Price Calculation
interface Product {
    name: string;
    price: number;
}

function calculateTotalPrice(products: Product[]): number {
    return products.reduce((total, product) => total + product.price, 0);
}

// Example usage:
const products: Product[] = [
    { name: "Apple", price: 1.2 },
    { name: "Banana", price: 0.8 },
    { name: "Orange", price: 1.5 }
];

const totalPrice = calculateTotalPrice(products);
console.log(`The total price of the products is: $${totalPrice.toFixed(2)}`); // Print with a clear message

// Task 5: Email Validation
function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Example usage:
const email1 = "example@domain.com";
const email2 = "invalid-email";

console.log(`Is "${email1}" a valid email? ${isValidEmail(email1)}`); // Print with a clear message
console.log(`Is "${email2}" a valid email? ${isValidEmail(email2)}`); // Print with a clear message
