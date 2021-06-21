import React from 'react';

import Nabvar from '../shared/navbar';
import Footer from '../shared/footer';
import Header from '../productdetails/header';
import ProductDetailsData from '../productdetails/productdetialsdata';
import RandomProducts from '../home/randomproducts';
const ProductDetails = () => {
	return (
		<React.Fragment>
			<div className="productdetails">
				<Nabvar></Nabvar>
				<Header></Header>
				<ProductDetailsData></ProductDetailsData>
				<RandomProducts></RandomProducts>
				<Footer></Footer>
			</div>
		</React.Fragment>
	);
};

export default ProductDetails;
