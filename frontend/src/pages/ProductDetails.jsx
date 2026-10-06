import { useCart } from "../context/CartContext";

function ProductDetails({ product, onBack }) {
  const { addToCart } = useCart();

  if (!product) {
    return (
      <main className="product-details-page">
        <section className="product-details-section">
          <h1>Product Not Found</h1>

          <button type="button" onClick={onBack}>
            Back to Products
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="product-details-page">
      <section className="product-details-section">
        <button
          type="button"
          className="back-button"
          onClick={onBack}
        >
          ← Back to Products
        </button>

        <div className="product-details">
          <div className="product-details-image-wrapper">
            <img
              src={product.image}
              alt={product.name}
              className="product-details-image"
            />
          </div>

          <div className="product-details-info">
            <p className="product-category">
              {product.category}
            </p>

            <h1>{product.name}</h1>

            <p className="product-rating">
              ★ {product.rating} / 5
            </p>

            <strong className="product-details-price">
              ${product.price.toFixed(2)}
            </strong>

            <p className="product-details-stock">
              {product.stock > 0
                ? `${product.stock} items in stock`
                : "Out of stock"}
            </p>

            <p className="product-details-description">
              {product.description}
            </p>

            <button
              type="button"
              className="details-add-button"
              onClick={() => addToCart(product)}
              disabled={product.stock === 0}
            >
              {product.stock > 0
                ? "Add to Cart"
                : "Out of Stock"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;
