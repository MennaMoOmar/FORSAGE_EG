import React from 'react';

const ProductDetailsData = () => {
	return (
		<React.Fragment>
			<div className="productdetailsdata">
				<div className="container">
                    <div className="row">
                        <div className="col-5 productdetailsdata__details">
                            <div className="productdetailsdata__details__div">
                                <span className="productdetailsdata__details__div__title">:الكود</span>
                                <span className="productdetailsdata__details__div__data">PA-12345</span>
                            </div>

                            <div className="productdetailsdata__details__div">
                                <span className="productdetailsdata__details__div__title">:الوصف</span>
                                <span className="productdetailsdata__details__div__data">PA-12345</span>
                            </div>

                            <div className="productdetailsdata__details__div">
                                <span className="productdetailsdata__details__div__title">:السعر بالجملة</span>
                                <span className="productdetailsdata__details__div__data">120</span>
                            </div>
                        </div>
                        <div className="col-5 productdetailsdata__image">
                            <img src="/images/product1.png" alt=""></img>
                        </div>
                    </div>
                </div>
			</div>
		</React.Fragment>
	);
};

export default ProductDetailsData;
