import "./index.css";
import { MdFavorite } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => (
  <div className="header-background">
    <div className="header-background1">
      <p className="para">Eteva Shopping</p>
    </div>
    <div className="header-background1">
      <MdFavorite className="favorite-icon" />

      <AiOutlineShoppingCart className="cart-icon" />
    </div>
  </div>
);

export default Header;
