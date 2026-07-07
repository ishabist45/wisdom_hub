// Book Data
const books = [
    { 
        id: '1',
        title: 'The Midnight Library',
        author: 'Matt Haig',
        price: 16.99,
        category: 'Fiction',
        description: 'Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.',
        coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop',
        rating: 4.5,
        reviews: 2341,
        inStock: true,
        isbn: '978-0525559474'
    },
    {
        id: '2',
        title: 'The Name of the Wind',
        author: 'Patrick Rothfuss',
        price: 18.99,
        category: 'Fantasy',
        description: 'The tale of Kvothe, from his childhood in a troupe of traveling players, to years spent as a near-feral orphan in a crime-riddled city, to his daring entrance into a legendary school of magic.',
        coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop',
        rating: 4.8,
        reviews: 5632,
        inStock: true,
        isbn: '978-0756404741'
    },
    {
        id: '3',
        title: 'The Silent Patient',
        author: 'Alex Michaelides',
        price: 15.99,
        category: 'Mystery',
        description: 'Alicia Berenson\'s life is seemingly perfect. One evening, she shoots her husband five times in the face, and then never speaks another word.',
        coverImage: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop',
        rating: 4.2,
        reviews: 3876,
        inStock: true,
        isbn: '978-1250301697'
    },
    {
        id: '4',
        title: 'A Brief History of Time',
        author: 'Stephen Hawking',
        price: 19.99,
        category: 'Science',
        description: 'From the Big Bang to black holes, Stephen Hawking takes us on a journey through the history of the universe and explains complex concepts in physics.',
        coverImage: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop',
        rating: 4.6,
        reviews: 4521,
        inStock: true,
        isbn: '978-0553380163'
    },
    {
        id: '5',
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        price: 12.99,
        category: 'Classic',
        description: 'A romantic novel of manners that follows the character development of Elizabeth Bennet, the protagonist of the book who learns about the repercussions of hasty judgments.',
        coverImage: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=400&h=600&fit=crop',
        rating: 4.7,
        reviews: 8932,
        inStock: true,
        isbn: '978-0141439518'
    },
    {
        id: '6',
        title: 'The Love Hypothesis',
        author: 'Ali Hazelwood',
        price: 14.99,
        category: 'Romance',
        description: 'A STEM-focused contemporary romance featuring a fake-dating agreement between a graduate student and a professor.',
        coverImage: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&h=600&fit=crop',
        rating: 4.3,
        reviews: 2876,
        inStock: true,
        isbn: '978-0593336823'
    },
    {
        id: '7',
        title: 'Gone Girl',
        author: 'Gillian Flynn',
        price: 17.99,
        category: 'Thriller',
        description: 'On the occasion of his fifth wedding anniversary, Nick Dunne reports that his wife, Amy, has gone missing. Under pressure from the police and media, Nick\'s portrait of a blissful union begins to crumble.',
        coverImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop',
        rating: 4.4,
        reviews: 6234,
        inStock: true,
        isbn: '978-0307588371'
    },
    {
        id: '8',
        title: 'Sapiens',
        author: 'Yuval Noah Harari',
        price: 21.99,
        category: 'History',
        description: 'A brief history of humankind that explores how Homo sapiens came to dominate the world and what the future may hold.',
        coverImage: 'https://images.unsplash.com763/photo-1493762265-9d179a990aa6?w=400&h=600&fit=crop',
        rating: 4.6,
        reviews: 7891,
        inStock: true,
        isbn: '978-0062316110'
    },
    {
        id: '9',
        title: 'Atomic Habits',
        author: 'James Clear',
        price: 16.99,
        category: 'Self-Help',
        description: 'An easy and proven way to build good habits and break bad ones. Reveals practical strategies that will teach you exactly how to form good habits.',
        coverImage: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop',
        rating: 4.8,
        reviews: 9123,
        inStock: true,
        isbn: '978-0735211292'
    },
    {
        id: '10',
        title: 'The Way of Kings',
        author: 'Brandon Sanderson',
        price: 22.99,
        category: 'Fantasy',
        description: 'Epic fantasy novel set on the world of Roshar, where war rages across the Shattered Plains and ancient magic returns.',
        coverImage: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=400&h=600&fit=crop',
        rating: 4.9,
        reviews: 6745,
        inStock: true,
        isbn: '978-0765326355'
    },
    {
        id: '11',
        title: 'The Thursday Murder Club',
        author: 'Richard Osman',
        price: 15.99,
        category: 'Mystery',
        description: 'Four unlikely friends meet weekly in The Jigsaw Room to discuss unsolved crimes. But when a local developer is found dead, the Thursday Murder Club finds themselves in the middle of their first live case.',
        coverImage: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=600&fit=crop',
        rating: 4.5,
        reviews: 4321,
        inStock: true,
        isbn: '978-1984880987'
    },
    {
        id: '12',
        title: 'Project Hail Mary',
        author: 'Andy Weir',
        price: 18.99,
        category: 'Science Fiction',
        description: 'A lone astronaut must save the earth from disaster in this incredible new science-based thriller from the author of The Martian.',
        coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=600&fit=crop',
        rating: 4.7,
        reviews: 5234,
        inStock: false,
        isbn: '978-0593135204'
    },
    {
        id: '13',
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        price: 14.99,
        category: 'Classic',
        description: 'A novel that explores themes of decadence, idealism, resistance to change, social upheaval, and excess, creating a portrait of the Jazz Age.',
        coverImage: 'https://images.unsplash.com/photo-1509266272358-7701da638078?w=400&h=600&fit=crop',
        rating: 4.6,
        reviews: 8234,
        inStock: true,
        isbn: '978-0743273565'
    },
    {
        id: '14',
        title: 'Dune',
        author: 'Frank Herbert',
        price: 20.99,
        category: 'Science Fiction',
        description: 'Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world.',
        coverImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=600&fit=crop',
        rating: 4.8,
        reviews: 7654,
        inStock: true,
        isbn: '978-0441172719'
    },
    {
        id: '15',
        title: '1984',
        author: 'George Orwell',
        price: 13.99,
        category: 'Science Fiction',
        description: 'A dystopian social science fiction novel and cautionary tale, warning against totalitarianism and censorship.',
        coverImage: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=400&h=600&fit=crop',
        rating: 4.7,
        reviews: 9876,
        inStock: true,
        isbn: '978-0451524935'
    },
    {
        id: '16',
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        price: 15.99,
        category: 'Fantasy',
        description: 'A fantasy novel about the adventures of Bilbo Baggins, a hobbit who joins a group of dwarves on a quest to reclaim their homeland.',
        coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=600&fit=crop',
        rating: 4.9,
        reviews: 12345,
        inStock: true,
        isbn: '978-0547928227'
    },
    {
        id: '17',
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        price: 12.99,
        category: 'Classic',
        description: 'A novel about racial injustice and the loss of innocence, told through the eyes of young Scout Finch in the Deep South.',
        coverImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop',
        rating: 4.8,
        reviews: 8765,
        inStock: true,
        isbn: '978-0446310789'
    },
    {
        id: '18',
        title: 'The Da Vinci Code',
        author: 'Dan Brown',
        price: 16.99,
        category: 'Mystery',
        description: 'A mystery thriller that follows symbologist Robert Langdon as he investigates a murder in the Louvre Museum.',
        coverImage: 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=400&h=600&fit=crop',
        rating: 4.3,
        reviews: 6543,
        inStock: true,
        isbn: '978-0307474278'
    }
];

