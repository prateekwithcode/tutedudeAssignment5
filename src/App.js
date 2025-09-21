import React from 'react';
import useFetch from './useFetch'; 
import './App.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.images[0]} alt={product.title} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
    </div>
  );
};

const App = () => {
  const { data: products, loading, error } = useFetch('https://api.escuelajs.co/api/v1/products');

  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  if (error) {
    return <div className="error">Oops! Something went wrong: {error.message}</div>;
  }

  return (
    <div className="App">
      <h1>Our Awesome Products</h1>
      <div className="product-grid">
        {products && products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default App;