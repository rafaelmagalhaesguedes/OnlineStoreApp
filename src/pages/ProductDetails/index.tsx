import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductById } from '../../services/api';
import { ProductType } from '../../types';
import iconBack from '../../images/Voltar.png';
import {
  ContainerProductDetails,
  ItemList,
  LinkToBack,
  ListDetails,
  PanelProduct,
  ProductImage,
  ProductName,
  SectionDetails,
  SectionProduct,
  TitleProductDetails,
} from './Styles';

//
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
        <>
          <SectionProduct>
            <LinkToBack to="/">
              <img src={ iconBack } alt="Voltar" />
            </LinkToBack>
            <PanelProduct>
              <ProductName data-testid="product-detail-name">
                {product.title}
              </ProductName>
              <ProductImage
                data-testid="product-detail-image"
                src={ product.thumbnail }
                alt={ product.title }
              />
            </PanelProduct>
          </SectionProduct>
          <SectionDetails>
            <TitleProductDetails>Especificações técnicas</TitleProductDetails>
            <ListDetails>
              {product.attributes.map((attribute) => (
                <ItemList
                  key={ attribute.name }
                >
                  { attribute.name }
                  :
                  {' '}
                  { attribute.value_name }
                </ItemList>
              ))}
            </ListDetails>

            <button
              data-testid="product-detail-add-to-cart"
              onClick={ () => handleAddToCart(product) }
            >
              Adicionar
            </button>

            <p data-testid="product-detail-price">{product.price}</p>
          </SectionDetails>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </ContainerProductDetails>
  );
}

export default ProductDetails;
