import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';
import { selectCartCount } from './CartSlice.jsx';
import './App.css';

export default function App() {
  const [page, setPage] = useState('home');
  const count = useSelector(selectCartCount);

  if (page === 'home') return <main className="landing">
    <section>
      <p className="eyebrow">THE INDOOR PLANT SHOP</p>
      <h1>Paradise Nursery</h1>
      <p>Find a houseplant that fits your home.</p>
      <button onClick={() => setPage('plants')}>Get Started</button>
    </section>
    <AboutUs />
  </main>;

  return <>
    <header className="shop-header">
      <button onClick={() => setPage('home')}>Paradise Nursery</button>
      <nav aria-label="Shop navigation">
        <button aria-current={page === 'plants' ? 'page' : undefined} onClick={() => setPage('plants')}>Plants</button>
        <button aria-current={page === 'cart' ? 'page' : undefined} onClick={() => setPage('cart')}>🛒 Cart ({count})</button>
      </nav>
    </header>
    <main className="shop">
      {page === 'plants' ? <ProductList /> : <CartItem onContinueShopping={() => setPage('plants')} />}
    </main>
  </>;
}
