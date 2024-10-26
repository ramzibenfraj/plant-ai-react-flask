import React, { lazy, Component } from "react"; 
const Paging = lazy(() => import("../../components/Paging"));
const Breadcrumb = lazy(() => import("../../components/Breadcrumb"));
const FilterPlantType = lazy(() => import("../../components/filter/Category"));
const FilterClear = lazy(() => import("../../components/filter/Clear"));
const CardServices = lazy(() => import("../../components/card/CardServices"));

class PredictionsListView extends Component {
  state = {
    currentProducts: [],
    currentPage: null,
    totalPages: null,
    totalItems: 0,
    view: "list",
    filteredProducts: [],
    filterNew: false,
    filterHot: false,
  };

  async componentDidMount() {
  }
  
  


  onChangeView = (view) => {
    this.setState({ view });
  };
  



  

  render() {

    return (
      <React.Fragment>
        <div
          className="p-5 bg-primary bs-cover"
          style={{
            backgroundImage: "url(../../images/banner/12.jpg)",
          }}
        >
        </div>
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
                    {this.state.totalItems} results for{" "}
                    <span className="text-success">"last Predictions"</span>
                  </span>
                </div>
                <div className="col-5 d-flex justify-content-end">
                    className="form-select mw-180 float-start"
                    aria-label="Default select"
                    <option value={1}>Most Popular</option>
                    <option value={2}>Your Prediction Result</option>
                    <option value={3}>Trending</option>
                  </div>
                </div>
              </div>
              <hr />
              <hr />
              <Paging
                totalRecords={this.state.totalItems}
                pageLimit={9}
                pageNeighbours={3}
                onPageChanged={this.onPageChanged}
                sizing=""
                alignment="justify-content-center"
              />
            </div>
          </div>
      </React.Fragment>
    );
  }
}

export default PredictionsListView;
