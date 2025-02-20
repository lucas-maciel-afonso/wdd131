// Product Array (customized for Mate Tea)
const products = [
    { id: "mt-001", name: "Chimarrão Mate", averagerating: 4.8 },
    { id: "mt-002", name: "Tereré Mate", averagerating: 4.6 },
    { id: "mt-003", name: "Roasted Mate", averagerating: 4.2 },
    { id: "mt-004", name: "Mate Cocido", averagerating: 4.0 },
    { id: "mt-005", name: "Organic Mate", averagerating: 4.9 }
];

// Populate Product Select Options
document.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.getElementById('productName');
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }

    // Review Counter on Confirmation Page
    const reviewCounter = document.getElementById('reviewCounter');
    if (reviewCounter) {
        let count = localStorage.getItem('reviewCount') || 0;
        count = parseInt(count) + 1;
        localStorage.setItem('reviewCount', count);
        reviewCounter.textContent = count;
    }
});