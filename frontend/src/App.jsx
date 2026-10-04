import products from "./data/products";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <main>
      <section className="products-section">
        <div className="section-header">
          <p>OUR COLLECTION</p>
          <h1>Shop Our Products</h1>
          <span>Quality products for your everyday needs.</span>
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
    </main>
  );
}

export default App;
