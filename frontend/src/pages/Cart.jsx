import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <main className="cart-page">
        <section className="cart-section">
          <div className="cart-header">
            <p>YOUR CART</p>
            <h1>Your Shopping Cart</h1>
            <span>Your cart is currently empty.</span>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <section className="cart-section">
        <div className="cart-header">
          <p>YOUR CART</p>
          <h1>Your Shopping Cart</h1>
        </div>

        <div className="cart-items">
          {cartItems.map((item) => (
            <article className="cart-item" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />

              <div className="cart-item-info">
                <p className="product-category">
                  {item.category}
                </p>

                <h2>{item.name}</h2>

                <p>${item.price.toFixed(2)} each</p>

                <div className="quantity-controls">
                  <button
                    type="button"
                    onClick={() =>
                      updateQuantity(
                        item.id,
                        Math.max(1, item.quantity - 1)
                      )
                    }
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    type="button"
                    onClick={() =>
                      updateQuantity(
                        item.id,
                        item.quantity + 1
                      )
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>

              <strong className="cart-item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </strong>
            </article>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Cart Total</h2>
          <strong>${cartTotal.toFixed(2)}</strong>

          <button type="button" className="checkout-button">
            Proceed to Checkout
          </button>
        </div>
      </section>
    </main>
  );
}

export default Cart;
