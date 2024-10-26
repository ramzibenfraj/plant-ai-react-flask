// PredictionsListView.jsx

import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import CardPredictionList from "../../components/card/CardPredictionList";
import CardPredictionGrid from "../../components/card/CardPredictionGrid";
import Paging from "../../components/Paging";
import Breadcrumb from "../../components/Breadcrumb";
import FilterPlantType from "../../components/filter/Category";
import FilterClear from "../../components/filter/Clear";
import CardServices from "../../components/card/CardServices";

class PredictionsListView extends Component {
  state = {
    predictions: [],
    totalItems: 0,
    view: "grid",
  };

  async componentDidMount() {
    try {
      const response = await axios.get("http://express-service:3001/predictions");
      const predictions = response.data;
      this.setState({ predictions, totalItems: predictions.length });
    } catch (error) {
      console.error("Error fetching predictions:", error);
    }
  }

  onChangeView = (view) => {
    this.setState({ view });
  };

  render() {
    const { predictions, totalItems, view } = this.state;

    return (
      <React.Fragment>
        <div
          className="p-5 bg-white bs-cover"
          style={{
            backgroundImage: "url(../../images/banner/banner21.webp)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "300px", // Set an initial height for the banner
          }}
        ></div>

        <Breadcrumb />
        <div className="container-fluid mb-3">
          <div className="row">
            <div className="col-md-3">
              <FilterPlantType />
              <FilterClear />
              <CardServices />
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-7">
                  <span className="align-middle fw-bold">
                    {totalItems} results for{" "}
                    <span className="text-success">"last Predictions"</span>
                  </span>
                </div>
                <div className="col-5 d-flex justify-content-end">
                  <select
                    className="form-select mw-180 float-start"
                    aria-label="Default select"
                  >
                    <option value={1}>Most Popular</option>
                    <option value={2}>Latest Prediction</option>
                    <option value={3}>Trending</option>
                  </select>
                  <div className="btn-group ms-3" role="group">
                    <button
                      aria-label="Grid"
                      type="button"
                      onClick={() => this.onChangeView("grid")}
                      className={`btn ${
                        view === "grid"
                          ? "btn text-white bg-success"
                          : "btn-outline-primary"
                      }`}
                    >
                      <i className="bi bi-grid" />
                    </button>
                    <button
                      aria-label="List"
                      type="button"
                      onClick={() => this.onChangeView("list")}
                      className={`btn ${
                        view === "list"
                          ? "btn text-white bg-success"
                          : "btn-outline-primary"
                      }`}
                    >
                      <i className="bi bi-list" />
                    </button>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row g-3">
                {view === "grid" && (
                  <CardPredictionGrid predictions={predictions} />
                )}
                {view === "list" && (
                  <CardPredictionList predictions={predictions} />
                )}
              </div>
              <hr />
              <Paging
                totalRecords={totalItems}
                pageLimit={9}
                pageNeighbours={3}
                sizing=""
                alignment="justify-content-center"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect()(PredictionsListView);
