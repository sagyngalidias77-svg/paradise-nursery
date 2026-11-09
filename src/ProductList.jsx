import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectItems } from './CartSlice.jsx';
import { categories, currency } from './plants.js';

export default function ProductList() {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const inCart = new Set(items.map(item => item.id));

  return <>
    <h1>Shop houseplants</h1>
    {categories.map(({ title, plants }) => <section className="category" key={title}>
      <h2>{title}</h2>
      <div className="products">
        {plants.map(plant => <article className="product" key={plant.id}>
          <img src={plant.image} alt={plant.name} />
          <div className="product-details">
            <h3>{plant.name}</h3>
            <p>{plant.description}</p>
            <p className="price">{currency.format(plant.price)}</p>
            <button disabled={inCart.has(plant.id)} onClick={() => dispatch(addItem(plant))}>
              {inCart.has(plant.id) ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </div>
        </article>)}
      </div>
    </section>)}
  </>;
}
