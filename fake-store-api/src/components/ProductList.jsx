import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/api';
import ProductItem from './ProductItem';
import { Grid, Container } from '@mui/material';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(response => {
      setProducts(response.data);
    });
  }, []);

  return (
    <Container>
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductItem product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
