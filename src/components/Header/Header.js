import mainLogo from '../../../Assets/hot-pot.png';
import cart from '../../../Assets/trolley.png';

const Header = () => {
    return (
      <>
        <div className="main-header">
          <div className="logo-icon">
            <a href="/">
              <img src={mainLogo} alt="website logo" />
            </a>
          </div>
          <div className="nav-items-list">
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>User</li>
            </ul>
          </div>
          <div className="cart">
            <img src={cart} alt="cart-logo" />
          </div>
        </div>
      </>
    );
  };

  export default Header;