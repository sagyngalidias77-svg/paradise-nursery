import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, selectCartCount, selectCartTotal, selectItems, updateQuantity } from './CartSlice.jsx';
import { currency } from './plants.js';

export default function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const count = useSelector(selectCartCount);
  const total = useSelector(selectCartTotal);
  const [checkout, setCheckout] = useState(false);

  return <>
    <h1>Shopping Cart</h1>
    <p>{count} {count === 1 ? 'plant' : 'plants'} in your cart</p>
    {!items.length && <p>Your cart is empty.</p>}
    <ul className="cart-items">
      {items.map(({ id, name, image, price, quantity }) => <li key={id}>
        <img src={image} alt={name} />
        <div>
          <h2>{name}</h2>
          <p>Unit price {currency.format(price)}</p>
          <div className="quantity">
            <button aria-label={`Decrease ${name} quantity`} onClick={() => dispatch(updateQuantity({ id, quantity: quantity - 1 }))}>−</button>
            <span aria-live="polite">{quantity}</span>
            <button aria-label={`Increase ${name} quantity`} onClick={() => dispatch(updateQuantity({ id, quantity: quantity + 1 }))}>+</button>
          </div>
          <p>Subtotal {currency.format(price * quantity)}</p>
          <button className="delete" onClick={() => dispatch(removeItem(id))}>Delete</button>
        </div>
      </li>)}
    </ul>
    <h2>Total Cart Amount {currency.format(total)}</h2>
    <div className="quantity">
      <button onClick={onContinueShopping}>Continue Shopping</button>
      <button disabled={!count} onClick={() => setCheckout(true)}>Checkout</button>
    </div>
    <p role="status">{checkout && 'Coming Soon'}</p>
  </>;
}
