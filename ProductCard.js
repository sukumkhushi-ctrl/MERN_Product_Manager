import React from 'react';

const ProductCard = ({ product, onDelete }) => {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '10px 0',
    backgroundColor: '#f9f9f9',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  return (
    <div style={cardStyle}>
      <div>
        <h3 style={{ margin: '0 0 8px 0' }}>{product.name}</h3>
        <p style={{ margin: '0 0 4px 0', color: '#555' }}>{product.description}</p>
        <strong>${product.price}</strong>
      </div>
      <button 
        onClick={() => onDelete(product._id)}
        style={{ padding: '8px 12px', backgroundColor: '#e74c3c', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Delete
      </button>
    </div>
  );
};

export default ProductCard;