const categories = ['All', 'Fiction', 'Fantasy', 'Mystery', 'Science', 'Classic', 'Romance', 'Thriller', 'History', 'Self-Help', 'Science Fiction'];

// State
let cart = JSON.parse(localStorage.getItem('bookstore-cart') || '[]');
let currentCategory = 'All';
let currentSort = 'title';
let searchQuery = '';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadHomePageBooks();
    updateCartBadge();
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            // Redirect to catalog page for search
            window.location.href = 'index.html';
        });
    }
});

// Home Page Functions - Load books into grids
function loadHomePageBooks() {
    // Check which page we're on
    const isNewReleasesPage = document.getElementById('newReleasesGrid') && !document.getElementById('bestSellersGrid');
    const isBestSellersPage = document.getElementById('bestSellersGrid') && !document.getElementById('newReleasesGrid');
    const isHomePage = document.getElementById('newReleasesGrid') && document.getElementById('bestSellersGrid');
    
    const newReleasesGrid = document.getElementById('newReleasesGrid');
    const bestSellersGrid = document.getElementById('bestSellersGrid');
    
    // Determine number of books to show
    const newBooks = isNewReleasesPage ? books.slice(0, 6) : books.slice(0, 4);
    const bestSellers = isBestSellersPage 
        ? [...books].sort((a, b) => b.reviews - a.reviews).slice(0, 6)
        : [...books].sort((a, b) => b.reviews - a.reviews).slice(0, 4);
    
    if (newReleasesGrid) {
        newReleasesGrid.innerHTML = newBooks.map(book => `
            <div class="book-card" onclick="showBookDetail('${book.id}')">
                <img src="${book.coverImage}" alt="${book.title}" class="book-cover">
                <div class="book-info">
                    <span class="book-category">${book.category}</span>
                    <h3 class="book-title">${book.title}</h3>
                    <p class="book-author">${book.author}</p>
                    <div class="book-rating">
                        <span class="stars">${'★'.repeat(Math.floor(book.rating))}${'☆'.repeat(5 - Math.floor(book.rating))}</span>
                        <span>${book.rating}</span>
                    </div>
                    <span class="book-price">$${book.price.toFixed(2)}</span>
                    <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart('${book.id}')">🛒 Add to Cart</button>
                </div>
            </div>
        `).join('');
    }
    
    if (bestSellersGrid) {
        bestSellersGrid.innerHTML = bestSellers.map(book => `
            <div class="book-card" onclick="showBookDetail('${book.id}')">
                <img src="${book.coverImage}" alt="${book.title}" class="book-cover">
                <div class="book-info">
                    <span class="book-category">${book.category}</span>
                    <h3 class="book-title">${book.title}</h3>
                    <p class="book-author">${book.author}</p>
                    <div class="book-rating">
                        <span class="stars">${'★'.repeat(Math.floor(book.rating))}${'☆'.repeat(5 - Math.floor(book.rating))}</span>
                        <span>${book.rating}</span>
                        <span style="color: #6b7280;">(${book.reviews})</span>
                    </div>
                    <span class="book-price">$${book.price.toFixed(2)}</span>
                    <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart('${book.id}')">🛒 Add to Cart</button>
                </div>
            </div>
        `).join('');
    }
}

