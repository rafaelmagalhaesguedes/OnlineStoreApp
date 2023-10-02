import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../services/api';
import { ProductType } from '../../types';
import { ContainerProductDetails } from './styles';
import SectionProductDetails from './Details';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType>();
  const [myCart, setMyCart] = useState<ProductType[]>([]);
  let nextId = 1;

  const handleAddToCart = (objProduct: ProductType) => {
    objProduct.id = String(nextId);
    const updateCart = [...myCart, objProduct];
    setMyCart(updateCart);
    nextId++;
    localStorage.setItem('cart', JSON.stringify(updateCart));
  };

  useEffect(() => {
    const fetchProductsId = async () => {
      if (id) {
        const result = await getProductById(id);
        console.log(result);
        setProduct(result);
      }
    };
    fetchProductsId();
  }, [id]);

  return (
    <ContainerProductDetails>
      {product ? (
        <SectionProductDetails
          product={ product }
          handleAddCart={ handleAddToCart }
        />
      ) : (
        <p>Loading...</p>
      )}
    </ContainerProductDetails>
  );
}

export default ProductDetails;
