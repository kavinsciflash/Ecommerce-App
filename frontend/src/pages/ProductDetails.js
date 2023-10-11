import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../styles/ProductDetailsStyles.css";
const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});

  //initialp details

  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="row container mt-2">
        <div className="col-md-6">
          <img
            src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
            height="350"
          />
        </div>
        <div className="col-md-6">
            <h1 className="text-center">Product Details</h1>
            <h6>Name:{product.name}</h6>
            <h6>Description:{product.description}</h6>
            <h6>Price:{product.price}</h6>
            <h6>Category:{product?.category?.name}</h6>
            <h6>Quantity:{product.quantity}</h6>
            <button class="btn btn-secondary ms-1">ADD TO CART</button>
        </div>
       
      </div>
    </Layout>
  );
};

export default ProductDetails;
