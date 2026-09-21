import React, { useState } from 'react';

const ProductForm = ({ onAddProduct }) => {
  const [formData, setFormData] = useState({ name: '', price: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.description) return;
    onAddProduct({ ...formData, price: Number(formData.price) });
    setFormData({ name: '', price: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <input
        type="text"
        placeholder="Product Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        style={{ padding: '8px' }}
      />
      <input
        type="number"
        placeholder="Price"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        style={{ padding: '8px' }}
      />
      <input
        type="text"
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        style={{ padding: '8px' }}
      />
      <button type="submit" style={{ padding: '10px', backgroundColor: '#2ecc71', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Add Product
      </button>
    </form>
  );
};

export default ProductForm;