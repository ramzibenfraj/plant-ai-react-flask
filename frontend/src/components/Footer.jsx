import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid bg-success">
        <div className="row">
          <div className="col-md-9 py-3 text-white">
            Get connected with us on social networks!
          </div>
          <div className="col-md-3 py-3 text-center text-white">
            <Link to="/" title="Facebook">
              <i className="bi bi-facebook text-light me-3"></i>
            </Link>
            <Link to="/" title="Instagram">
              <i className="bi bi-instagram text-light me-3"></i>
            </Link>
            <Link to="/" title="Youtube">
              <i className="bi bi-youtube text-light me-3"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-white">
        <div className="row">
          <div className="col-md-3 py-3">
            <div className="h6">PlantAi</div>
            <hr />
            <p>
              Welcome to PlantAi - Your Website for Predicting Plant Diseases!
              Explore an unparalleled online experience with PlantAi, your go-to platform to discover and predict plant diseases accurately.
            </p>
          </div>
          <div className="col-md-3 py-3">
            <div className="h6">Plants Supported</div>
            <hr />
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Potato
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Apple
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Tomato
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Strawberry
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Peach
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Orange
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 py-3">
            <div className="h6">Policy</div>
            <hr />
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Return Policy
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Terms Of Use
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Security
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Privacy
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  EPR Compliance
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 py-3">
            <div className="h6">Address</div>
            <hr />
            <address>
              <strong>Address</strong>
              <br />
              Nabeul
              <br />
              Tunis
              <br />
              <abbr title="Phone">P:</abbr> (216) 20-851-813
            </address>
            <div className="h6">Customer Care</div>
            <hr />
            <i className="bi bi-telephone"></i> 20-851-813
            <br />
            <i className="bi bi-envelope"></i> PlantAi@email.com
          </div>
        </div>
      </div>
      <div className="container-fluid bg-secondary text-white text-center">
        <div className="row">
          <div className="col-md-2 py-2">
            <Link to="/" className="text-white text-decoration-none">
              <i className="bi bi-briefcase text-warning"></i> Partner with us
            </Link>
          </div>
          <div className="col-md-2 py-2">
            <Link to="/" className="text-white text-decoration-none">
              <i className="bi bi-badge-ad text-info"></i> Advertise
            </Link>
          </div>
          <div className="col-md-2 py-2">
            <Link to="/" className="text-white text-decoration-none">
              <i className="bi bi-gift"></i> Gift
            </Link>
          </div>
          <div className="col-md-3 py-2">
            © 2024-{new Date().getFullYear()} PlantAi.com (
            {process.env.REACT_APP_VERSION})
          </div>
          <div className="col-md-3 py-2 bg-white">
            <img
              src="../../images/payment/american_express.webp"
              width="32"
              alt="American Express"
              className="me-2"
            />
            <img
              src="../../images/payment/maestro.webp"
              width="32"
              alt="Maestro"
              className="me-2"
            />
            <img
              src="../../images/payment/netbanking.webp"
              width="32"
              alt="Net Banking"
              className="me-2"
            />
            <img
              src="../../images/payment/paypal.webp"
              width="32"
              alt="Paypal"
              className="me-2"
            />
            <img
              src="../../images/payment/rupay.webp"
              width="32"
              alt="Rupay"
              className="me-2"
            />
            <img
              src="../../images/payment/upi.webp"
              width="32"
              alt="UPI"
              className="me-2"
            />
            <img
              src="../../images/payment/visa.webp"
              width="32"
              alt="Visa"
              className="me-2"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
