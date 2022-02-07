import React from "react";
// react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// pages
import {
  HomePage,
  ErrorPage,
  ProductsPage,
  ProductPage,
  LoginPage,
  CartPage,
} from "./pages";
// context
import { AppProvider } from "./context/AppContext";
// autho
import { Auth0Provider } from "@auth0/auth0-react";
// scss
import "./assets/scss/index.scss";
// layout components
import Header from "./components/layout/header-sidebar/Header";
import Footer from "./components/layout/footer/Footer";
import Sidebar from "./components/layout/header-sidebar/Sidebar";

function App() {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN!}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID!}
      redirectUri={window.location.origin}
    >
      <AppProvider>
        <Router>
          <Header />
          <Sidebar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="products/:productId" element={<ProductPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </Router>
      </AppProvider>
    </Auth0Provider>
  );
}

export default App;