// Cart Functions
function addToCart(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book || !book.inStock) return;
    
    const existingItem = cart.find(item => item.bookId === bookId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ bookId, quantity: 1 });
    }
    
    saveCart();
    updateCartBadge();
    renderCart();
    
    // Show cart briefly
    toggleCart();
    setTimeout(() => toggleCart(), 2000);
}

function removeFromCart(bookId) {
    cart = cart.filter(item => item.bookId !== bookId);
    saveCart();
    updateCartBadge();
    renderCart();
}

function updateQuantity(bookId, quantity) {
    if (quantity <= 0) {
        removeFromCart(bookId);
        return;
    }
    
    const item = cart.find(item => item.bookId === bookId);
    if (item) {
        item.quantity = quantity;
        saveCart();
        updateCartBadge();
        renderCart();
    }
}

function getCartTotal() {
    return cart.reduce((total, item) => {
        const book = books.find(b => b.id === item.bookId);
        return total + (book.price * item.quantity);
    }, 0);
}

function saveCart() {
    localStorage.setItem('bookstore-cart', JSON.stringify(cart));
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if (badge) {
        const count = cart.reduce((sum, item) => sum + item.quantity, 0);
        badge.textContent = count;
    }
}

function toggleCart() {
    const overlay = document.getElementById('cartOverlay');
    const sidebar = document.getElementById('cartSidebar');
    if (overlay && sidebar) {
        overlay.classList.toggle('active');
        sidebar.classList.toggle('active');
        renderCart();
    }
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartFooter = document.getElementById('cartFooter');
    
    if (!cartItems || !cartFooter) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <div style="font-size: 4rem; margin-bottom: 1rem;">🛒</div>
                <p style="margin-bottom: 0.5rem;">Your cart is empty</p>
                <p style="font-size: 0.875rem;">Add some books to get started!</p>
            </div>
        `;
        cartFooter.innerHTML = '';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => {
        const book = books.find(b => b.id === item.bookId);
        return `
            <div class="cart-item">
                <div class="cart-item-info">
                    <img src="${book.coverImage}" alt="${book.title}" class="cart-item-cover">
                    <div class="cart-item-details">
                        <h3>${book.title}</h3>
                        <p class="cart-item-author">${book.author}</p>
                        <p class="cart-item-price">$${book.price.toFixed(2)}</p>
                    </div>
                </div>
                <div class="cart-item-actions">
                    <div class="quantity-controls">
                        <button class="qty-btn" onclick="updateQuantity('${book.id}', ${item.quantity - 1})">-</button>
                        <span style="min-width: 2rem; text-align: center; font-weight: 600;">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity('${book.id}', ${item.quantity + 1})">+</button>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart('${book.id}')">🗑️</button>
                </div>
            </div>
        `;
    }).join('');
    
    cartFooter.innerHTML = `
        <div class="cart-total">
            <span>Total:</span>
            <span style="color: #2563eb;">$${getCartTotal().toFixed(2)}</span>
        </div>
        <button class="checkout-btn" onclick="showCheckout()">Proceed to Checkout</button>
    `;
}

// View Functions
function showCatalog() {
    const mainContent = document.getElementById('mainContent');
    if (!mainContent) return;
    
    // Get selected category from sessionStorage
    const selectedCategory = sessionStorage.getItem('selectedCategory') || 'All';
    currentCategory = selectedCategory;
    
    // Filter and sort books
    let filteredBooks = selectedCategory === 'All' 
        ? [...books] 
        : books.filter(book => book.category === selectedCategory);
    
    // Sort by current sort option
    filteredBooks = sortBooks(filteredBooks, currentSort);
    
    mainContent.innerHTML = `
        <div class="page-header">
            <a href="index.html" class="back-btn" style="margin-bottom: 1rem;">← Back to Home</a>
            <h2>${selectedCategory === 'All' ? 'All Books' : selectedCategory + ' Books'}</h2>
            <p>Browse our collection of ${filteredBooks.length} books</p>
        </div>
        
        <div class="catalog-layout">
            <aside class="catalog-sidebar">
                <h3>Categories</h3>
                <ul class="category-list">
                    ${categories.map(cat => `
                        <li>
                            <a href="#" class="category-link ${cat === selectedCategory ? 'active' : ''}" 
                                onclick="filterCategory('${cat}'); return false;">
                                ${cat}
                            </a>
                        </li>
                    `).join('')}
                </ul>
            </aside>
            
            <div class="catalog-main">
                <div class="filter-bar">
                    <span style="color: #6b7280;">Showing ${filteredBooks.length} books</span>
                    <select onchange="sortBooksBy(this.value)">
                        <option value="title" ${currentSort === 'title' ? 'selected' : ''}>Sort by Title</option>
                        <option value="price-low" ${currentSort === 'price-low' ? 'selected' : ''}>Price: Low to High</option>
                        <option value="price-high" ${currentSort === 'price-high' ? 'selected' : ''}>Price: High to Low</option>
                        <option value="rating" ${currentSort === 'rating' ? 'selected' : ''}>Highest Rated</option>
                    </select>
                </div>
                
                <div class="book-grid" id="catalogGrid">
                    ${filteredBooks.map(book => `
                        <div class="book-card" onclick="showBookDetail('${book.id}')">
                            <img src="${book.coverImage}" alt="${book.title}" class="book-cover">
                            <div class="book-info">
                                <span class="book-category">${book.category}</span>
                                <h3 class="book-title">${book.title}</h3>
                                <p class="book-author">${book.author}</p>
                                <div class="book-rating">
                                    <span class="stars">${'★'.repeat(Math.floor(book.rating))}${'☆'.repeat(5 - Math.floor(book.rating))}</span>
                                    <span>${book.rating}</span>
                                </div>
                                <span class="book-price">$${book.price.toFixed(2)}</span>
                                <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart('${book.id}')">🛒 Add to Cart</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    // Clear the session storage
    sessionStorage.removeItem('selectedCategory');
}

function filterCategory(category) {
    currentCategory = category;
    showCatalog();
}

function sortBooksBy(sortOption) {
    currentSort = sortOption;
    showCatalog();
}

function sortBooks(bookArray, sortOption) {
    const sorted = [...bookArray];
    switch(sortOption) {
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'rating':
            return sorted.sort((a, b) => b.rating - a.rating);
        default:
            return sorted.sort((a, b) => a.title.localeCompare(b.title));
    }
}

function filterCategoryAndShow(category) {
    // Redirect to catalog page with category parameter
    window.location.href = 'catalog.html?category=' + category;
}

function subscribeHomeNewsletter(event) {
    event.preventDefault();
    const email = document.getElementById('homeNewsletterEmail').value;
    if (email) {
        alert('Thank you for subscribing! We will send updates to ' + email);
        document.getElementById('homeNewsletterEmail').value = '';
    }
}

// Book Detail View - Navigate to new page
function showBookDetail(bookId) {
    // Navigate to book-detail.html with book ID as parameter
    window.location.href = 'book-detail.html?id=' + bookId;
}

function closeBookDetail() {
    const overlay = document.getElementById('bookDetailOverlay');
    const modal = document.getElementById('bookDetailModal');
    
    if (overlay && modal) {
        overlay.classList.remove('active');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function updateDetailQuantity(bookId, change) {
    const qtySpan = document.getElementById('detailQty' + bookId);
    if (qtySpan) {
        let qty = parseInt(qtySpan.textContent) + change;
        if (qty < 1) qty = 1;
        if (qty > 10) qty = 10;
        qtySpan.textContent = qty;
    }
}

function addToCartFromDetail(bookId) {
    const qtySpan = document.getElementById('detailQty' + bookId);
    const quantity = qtySpan ? parseInt(qtySpan.textContent) : 1;
    
    const book = books.find(b => b.id === bookId);
    if (!book || !book.inStock) return;
    
    const existingItem = cart.find(item => item.bookId === bookId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ bookId, quantity });
    }
    
    saveCart();
    updateCartBadge();
    renderCart();
    closeBookDetail();
    
    // Show cart briefly
    toggleCart();
    setTimeout(() => toggleCart(), 2000);
}

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeBookDetail();
        closeMobileNav();
    }
});

// Mobile Navigation Toggle
function toggleMobileNav() {
    const navMenu = document.getElementById('mobileNavMenu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

function closeMobileNav() {
    const navMenu = document.getElementById('mobileNavMenu');
    if (navMenu) {
        navMenu.classList.remove('active');
    }
}

// Close mobile nav when clicking a link
document.addEventListener('click', (e) => {
    const navMenu = document.getElementById('mobileNavMenu');
    const navToggle = document.querySelector('.mobile-nav-toggle');
    if (navMenu && navMenu.classList.contains('active')) {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    }
});

// Checkout Functions
function showCheckout() {
    toggleCart();
    
    const mainContent = document.getElementById('mainContent');
    if (!mainContent) return;
    
    if (cart.length === 0) {
        window.location.href = 'index.html';
        return;
    }
    
    const subtotal = getCartTotal();
    const tax = subtotal * 0.08;
    const shipping = subtotal > 50 ? 0 : 5.99;
    const total = subtotal + tax + shipping;
    
    mainContent.innerHTML = `
        <button class="back-btn" onclick="window.location.href='index.html'">← Back</button>
        
        <div class="checkout-grid">
            <div>
                <div class="checkout-form">
                    <h2>Shipping Information</h2>
                    <form id="checkoutForm" onsubmit="processCheckout(event)">
                        <div class="form-row">
                            <div class="form-group">
                                <label>First Name</label>
                                <input type="text" required>
                            </div>
                            <div class="form-group">
                                <label>Last Name</label>
                                <input type="text" required>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" required>
                        </div>
                        
                        <div class="form-group">
                            <label>Phone</label>
                            <input type="tel" required>
                        </div>
                        
                        <div class="form-group">
                            <label>Address</label>
                            <input type="text" required>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label>City</label>
                                <input type="text" required>
                            </div>
                            <div class="form-group">
                                <label>State</label>
                                <input type="text" required>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label>ZIP Code</label>
                            <input type="text" required>
                        </div>
                </div>
                
                <div class="checkout-form" style="margin-top: 1.5rem;">
                    <h2>💳 Payment Information</h2>
                    
                    <div class="form-group">
                        <label>Cardholder Name</label>
                        <input type="text" required>
                    </div>
                    
                    <div class="form-group">
                        <label>Card Number</label>
                        <input type="text" placeholder="1234 5678 9012 3456" maxlength="19" required>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label>Expiry Date</label>
                            <input type="text" placeholder="MM/YY" maxlength="5" required>
                        </div>
                        <div class="form-group">
                            <label>CVV</label>
                            <input type="text" placeholder="123" maxlength="4" required>
                        </div>
                    </div>
                    
                    <button type="submit" class="submit-order-btn">Complete Purchase</button>
                    </form>
                </div>
            </div>
            
            <div class="order-summary">
                <h2>Order Summary</h2>
                <div class="summary-items">
                    ${cart.map(item => {
                        const book = books.find(b => b.id === item.bookId);
                        return `
                            <div class="summary-item">
                                <img src="${book.coverImage}" alt="${book.title}" class="summary-item-cover">
                                <div style="flex: 1; min-width: 0;">
                                    <p style="font-size: 0.875rem; font-weight: 600; margin-bottom: 0.25rem;">${book.title}</p>
                                    <p style="font-size: 0.75rem; color: #6b7280;">Qty: ${item.quantity}</p>
                                    <p style="font-size: 0.875rem; font-weight: 600;">$${(book.price * item.quantity).toFixed(2)}</p>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
                
                <div class="summary-totals">
                    <div class="summary-row">
                        <span style="color: #6b7280;">Subtotal</span>
                        <span>$${subtotal.toFixed(2)}</span>
                    </div>
                    <div class="summary-row">
                        <span style="color: #6b7280;">Tax (8%)</span>
                        <span>$${tax.toFixed(2)}</span>
                    </div>
                    <div class="summary-row">
                        <span style="color: #6b7280;">Shipping</span>
                        <span>${shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2)}</span>
                    </div>
                    <div class="summary-row total">
                        <span>Total</span>
                        <span style="color: #2563eb;">$${total.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Book Detail Page Functions
let detailQuantity = 1;

function loadBookDetail() {
    // Get book ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('id');
    
    if (!bookId) {
        // No book ID, redirect to index
        window.location.href = 'index.html';
        return;
    }
    
    // Find the book
    const book = books.find(b => b.id === bookId);
    
    if (!book) {
        // Book not found, redirect to index
        window.location.href = 'index.html';
        return;
    }
    
    // Update page title
    document.title = `${book.title} - Silent Wisdom`;
    
    // Generate book detail content using innerHTML
    const container = document.getElementById('bookDetailContainer');
    container.innerHTML = `
        <div class="book-detail-page">
            <div class="book-detail-page-image">
                <img src="${book.coverImage}" alt="${book.title}">
            </div>
            <div class="book-detail-page-info">
                <span class="book-detail-page-category">${book.category}</span>
                <h1 class="book-detail-page-title">${book.title}</h1>
                <p class="book-detail-page-author">by ${book.author}</p>
                <div class="book-detail-page-rating">
                    <span class="stars">${'★'.repeat(Math.floor(book.rating))}${'☆'.repeat(5 - Math.floor(book.rating))}</span>
                    <span class="rating-value">${book.rating}</span>
                    <span class="review-count">(${book.reviews.toLocaleString()} reviews)</span>
                </div>
                <div class="book-detail-page-price">
                    $${book.price.toFixed(2)}
                </div>
                <p class="book-detail-page-description">${book.description}</p>
                <div class="book-detail-page-meta">
                    <div class="book-detail-page-meta-item">
                        <span class="book-detail-page-meta-label">ISBN</span>
                        <span class="book-detail-page-meta-value">${book.isbn}</span>
                    </div>
                    <div class="book-detail-page-meta-item">
                        <span class="book-detail-page-meta-label">Format</span>
                        <span class="book-detail-page-meta-value">Paperback</span>
                    </div>
                </div>
                <div class="book-detail-page-stock ${book.inStock ? 'in-stock' : 'out-of-stock'}">
                    <span class="stock-icon">${book.inStock ? '✓' : '✕'}</span>
                    <span>${book.inStock ? 'In Stock' : 'Out of Stock'}</span>
                </div>
                <div class="book-detail-page-actions">
                    <div class="book-detail-page-quantity">
                        <button onclick="updateDetailQuantity(-1)">−</button>
                        <span id="detailQty">1</span>
                        <button onclick="updateDetailQuantity(1)">+</button>
                    </div>
                    <button class="add-to-cart-btn" onclick="addToCartFromDetail('${book.id}')" ${!book.inStock ? 'disabled' : ''}>
                        🛒 Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
}

function updateDetailQuantity(change) {
    detailQuantity += change;
    if (detailQuantity < 1) detailQuantity = 1;
    if (detailQuantity > 10) detailQuantity = 10;
    const qtyElement = document.getElementById('detailQty');
    if (qtyElement) {
        qtyElement.textContent = detailQuantity;
    }
}

function addToCartFromDetail(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book || !book.inStock) return;
    
    const existingItem = cart.find(item => item.bookId === bookId);
    
    if (existingItem) {
        existingItem.quantity += detailQuantity;
    } else {
        cart.push({ bookId, quantity: detailQuantity });
    }
    
    saveCart();
    updateCartBadge();
    renderCart();
    
    // Show cart briefly
    toggleCart();
    setTimeout(() => toggleCart(), 2000);
    
    // Reset quantity
    detailQuantity = 1;
    const qtyElement = document.getElementById('detailQty');
    if (qtyElement) {
        qtyElement.textContent = detailQuantity;
    }
}

function processCheckout(event) {
    event.preventDefault();
    
    const orderNumber = 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    const email = event.target.querySelector('input[type="email"]').value;
    
    cart = [];
    saveCart();
    updateCartBadge();
    
    const mainContent = document.getElementById('mainContent');
    if (mainContent) {
        mainContent.innerHTML = `
            <div class="success-message">
                <div class="success-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h1>Order Confirmed!</h1>
                <p style="color: #6b7280; margin-bottom: 2rem;">
                    Thank you for your purchase. A confirmation email has been sent to ${email}
                </p>
                <div class="order-number">
                    <p style="font-size: 0.875rem; color: #6b7280; margin-bottom: 0.5rem;">Order Number</p>
                    <p style="font-size: 1.875rem; font-weight: bold;">${orderNumber}</p>
                </div>
                <button class="submit-order-btn" onclick="window.location.href='index.html'">Continue Shopping</button>
            </div>
        `;
    }
}

