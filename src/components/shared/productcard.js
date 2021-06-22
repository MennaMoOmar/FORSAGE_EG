import React from 'react';
import { useHistory } from 'react-router';

const ProductCard = () => {

	const history = useHistory();
	const productDetailsHandler = (id) => {
		history.push(`/productdetails/${id}`);
	}

	return (
		<React.Fragment>
			<div className="productcard">
				<div className="container">
					<div className="productcard__image">
						<img src="/images/product1.png" alt="product"></img>
					</div>

					<div className="productcard__data">
						<p>طقم أدوات 110 قطعة</p>
						<p>الكود 123</p>
					</div>

					<div className="productcard__button">
						<button className="button mainbtn" onClick={()=>productDetailsHandler(1)}>عرض التفاصيل</button>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ProductCard;
