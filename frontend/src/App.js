import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import TopMenu from "./components/TopMenu";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.min.css";

const HomeView = lazy(() => import("./views/Home"));
const SignInView = lazy(() => import("./views/account/SignIn"));
const SignUpView = lazy(() => import("./views/account/SignUp"));
const ForgotPasswordView = lazy(() => import("./views/account/ForgotPassword"));
const WishlistView = lazy(() => import("./views/account/Wishlist"));


const PredictionsListView = lazy(() => import("./views/predictions/List"));
const UsersEdit = lazy(() => import("./views/admin/Users"));
const NotFoundView = lazy(() => import("./views/pages/404"));
const InternalServerErrorView = lazy(() => import("./views/pages/500"));
const ContactUsView = lazy(() => import("./views/pages/ContactUs"));
const Predict = lazy(()=> import("./views/predict/Predict"))
const ResultPrediction = lazy(()=> import("./views/predictions/Result"))

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <TopMenu />
        <Suspense
          fallback={
            <div className="text-white text-center mt-3">Loading...</div>
          }
        >
          <Routes>
            <Route exact path="/" element={<HomeView/>} />
            <Route exact path="/account/signin" element={<SignInView/>} />
            <Route exact path="/account/signup" element={<SignUpView/>} />
            <Route
              exact
              path="/account/forgotpassword"
              element={<ForgotPasswordView/>}
            />
            <Route exact path="/account/wishlist" element={<WishlistView/>} />
            <Route exact path="/predict" element={< Predict/>}/>
            <Route exact path="/users" element={< UsersEdit/>}/>
            <Route exact path="/predictions" element={<PredictionsListView/>} />
            <Route exact path="/result" element={<ResultPrediction/>} />
            <Route exact path="/contact-us" element={<ContactUsView/>} />
            <Route exact path="/500" element={<InternalServerErrorView/>} />
            <Route path="*" element={<NotFoundView/>} />
          </Routes>
        </Suspense>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
