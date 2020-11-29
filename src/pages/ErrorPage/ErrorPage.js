import React from "react";
import Hero from "../../components/Hero/heroComponent";
import Banner from "../../components/banner/banner";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
  <Hero>
    <Banner title="404" subtitle="page not found">
      <Link to="/" className="btn-primary">HomePage</Link>
    </Banner>
    </Hero>
    );
};

export default ErrorPage;
