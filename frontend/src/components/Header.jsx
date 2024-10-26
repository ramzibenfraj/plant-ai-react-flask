import { lazy } from "react";
import { Link } from "react-router-dom";
const Search = lazy(() => import("./Search"));

const isLoggedIn = JSON.parse(window.localStorage.getItem("loggedIn"));

const isAdmin = JSON.parse(window.localStorage.getItem("isAdmin"));
console.log(isAdmin);

if (!window.localStorage.getItem("loggedIn")) {
  window.localStorage.setItem("loggedIn", JSON.stringify(false));
}

const logOut = () => {
  window.localStorage.clear();
  window.location.href = "/account/signin";
  window.localStorage.setItem("loggedIn", JSON.stringify(false));
};

const Header = () => {
  // const cartItems = useSelector((state) => state.cart.cartItems);// Access the updated cart items
  return (
    <header className="p-3 border-bottom bg-light">
      <div className="container-fluid">
        <div className="row g-3">
          <div className="col-md-3 text-center">
            <Link to="/">
              <img
                alt="logo"
                src="../../images/logoBG.png"
                height="42"
                width="190"
              />
            </Link>
          </div>
          <div className="col-md-5">
            <Search />
          </div>
          <div className="col-md-4">
            <div className="position-relative d-inline me-3">
            </div>
            {isLoggedIn && (
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-secondary rounded-circle border me-3"
                  data-toggle="dropdown"
                  aria-expanded="false"
                  aria-label="Profile"
                  data-bs-toggle="dropdown"
                >
                  <i className="bi bi-person-fill text-light"></i>
                </button>
                <ul className="dropdown-menu">
                  {!isAdmin && (
                    <>
                      <li>
                        <Link className="dropdown-item" to="/account/wishlist">
                          <i className="bi bi-heart-fill text-danger"></i>{" "}
                          Wishlist
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/account/notification"
                        >
                          <i className="bi bi-bell-fill text-primary"></i>
                          Notification
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                    </>
                  )}
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/account/signin"
                      onClick={logOut}
                    >
                      <i className="bi bi-door-closed-fill text-danger"></i>
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            )}
            <div className="btn-group">
              <div>
                {isLoggedIn === false && (
                  <>
                    <button type="button" className="btn btn-secondary me-3">
                      <Link className="dropdown-item" to="/account/signin">
                        Sign In
                      </Link>
                    </button>
                    <button type="button" className="btn btn-secondary">
                      <Link className="dropdown-item" to="/account/signup">
                        Sign Up
                      </Link>
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* <Link to="/account/signin">Sign In</Link> |{" "}
              <Link to="/account/signup"> Sign Up</Link> */}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
