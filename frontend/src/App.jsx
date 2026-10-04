function App() {
  return (
    <div className="app">
      <header className="site-header">
        <div className="container header-content">
          <a href="/" className="logo">
            Buy One <span>&amp;</span> Get More
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/categories">Categories</a>
            <a href="/about">About</a>
          </nav>

          <div className="header-actions">
            <button type="button" className="icon-button" aria-label="Search">
              🔍
            </button>

            <button type="button" className="icon-button" aria-label="Shopping cart">
              🛒
              <span className="cart-count">0</span>
            </button>

            <button type="button" className="login-button">
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
                <a href="/products" className="primary-button">
                  Shop Now
                </a>

                <a href="/categories" className="secondary-button">
                  Explore Categories
                </a>
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

        <section className="categories-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">EXPLORE</p>
              <h2>Shop by Category</h2>
              <p>Find what you need faster.</p>
            </div>

            <div className="category-grid">
              <a href="/categories/electronics" className="category-card">
                <span>💻</span>
                <h3>Electronics</h3>
                <p>Technology &amp; gadgets</p>
              </a>

              <a href="/categories/fashion" className="category-card">
                <span>👕</span>
                <h3>Fashion</h3>
                <p>Style for every day</p>
              </a>

              <a href="/categories/home" className="category-card">
                <span>🏠</span>
                <h3>Home</h3>
                <p>Make your space better</p>
              </a>

              <a href="/categories/beauty" className="category-card">
                <span>✨</span>
                <h3>Beauty</h3>
                <p>Care &amp; wellness</p>
              </a>
            </div>
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
    </div>
  );
}

export default App;