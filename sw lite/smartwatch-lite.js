
function addToCart() {
    // Get current cart count
    let currentCount = parseInt(localStorage.getItem('cartCount')) || 0;
    
    // Get quantity
    const quantity = parseInt(document.getElementById('quantity').value) || 1;
    
    // Update cart count
    currentCount += quantity;
    localStorage.setItem('cartCount', currentCount);
    
    // Update cart display
    document.getElementById('cart-count').textContent = currentCount;
    
    // Show confirmation
    alert(`${quantity} SmartWatch Lite added to cart!`);
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('cart-count').textContent = 
        localStorage.getItem('cartCount') || '0';
});