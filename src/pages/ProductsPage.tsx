import React, { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CompaniesSlider from "../components/CompaniesSlider";
import PageHero from "../components/PageHero";
import CatalogProducts from "../components/pages/catalog/CatalogProducts";

const ProductsPage: FC = () => {
  return (
    <div className="products-page">
      <PageHero path={useLocation().pathname} />
      <CatalogProducts />
      <CompaniesSlider />
    </div>
  );
};

export default ProductsPage;
