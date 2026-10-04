import { useEffect, useMemo, useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 49.99,
    emoji: "🎧",
    description: "Comfortable wireless headphones with clear sound.",
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Electronics",
    price: 79.99,
    emoji: "⌚",
    description: "Track your activity, notifications and daily goals.",
  },
  {
    id: 3,
    name: "Classic Sneakers",
    category: "Fashion",
    price: 59.99,
    emoji: "👟",
    description: "Everyday sneakers designed for comfort and style.",
  },
  {
    id: 4,
    name: "Premium Backpack",
    category: "Fashion",
    price: 44.99,
    emoji: "🎒",
    description: "A practical backpack for school, work and travel.",
  },
  {
    id: 5,
    name: "Modern Table Lamp",
    category: "Home",
    price: 34.99,
    emoji: "💡",
    description: "Minimalist lighting for a modern home.",
  },
  {
    id: 6,
    name: "Home Organizer",
    category: "Home",
    price: 24.99,
    emoji: "🗄️",
    description: "Keep your workspace and home organized.",
  },
  {
    id: 7,
    name: "Skincare Set",
    category: "Beauty",
    price: 39.99,
    emoji: "✨",
    description: "A simple daily skincare collection.",
  },
  {
    id: 8,
    name: "Beauty Essentials",
    category: "Beauty",
    price: 29.99,
    emoji: "🧴",
    description: "Everyday personal-care essentials.",
  },
];

