// CardPredictionGrid.jsx

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineLogin } from "react-icons/hi";
import { FaHeart, FaPlus } from "react-icons/fa";

const CardPredictionGrid = ({ predictions }) => {
  const isLoggedIn = JSON.parse(window.localStorage.getItem("loggedIn"));
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const dispatch = useDispatch();

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
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
      {predictions.map((prediction) => (
        <div key={prediction._id} className="col">
          <div className="card">
            <img src={`data:image/jpeg;base64,${prediction.image_base64}`} className="card-img-top" alt="Prediction" />
            <div className="card-body">
              <h6 className="card-subtitle mb-2">{prediction.plant_name}</h6>
              <div className="my-2">
                <span className="fw-bold h5">{prediction.prediction}</span>
              </div>
              <div className="btn-group  d-flex" role="group">
                <Link to="/predict" className="btn text-white bg-success" title="New Prediction">
                  <FaPlus /> New Prediction
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
      ))}
    </div>
  );
};

export default CardPredictionGrid;
