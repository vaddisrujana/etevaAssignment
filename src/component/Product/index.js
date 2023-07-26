import { Component } from "react";

import ProductItem from "../ProductItem";
import Header from "../Header";
import ProductDetails from "../ProductDetails";

import "./index.css";

class Product extends Component {
  state = { productList: [], product: [], clicked: false };

  onclick = (id) => {
    const { productList } = this.state;
    const displayProduct = productList.filter((each) => id === each.id);
    console.log(displayProduct[0]);
    this.setState({ clicked: true, product: displayProduct[0] });
  };

  onBack = () => {
    this.setState({ clicked: false });
  };

  componentDidMount() {
    this.getProductsData();
  }
  getProductsData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    const formattedData = data.map((each) => ({
      id: each.id,
      title: each.title,
      price: each.price,
      category: each.category,
      image: each.image,
      rating: each.rating,
    }));
    this.setState({ productList: formattedData });
  };
  render() {
    const { productList, product, clicked } = this.state;
    return (
      <div className="back">
        <Header />
        {clicked ? (
          <ProductDetails product={product} onBack={this.onBack} />
        ) : (
          <ul>
            <div className="back1">
              {productList.map((each) => (
                <ProductItem
                  productDetails={each}
                  key={each.id}
                  onclick={this.onclick}
                />
              ))}
            </div>
          </ul>
        )}
      </div>
    );
  }
}

export default Product;
