import React from "react";
import { Link } from "react-router-dom";

const FilterPlantType = (props) => {
  return (
    <div className="card mb-3 accordion">
      <div
        className="card-header fw-bold text-uppercase accordion-icon-button"
        data-bs-toggle="collapse"
        data-bs-target="#filterPlantType"
        aria-expanded="true"
        aria-controls="filterPlantType"
      >
        Plant Types
      </div>
      <ul
        className="list-group list-group-flush show"
        id="filterPlantType"
      >
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            Tomato
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            Orange
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            Apple
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            Potato
          </Link>
        </li>
        {/* Add more plant types as needed */}
      </ul>
    </div>
  );
};

export default FilterPlantType;