const categories = ["All", "Electronics", "Fashion", "Home", "Beauty"];

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("buy-one-get-more-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showCart, setShowCart] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    localStorage.setItem(
      "buy-one-get-more-cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [search, selectedCategory]);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function addToCart(product) {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });

    setShowCart(true);
  }

  function removeFromCart(productId) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId)
    );
  }

  function changeQuantity(productId, amount) {
    setCart((currentCart) =>
      currentCart
        .map((item) => {
          if (item.id !== productId) {
            return item;
          }

          return {
            ...item,
            quantity: item.quantity + amount,
          };
        })
        .filter((item) => item.quantity > 0)
    );
  }

  function scrollToProducts() {
    document
      .getElementById("products")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="app">
      <header className="site-header">
        <div className="container header-content">
          <button
            className="logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Buy One <span>&amp;</span> Get More
          </button>

          <nav className="main-nav">
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Home
            </button>

            <button onClick={scrollToProducts}>
              Products
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("categories")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Categories
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              About
            </button>
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="icon-button"
              aria-label="Search"
              onClick={scrollToProducts}
            >
              🔍
            </button>

            <button
              type="button"
              className="icon-button"
              aria-label="Shopping cart"
              onClick={() => setShowCart(true)}
            >
              🛒
              <span className="cart-count">{cartCount}</span>
            </button>

            <button
              type="button"
              className="login-button"
              onClick={() => setShowLogin(true)}
            >
              Login
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-content">
            <div className="hero-text">
              <p className="eyebrow">SHOP SMART. GET MORE.</p>

              <h1>
                Everything you want.
                <span> More value.</span>
              </h1>

              <p className="hero-description">
                Discover quality products at great prices and enjoy a simple,
                modern shopping experience.
              </p>

              <div className="hero-actions">
                <button
                  className="primary-button"
                  onClick={scrollToProducts}
                >
                  Shop Now
                </button>

                <button
                  className="secondary-button"
                  onClick={() =>
                    document
                      .getElementById("categories")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Explore Categories
                </button>
              </div>
            </div>

            <div className="hero-card">
              <div className="hero-card-content">
                <span>Featured</span>
                <h2>Buy One &amp; Get More</h2>
                <p>Quality products. Better value.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="categories-section" id="categories">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">EXPLORE</p>
              <h2>Shop by Category</h2>
              <p>Find what you need faster.</p>
            </div>

            <div className="category-grid">
              {categories.slice(1).map((category) => (
                <button
                  key={category}
                  className="category-card"
                  onClick={() => {
                    setSelectedCategory(category);
                    scrollToProducts();
                  }}
                >
                  <span>
                    {category === "Electronics" && "💻"}
                    {category === "Fashion" && "👕"}
                    {category === "Home" && "🏠"}
                    {category === "Beauty" && "✨"}
                  </span>

                  <h3>{category}</h3>

                  <p>
                    {category === "Electronics" &&
                      "Technology & gadgets"}
                    {category === "Fashion" &&
                      "Style for every day"}
                    {category === "Home" &&
                      "Make your space better"}
                    {category === "Beauty" &&
                      "Care & wellness"}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="products-section" id="products">
          <div className="container">
            <div className="products-heading">
              <div>
                <p className="eyebrow">OUR STORE</p>
                <h2>Featured Products</h2>
              </div>

              <div className="search-box">
                <input
                  type="search"
                  placeholder="Search products..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </div>
            </div>

            <div className="category-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  className={
                    selectedCategory === category
                      ? "filter-button active"
                      : "filter-button"
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="empty-products">
                <h3>No products found</h3>
                <p>Try another search or category.</p>
              </div>
            ) : (
              <div className="product-grid">
                {filteredProducts.map((product) => (
                  <article className="product-card" key={product.id}>
                    <div className="product-image">
                      <span>{product.emoji}</span>
                    </div>

                    <div className="product-info">
                      <p className="product-category">
                        {product.category}
                      </p>

                      <h3>{product.name}</h3>

                      <p className="product-description">
                        {product.description}
                      </p>

                      <div className="product-bottom">
                        <strong>${product.price.toFixed(2)}</strong>

                        <button
                          className="add-button"
                          onClick={() => addToCart(product)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="container about-content">
            <div>
              <p className="eyebrow">WHY US</p>
              <h2>Shopping should be simple.</h2>
            </div>

            <p>
              Buy One &amp; Get More is being built around a simple idea:
              quality products, transparent value and a modern shopping
              experience.
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <div>
            <h2>Buy One &amp; Get More</h2>
            <p>Better shopping. Better value.</p>
          </div>

          <p>© 2026 Buy One &amp; Get More. All rights reserved.</p>
        </div>
      </footer>

      {showCart && (
        <div className="overlay" onClick={() => setShowCart(false)}>
          <aside
            className="cart-drawer"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="drawer-header">
              <div>
                <p className="eyebrow">YOUR CART</p>
                <h2>Shopping Cart</h2>
              </div>

              <button
                className="close-button"
                onClick={() => setShowCart(false)}
              >
                ✕
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="empty-cart">
                <span>🛒</span>
                <h3>Your cart is empty</h3>
                <p>Add something you love to get started.</p>

                <button
                  className="primary-button"
                  onClick={() => {
                    setShowCart(false);
                    scrollToProducts();
                  }}
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item) => (
                    <div className="cart-item" key={item.id}>
                      <div className="cart-item-image">
                        {item.emoji}
                      </div>

                      <div className="cart-item-info">
                        <h3>{item.name}</h3>
                        <p>${item.price.toFixed(2)}</p>

                        <div className="quantity-controls">
                          <button
                            onClick={() =>
                              changeQuantity(item.id, -1)
                            }
                          >
                            −
                          </button>

                          <span>{item.quantity}</span>

                          <button
                            onClick={() =>
                              changeQuantity(item.id, 1)
                            }
                          >
                            +
                          </button>

                          <button
                            className="remove-button"
                            onClick={() =>
                              removeFromCart(item.id)
                            }
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-summary">
                  <div>
                    <span>Subtotal</span>
                    <strong>${cartTotal.toFixed(2)}</strong>
                  </div>

                  <p>Shipping and taxes will be calculated at checkout.</p>

                  <button
                    className="checkout-button"
                    onClick={() => {
                      setShowCart(false);
                      alert(
                        "Checkout will be connected in our next milestone."
                      );
                    }}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </aside>
        </div>
      )}

      {showLogin && (
        <div className="overlay" onClick={() => setShowLogin(false)}>
          <div
            className="login-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="close-button"
              onClick={() => setShowLogin(false)}
            >
              ✕
            </button>

            <p className="eyebrow">WELCOME BACK</p>
            <h2>Login to your account</h2>
            <p className="modal-description">
              Account authentication will be connected in the next
              milestone.
            </p>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                alert(
                  "Authentication will be connected in the next milestone."
                );
              }}
            >
              <label>
                Email
                <input type="email" placeholder="you@example.com" required />
              </label>

              <label>
                Password
                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </label>

              <button className="checkout-button" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;