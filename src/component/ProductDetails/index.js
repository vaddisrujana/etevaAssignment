import "./index.css";

const ProductDetails = (props) => {
  const { product, onBack } = props;
  const { image, title, price } = product;

  const onClickBack = () => {
    onBack();
  };
  return (
    <div className="product-details-background">
      <img src={image} className="img" alt="img" />
      <p className="title1">{title}</p>
      <p className="price1">$ {price}</p>
      <div className="button-background">
        <button className="back-button" onClick={onClickBack}>
          Back
        </button>
        <button className="addCart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
