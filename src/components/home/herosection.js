import React from 'react';

const HeroSection = () => {
	return (
		<React.Fragment>
			<div className="herosection">
				<div className="container">
					<div className="row">
						<div className="col-6 herosection__video">
							<video width="500" controls>
								<source src="./images/video.mp4" type="video/mp4" />
								Your browser does not support HTML video.
							</video>
						</div>
						<div className="col-6 herosection__para">
							<h3>
								الوكيل الحصري في جمهورية مصر العربية لشركة فورساج لاستيراد المعدات اليدوية والادوات
								الكهربية
							</h3>
							<button className="button mainbtn">اعرف المزيد</button>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default HeroSection;
