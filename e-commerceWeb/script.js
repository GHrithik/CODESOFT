const products = {
    favorites: [
        {
            id: "1",
            title: "ENSURE Diabetes Care Special Nutrition Drink - Vanilla",
            description: "Scientifically formulated nutrition",
            image: "./favorites/diabetesDrink.png",
            price: 694,
            originalPrice: 800,
            discount: "13% off",
            link: "/product/ensure-diabetes",
            quantity: "400g"
        },
        {
            id: "2",
            title: "Herbalife Formula 1 Nutritional Shake Mix - Vanilla",
            description: "Balanced nutrition for active lifestyle",
            image: "./favorites/vanillaDrink.png",
            price: 1858,
            originalPrice: 2120,
            discount: "12% off",
            link: "/product/herbalife-formula",
            quantity: "500g"
        },
        {
            id: "3",
            title: "Premium Leather Belt with Gold Buckle",
            description: "Elegant design with premium finish",
            image: "./favorites/premiumBelt.png",
            price: 593,
            originalPrice: 1999,
            discount: "70% off",
            link: "/product/premium-belt"
        },
        {
            id: "4",
            title: "Classic Brown Leather Belt",
            description: "Timeless style with brass buckle",
            image: "./favorites/classicBelt.png",
            price: 802,
            originalPrice: 3999,
            discount: "80% off",
            link: "/product/classic-belt"


        },

         {
            id: "5",
            title: "Fastrack Optimus Pro with 1.43 AMOLED Display",
            description: "Fastrack Optimus Pro with 1.43 AMOLED Display with AOD and 466 x 466 Bright Pixel Resolution Premium Smartwatch",
            image: "./favorites/watch.png",
            price: 1299,
            originalPrice: 5999,
            discount: "80% off",
            link: "/product/Fastrack-Optimus-Pro"

            
        },
        {
            id: "6",
            title: "Boult Astra with Quad Mic ENC",
            description: "Elevate your gaming experience with Boult Astra earbuds. Dominate the gameverse with 48 hours of playtime and 120 hours of standby, ensuring uninterrupted gaming sessions",
            image: "./favorites/earpods.png",
            price: 1199,
            originalPrice: 3499,
            discount: "60% off",
            link: "/product/earpods"


        }
    ],
    handpicked: [
        {
            id: "7",
            title: "Men's Olive Green Bomber Jacket",
            description: "Premium comfort and style",
            image: "./handpicked/bomberJacket.png",
            price: 849,
            originalPrice: 1499,
            discount: "43% off",
            link: "/product/bomber-jacket"
        },
         {
            id: "16",
            title: "Men's Slippers & Flip Flops",
            description: "Min. 70% Off",
            image: "./discounts/slippers.png",
            price: 299,
            originalPrice: 999,
            discount: "70% off",
            link: "/category/slippers"
        }
        ,
        {
            id: "9",
            title: "Premium asian sneakers",
            description: "Ultimate comfort for daily wear",
            image: "./handpicked/asianSneakers2.png",
            price: 999,
            originalPrice: 2999,
            discount: "70% off",
            link: "/product/comfort-slippers"
        },
        {
            id: "10",
            title: "Urban Grey Laptop Backpack",
            description: "Stylish and functional design",
            image: "./handpicked/laptopBag.png",
            price: 1499,
            originalPrice: 2999,
            discount: "50% off",
            link: "/product/laptop-backpack"
        },
        {
            id: "11",
            title: "Men Cargos",
            description: "These cargo pants are precisely crafted to provide a comfortable regular fit that goes with different body types. This cargo will give you a comfortable and classy look.",
            image: "./handpicked/mencargo.png",
            price: 499,
            originalPrice: 2799,
            discount: "73% off",
            link: "/product/Men-Cargo"
        },
        {
            id: "12",
            title: "Lenovo Tab M11 8 GB RAM 128 GB ROM",
            description: " Unlock the magic of AI-powered Lenovo Tab M11",
            image: "./handpicked/lenovotab.png",
            price: 16999,
            originalPrice: 30999,
            discount: "45% off",
            link: "/product/Lenovo-Tab"
        }

    ],
    discounts: [
        {
            id: "13",
            title: "Men's Casual Shoes",
            description: "Min. 70% Off",
            image: "./discounts/casualShoes.png",
            price: 599,
            originalPrice: 1999,
            discount: "70% off",
            link: "/category/casual-shoes"
        },
        {
            id: "14",
            title: "Men's Jackets",
            description: "Min. 50% Off",
            image: "./discounts/menjacket.png",
            price: 999,
            originalPrice: 1999,
            discount: "50% off",
            link: "/category/jackets"
        },
        {
            id: "15",
            title: "Laptop Bags",
            description: "Min. 70% Off",
            image: "./discounts/laptopBag.png",
            price: 799,
            originalPrice: 2499,
            discount: "70% off",
            link: "/category/laptop-bags"
        },
        {
            id: "8",
            title: "Asian Casual Shoes",
            description: "Modern design with comfort",
            image: "./handpicked/asianSneakers1.png",
            price: 897,
            originalPrice: 1499,
            discount: "40% off",
            link: "/product/nike-casual"
        }
       ,
        {
            id: "23",
            title: "realme TechLife 7.5 kg 5 Star Rating Fabric Safe Wash Fully Automatic Top Load Washing Machine Grey",
            description: "Min. 70% Off",
            image: "./discounts/washingmachine.png",
            price: 11799,
            originalPrice: 19999,
            discount: "41% off",
            link: "/category/washing-machine"
        },
        {
            id: "24",
            title: "boAt Stone 350 Hulk Edition 10 W Bluetooth Speaker",
            description: "Min. 70% Off",
            image: "./discounts/speaker.png",
            price: 1690,
            originalPrice: 3490,
            discount: "51% off",
            link: "/category/boat-speaker"
        }
    ],
    smartphones: [
        {
            id: "17",
            title: "vivo T3x 5G",
            description: "Powerful Battery Smartphone",
            price: 11249,
            originalPrice: 17499,
            discount: "51% off",
            image: "./smartphones/vivo.png",
            link: "/product/vivo-t3x-5g"
        },
        {
            id: "18",
            title: "motorola g85 5G",
            description: "#GreatOffer from moto",
            price: 16999,
            originalPrice: 20999,
            discount: "28% off",
            image: "./smartphones/motorola.png",
            link: "/product/motorola-g85"
        },
        {
            id: "19",
            title: "iPhone 15",
            description: "Best Deal from iPhone",
            price: 49999,
            originalPrice: 69900,
            discount: "32% off",
            image: "./smartphones/iphone.png",
            link: "/product/iphone-15"
        },
        {
            id: "20",
            title: "Nothing Phone (2a)",
            description: "Unbelievable Price!",
            price: 18999,
            originalPrice: 25999,
            discount: "55% off",
            image: "./smartphones/nothingPhone.png",
            link: "/product/nothing-phone-2a"
        },
        {
            id: "21",
            title: "CMF by Nothing Phone 1",
            description: "CMF Phone 1 has a unique, adaptable nature. Take on co-designer status with interchangeable accessories and covers and make CMF Phone 1 truly your own.",
            price: 17999,
            originalPrice: 31999,
            discount: "51% off",
            image: "./smartphones/nothingPhone1.png",
            link: "/product/nothing-phone1"
        },
        {
            id: "22",
            title: "SAMSUNG Galaxy S24 5G",
            description: "Behold the Samsung Galaxy S24 smartphone, an exceptional amalgamation of incredible technology and superior sophistication. Unlock the magic of AI-powered photo editing.",
            price: 79999,
            originalPrice: 99999,
            discount: "32% off",
            image: "./smartphones/samsung.png",
            link: "/product/nothing-phone-2a"
        }
    ]
};

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="product-image">
        <button class="heart-button" data-id="${product.id}">
            <i class="far fa-heart"></i>
        </button>
        <div class="product-info">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-description">${product.description}</p>
            <div>
                <span class="product-price">₹${product.price.toLocaleString()}</span>
                <span class="product-original-price">₹${product.originalPrice.toLocaleString()}</span>
                <span class="product-discount">${product.discount}</span>
            </div>
            ${product.quantity ? `<p class="product-quantity">${product.quantity}</p>` : ''}
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        </div>
    `;
    return card;
}

function renderProductSection(sectionId, products) {
    const grid = document.getElementById(`${sectionId}-grid`);
    products.forEach(product => {
        grid.appendChild(createProductCard(product));
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderProductSection('favorites', products.favorites);
    renderProductSection('handpicked', products.handpicked);
    renderProductSection('discounts', products.discounts);
    renderProductSection('smartphones', products.smartphones);

    // Cart functionality
    let cart = [];
    const cartCount = document.getElementById('cart-count');

    // Wishlist functionality
    let wishlist = [];
    const wishlistCount = document.getElementById('wishlist-count');

    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = e.target.getAttribute('data-id');
            addToCart(productId);
        } else if (e.target.closest('.heart-button')) {
            const heartButton = e.target.closest('.heart-button');
            const productId = heartButton.getAttribute('data-id');
            toggleWishlist(productId, heartButton);
        }
    });

    function addToCart(productId) {
        cart.push(productId);
        updateCartCount();
    }

    function updateCartCount() {
        cartCount.textContent = cart.length;
    }

    function toggleWishlist(productId, heartButton) {
        const index = wishlist.indexOf(productId);
        if (index === -1) {
            wishlist.push(productId);
            heartButton.classList.add('active');
            heartButton.querySelector('i').classList.remove('far');
            heartButton.querySelector('i').classList.add('fas');
        } else {
            wishlist.splice(index, 1);
            heartButton.classList.remove('active');
            heartButton.querySelector('i').classList.remove('fas');
            heartButton.querySelector('i').classList.add('far');
        }
        updateWishlistCount();
    }

    function updateWishlistCount() {
        wishlistCount.textContent = wishlist.length;
    }

    document.querySelector('.account-link').addEventListener('click', () => {
        window.location.href = 'login.html';
    });

     document.getElementById('shopkartLogo').addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'index.html';
    });

    // Add login form handling
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const [username, password] = loginForm.querySelectorAll('input');
            
            // Here you would typically make an API call to verify credentials
            console.log('Login attempt:', {
                username: username.value,
                password: password.value
            });

            // For demo purposes, simulate successful login
            alert('Login successful!');
            window.location.href = 'index.html';
        });
    }

    // Add hover effect to social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'translateY(-3px)';
        });
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'translateY(0)';
        });
    });

    // Handle forgot password link
    const forgotPasswordLink = document.querySelector('.forgot-password a');
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Password reset functionality will be implemented soon!');
        });
    }

    // Handle sign up link
    const signUpLink = document.querySelector('.sign-up-text');
    if (signUpLink) {
        signUpLink.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Sign up functionality will be implemented soon!');
        });
    }

    // Banner Functionality
    const bannerWrapper = document.getElementById('bannerWrapper');
    const slides = document.querySelectorAll('.banner-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('bannerDots');
    
    let currentSlide = 0;
    const totalSlides = slides.length;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `banner-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    // Update dots
    function updateDots() {
        document.querySelectorAll('.banner-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    // Go to specific slide
    function goToSlide(index) {
        currentSlide = index;
        bannerWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateDots();
    }

    // Next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        goToSlide(currentSlide);
    }

    // Previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        goToSlide(currentSlide);
    }

    // Event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Auto-advance slides
    let slideInterval = setInterval(nextSlide, 5000);

    // Pause auto-advance on hover
    bannerWrapper.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    bannerWrapper.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });

    // Touch support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    bannerWrapper.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    bannerWrapper.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) {
            nextSlide();
        } else if (touchEndX - touchStartX > 50) {
            prevSlide();
        }
    });
});






