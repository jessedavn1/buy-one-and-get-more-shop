import { useCart } from "../context/CartContext";

function ProductCard({ product, onViewDetails }) {
  const { addToCart } = useCart();

  return (
    <article className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="product-info">
        <p className="product-category">{product.category}</p>

        <h3>{product.name}</h3>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-bottom">
  <strong>${product.price.toFixed(2)}</strong>

  <div className="product-actions">
    <button
      type="button"
      className="details-button"
      onClick={() => onViewDetails(product)}
    >
      View Details
    </button>

    <button
      type="button"
      onClick={() => addToCart(product)}
    >
      Add to Cart
    </button>
  </div>
</div>
      </div>
    </article>
  );
}

export default ProductCard;
