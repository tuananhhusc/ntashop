// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Product card hover effects
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Cart functionality
let cart = [];
let cartCount = 0;

// Buy button click handler
document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', function() {
        const productCard = this.parentElement;
        const productName = productCard.querySelector('h4').textContent;
        const productImage = productCard.querySelector('.product-image img').src;
        const productDescription = productCard.querySelector('p').textContent;
        
        addToCart(productName, productImage, productDescription);
        showNotification(`Đã thêm ${productName} vào giỏ hàng!`);
    });
});

function addToCart(name, image, description) {
    // Check if product already exists in cart
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: name,
            image: image,
            description: description,
            quantity: 1
        });
    }
    
    updateCartCount();
    updateCartDisplay();
}

function updateCartCount() {
    cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
        cartCountElement.style.animation = 'pulse 0.5s ease';
    }
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-cart"></i>
                <p>Giỏ hàng trống</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">Số lượng: ${item.quantity}</div>
                </div>
                <button class="remove-item" onclick="removeFromCart('${item.name}')">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    }
    
    cartTotal.textContent = cartCount;
}

function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    updateCartCount();
    updateCartDisplay();
}

function clearCart() {
    cart = [];
    updateCartCount();
    updateCartDisplay();
    closeCartModal();
}

// Cart modal functionality
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const clearCartBtn = document.getElementById('clearCart');
const checkoutBtn = document.getElementById('checkoutBtn');

cartBtn.addEventListener('click', () => {
    cartModal.classList.add('show');
    updateCartDisplay();
});

closeCart.addEventListener('click', closeCartModal);

// Close cart when clicking outside
cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        closeCartModal();
    }
});

function closeCartModal() {
    cartModal.classList.remove('show');
}

clearCartBtn.addEventListener('click', clearCart);

checkoutBtn.addEventListener('click', () => {
    closeCartModal();
    showCheckoutModal();
});

// Checkout modal functionality
const checkoutModal = document.getElementById('checkoutModal');
const closeCheckout = document.getElementById('closeCheckout');

closeCheckout.addEventListener('click', () => {
    checkoutModal.classList.remove('show');
});

// Close checkout when clicking outside
checkoutModal.addEventListener('click', (e) => {
    if (e.target === checkoutModal) {
        checkoutModal.classList.remove('show');
    }
});

function showCheckoutModal() {
    checkoutModal.classList.add('show');
}

// Notification system
function showNotification(message) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create new notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Cart functionality
function updateCartCount() {
    cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
        cartCountElement.style.animation = 'pulse 0.5s ease';
    }
}

// Add pulse animation for cart count
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
    }
    
    .nav a.active {
        color: #ffd700 !important;
        font-weight: 600;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .notification-content i {
        font-size: 1.2rem;
    }
`;
document.head.appendChild(style);

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add search input if search button exists
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            showSearchModal();
        });
    }
});

function showSearchModal() {
    const modal = document.createElement('div');
    modal.className = 'search-modal';
    modal.innerHTML = `
        <div class="search-modal-content">
            <div class="search-header">
                <h3>Tìm kiếm sản phẩm</h3>
                <button class="close-search">&times;</button>
            </div>
            <input type="text" placeholder="Nhập tên sản phẩm..." class="search-input">
            <div class="search-results"></div>
        </div>
    `;
    
    // Add styles
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        z-index: 10001;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    const modalContent = modal.querySelector('.search-modal-content');
    modalContent.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 15px;
        width: 90%;
        max-width: 500px;
        max-height: 80vh;
        overflow-y: auto;
    `;
    
    // Add to page
    document.body.appendChild(modal);
    
    // Close functionality
    modal.querySelector('.close-search').addEventListener('click', () => {
        modal.remove();
    });
    
    // Click outside to close
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    // Search functionality
    const searchInput = modal.querySelector('.search-input');
    const searchResults = modal.querySelector('.search-results');
    
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        if (query.length < 2) {
            searchResults.innerHTML = '';
            return;
        }
        
        const products = document.querySelectorAll('.product-card h4');
        const results = [];
        
        products.forEach(product => {
            if (product.textContent.toLowerCase().includes(query)) {
                results.push(product.textContent);
            }
        });
        
        if (results.length > 0) {
            searchResults.innerHTML = results.map(result => 
                `<div class="search-result-item">${result}</div>`
            ).join('');
        } else {
            searchResults.innerHTML = '<div class="no-results">Không tìm thấy sản phẩm</div>';
        }
    });
    
    // Focus on input
    searchInput.focus();
}

// Add search result styles
const searchStyles = document.createElement('style');
searchStyles.textContent = `
    .search-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }
    
    .close-search {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: #666;
    }
    
    .search-input {
        width: 100%;
        padding: 12px;
        border: 2px solid #e9ecef;
        border-radius: 8px;
        font-size: 1rem;
        margin-bottom: 1rem;
    }
    
    .search-input:focus {
        outline: none;
        border-color: #667eea;
    }
    
    .search-result-item {
        padding: 10px;
        border-bottom: 1px solid #e9ecef;
        cursor: pointer;
        transition: background 0.2s ease;
    }
    
    .search-result-item:hover {
        background: #f8f9fa;
    }
    
    .no-results {
        text-align: center;
        color: #666;
        padding: 1rem;
    }
`;
document.head.appendChild(searchStyles);

// Image error handling
function handleImageError(img) {
    const productImage = img.parentElement;
    productImage.innerHTML = `
        <div class="image-fallback">
            <i class="fas fa-image"></i>
            <span>Hình ảnh không khả dụng</span>
        </div>
    `;
    productImage.classList.add('has-fallback');
}

// Add error handlers to all images
document.querySelectorAll('.product-image img').forEach(img => {
    // Preload image
    const preloadImg = new Image();
    preloadImg.onload = () => {
        img.style.opacity = '1';
        img.classList.add('loaded');
    };
    preloadImg.onerror = () => handleImageError(img);
    
    // Set initial opacity for smooth loading
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
    
    // Start preloading
    preloadImg.src = img.src;
    
    // Fallback error handling
    img.addEventListener('error', () => handleImageError(img));
});

// Lazy loading for better performance
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all product cards
document.querySelectorAll('.product-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add scroll to top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: #667eea;
    color: white;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    z-index: 1000;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
`;

document.body.appendChild(scrollToTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Scroll to top functionality
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Hover effect for scroll to top button
scrollToTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
    this.style.background = '#764ba2';
});

scrollToTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.background = '#667eea';
});
