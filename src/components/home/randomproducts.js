import React from 'react';

import ProductCard from '../shared/productcard';

const Brands = () => {
	return (
		<React.Fragment>
			<div className="randomproducts">
				<div className="container">
					<div className="randomproducts__name">
						<h4>
							WCM قائمة أدوات <i class="fas fa-chevron-left"></i>
						</h4>
						<p className="seeall">عرض الكل</p>
					</div>
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

export default Brands;
