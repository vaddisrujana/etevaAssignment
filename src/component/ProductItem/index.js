import "./index.css";

const ProductItem = (props) => {
  const { productDetails, onclick } = props;
  const { title, price, image, id } = productDetails;

  const clicked = () => {
    onclick(id);
  };

  return (
    <li className="list">
      <button className="button" onClick={clicked}>
        <img src={image} className="product-image" alt="image1" />
        <p className="title">{title}</p>
        <p className="price">$ {price}</p>
      </button>
    </li>
  );
};

export default ProductItem;
