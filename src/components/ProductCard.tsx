type ProductCardProps = {
  title: string,
  thumbnail: string,
  price: number,
};

function ProductCard({ title, thumbnail, price } : ProductCardProps) {
  return (
    <div>
      <p>
        {title}
      </p>
      <p>
        <img src={ thumbnail } alt={ title } />
      </p>
      <p>
        R$:
        {' '}
        {price}
      </p>
    </div>
  );
}

export default ProductCard;
