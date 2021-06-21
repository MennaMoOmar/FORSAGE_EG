import React from 'react';

const Brands = () => {
	return (
		<React.Fragment>
			<div className="brands">
				<div className="container">
					<h2>الشركات</h2>
					<p className="seeall">عرض الكل</p>
					<div className="row">
						<div className="col-5 col-md-3 brandcard">
							<img src="./images/brands/brand1.png" alt="brand"></img>
							<div className="brandcard__content">
								<p className="brandcard__content__name">FORSAGE قائمة أدوات</p>
								<p className="brandcard__content__show">عرض المنتجات</p>
							</div>
						</div>

						<div className="col-5 col-md-3 brandcard">
							<img src="./images/brands/brand2.png" alt="brand"></img>
							<div className="brandcard__content">
								<p className="brandcard__content__name">Partner قائمة أدوات</p>
								<p className="brandcard__content__show">عرض المنتجات</p>
							</div>
						</div>

						<div className="col-5 col-md-3 brandcard">
							<img src="./images/brands/brand3.png" alt="brand"></img>
							<div className="brandcard__content">
								<p className="brandcard__content__name">FORCE قائمة أدوات</p>
								<p className="brandcard__content__show">عرض المنتجات</p>
							</div>
						</div>

						<div className="col-5 col-md-3 brandcard">
							<img src="./images/brands/brand4.png" alt="brand"></img>
							<div className="brandcard__content">
								<p className="brandcard__content__name">Black FORCE قائمة أدوات</p>
								<p className="brandcard__content__show">عرض المنتجات</p>
							</div>
						</div>

						<div className="col-5 col-md-3 brandcard">
							<img src="./images/brands/brand5.png" alt="brand"></img>
							<div className="brandcard__content">
								<p className="brandcard__content__name">MOTOT قائمة أدوات</p>
								<p className="brandcard__content__show">عرض المنتجات</p>
							</div>
						</div>

						<div className="col-5 col-md-3 brandcard">
							<img src="./images/brands/brand6.png" alt="brand"></img>
							<div className="brandcard__content">
								<p className="brandcard__content__name">TOPTUL قائمة أدوات</p>
								<p className="brandcard__content__show">عرض المنتجات</p>
							</div>
						</div>

					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Brands;
