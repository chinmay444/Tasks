import React, { useState } from 'react';
import { createProduct } from '../services/api';
import { TextField, Button, Container } from '@mui/material';

const ProductForm = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { title, price, description, image };
    createProduct(newProduct).then(response => {
      console.log('Product created:', response.data);
    });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Add Product
        </Button>
      </form>
    </Container>
  );
};

export default ProductForm;
