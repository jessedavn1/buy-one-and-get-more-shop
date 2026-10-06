import { useState } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import { useCart } from "./context/CartContext";

function App() {
  const [showCart, setShowCart] = useState(false);
const [selectedProduct, setSelectedProduct] = useState(null);
     const [selectedCategory, setSelectedCategory] = useState("All");
  const { cartCount } = useCart();

  const handleHomeClick = () => {
  setShowCart(false);
  setSelectedProduct(null);
};

  const handleCartClick = () => {
  setSelectedProduct(null);
  setShowCart(true);
};
  const handleProductClick = (product) => {
  setSelectedProduct(product);
  setShowCart(false);
};

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );
  return (
    <main>
      <header className="store-header">
        <button
          type="button"
          className="store-logo"
          onClick={handleHomeClick}
        >
          Buy One & Get More
        </button>

        <nav className="store-nav" aria-label="Main navigation">
          <button
            type="button"
            onClick={handleHomeClick}
          >
            Home
          </button>

          <button
            type="button"
            onClick={handleHomeClick}
          >
            Products
          </button>

          <button
            type="button"
            className="cart-button"
            onClick={handleCartClick}
          >
            🛒 Cart ({cartCount})
          </button>
        </nav>
      </header>

      {showCart ? (
  <Cart />
) : selectedProduct ? (
  <ProductDetails
    product={selectedProduct}
    onBack={() => setSelectedProduct(null)}
  />
) : (
        <section className="products-section">
          <div className="section-header">
            <p>OUR COLLECTION</p>

            <h1>Shop Our Products</h1>

            <span>
              Quality products for your everyday needs.
            </span>


<div className="category-filter">
  {["All", "Electronics", "Fashion", "Home"].map((category) => (
    <button
      key={category}
      type="button"
      className={
        selectedCategory === category
          ? "category-button active"
          : "category-button"
      }
      onClick={() => setSelectedCategory(category)}
    >
      {category}
    </button>
  ))}
</div>
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard
  key={product.id}
  product={product}
  onViewDetails={handleProductClick}
/>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
