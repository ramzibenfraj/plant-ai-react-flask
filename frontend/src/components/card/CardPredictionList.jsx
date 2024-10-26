// CardPredictionList.jsx

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaPlus } from "react-icons/fa";
import { HiOutlineLogin } from "react-icons/hi";
import { useSelector } from "react-redux";

const CardPredictionList = ({ predictions }) => {
  const isLoggedIn = JSON.parse(window.localStorage.getItem("loggedIn"));
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    // Fetch wishlist items logic if needed
  }, []);

  const handleAddToWishlist = (prediction) => {
    if (!isLoggedIn) {
      // Redirect to signin page
      window.location.href = "/account/signin";
    } else {
      // Implement logic to add/remove from wishlist
    }
  };

  return (
    <div>
      {predictions.map((prediction) => (
        <div key={prediction._id} className="card">
          <div className="row g-0">
            <div className="col-md-3 text-center">
              <img src={`data:image/jpeg;base64,${prediction.image_base64}`} className="img-fluid" alt="Prediction" />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h6 className="card-subtitle me-2 d-inline">{prediction.plant_name}</h6>
                <p className="small mt-2">{prediction.description}</p>
                <p className="small mt-2">Prediction: {prediction.prediction}</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-body">
                <div className="btn-group d-flex" role="group">
                  <Link to="/predict" className="btn text-white bg-success" title="New Prediction">
                    <FaPlus />
                  </Link>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    title="Add to wishlist"
                    onClick={() => handleAddToWishlist(prediction)}
                  >
                    {isLoggedIn ? (
                      isInWishlist ? (
                        <FaHeart className="text-danger" />
                      ) : (
                        <FaHeart />
                      )
                    ) : (
                      <HiOutlineLogin />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardPredictionList;
