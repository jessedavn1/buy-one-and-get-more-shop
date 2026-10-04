import { useState } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import Cart from "./pages/Cart";
import { useCart } from "./context/CartContext";

function App() {
  const [showCart, setShowCart] = useState(false);
  const { cartCount } = useCart();

  return (
    <main>
      <header className="store-header">
        <div>
          <h2>Buy One & Get More</h2>
        </div>

        <button
          type="button"
          className="cart-button"
          onClick={() => setShowCart(!showCart)}
        >
          🛒 Cart ({cartCount})
        </button>
      </header>

      {showCart ? (
        <Cart />
      ) : (
        <section className="products-section">
          <div className="section-header">
            <p>OUR COLLECTION</p>
            <h1>Shop Our Products</h1>
            <span>
              Quality products for your everyday needs.
            </span>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
