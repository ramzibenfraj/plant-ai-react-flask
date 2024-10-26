import React, { lazy, Component } from "react";
import { data } from "../data";
const Banner = lazy(() => import("../components/carousel/Banner"));

class HomeView extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner className="mb-3" id="carouselHomeBanner" data={data.banner} />

        <div className="container mt-5">
          <h2 className="text-center mb-4">Plant Disease Detection with AI and Deep Learning</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-lg">
                <img
                  src="../../images/AI-agriculture.jpg"
                  className="card-img-top"
                  alt="Disease Detection"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Disease Detection</h5>
                  <p className="card-text">
                    Utilizing AI and deep learning algorithms to identify plant diseases accurately. Our system can detect diseases early, allowing farmers to take preventive measures.
                  </p>
                </div>
                <div className="card-footer bg-white border-0 text-center">
                  <a href="#" className="btn text-white bg-success">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-lg">
                <img
                  src="../../images/AI-agriculture.png"
                  className="card-img-top"
                  alt="AI in Agriculture"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">AI in Agriculture</h5>
                  <p className="card-text">
                    Explore the role of AI in revolutionizing agriculture practices. Our AI-powered solutions not only detect diseases but also optimize crop management for better yields.
                  </p>
                </div>
                <div className="card-footer bg-white border-0 text-center">
                  <a href="#" className="btn text-white bg-success">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-lg">
                <img
                  src="../../images/pd.webp"
                  className="card-img-top"
                  alt="Deep Learning"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Deep Learning</h5>
                  <p className="card-text">
                    Understand the principles of deep learning and its applications in agriculture. Our deep learning models are trained on vast datasets to ensure accurate disease identification.
                  </p>
                </div>
                <div className="card-footer bg-white border-0 text-center">
                  <a href="#" className="btn text-white bg-success">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-4 mb-4">
              <div className="card text-white bg-success shadow pb-3">
                <div className="card-body">
                  <h5 className="card-title text-center">Test Our System Now!</h5>
                  <p className="card-text text-center">
                    Sign up and get free access to our plant disease detection system. Experience the power of AI and deep learning in agriculture firsthand.
                  </p>
                  <div className="text-center">
                    <a href="/account/signup" className="btn btn-light">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeView;
