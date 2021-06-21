import React from 'react';

import ProductCard from '../shared/productcard';

const Products = () => {
	return (
		<React.Fragment>
			<div className="products">
				<div className="container">
					<h4>
						WCM قائمة أدوات <i class="fas fa-chevron-left"></i>
					</h4>

					<div className="row">
						<div className="col-6 col-lg-3">
							<ProductCard></ProductCard>
						</div>
						<div className="col-6 col-lg-3">
							<ProductCard></ProductCard>
						</div>
						<div className="col-6 col-lg-3">
							<ProductCard></ProductCard>
						</div>
						<div className="col-6 col-lg-3">
							<ProductCard></ProductCard>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Products;
