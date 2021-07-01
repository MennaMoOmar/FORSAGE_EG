import React from 'react'

const HeroSection = () => {
  return (
    <React.Fragment>
      <div className='herosection'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-lg-6 herosection__video'>
              <video controls>
                <source src='./images/video.mp4' type='video/mp4' />
                Your browser does not support HTML video.
              </video>
            </div>
            <div className='col-12 col-lg-6 herosection__para'>
              <h5>
                الوكيل الحصرى بجمهورية مصر العربية شركة فورساج لاستراد المعدات و
                الأدوات الكهربائية لأنها بتوفرلك كل أنواع المعدات اليدوية
                والأدوات الكهربائية زى الشنيور ، صاروخ تلميع ، ومفاتيح الفك
                وربط اليدوى واللنكهات ومسدس رش كهربائى دا غير كمان الصنفرة ،
                ماكينة لحام عاكس و غيرها كتير من الادوات اللى ممكن تحتاجها
                الشركات والمصانع و كل دا مصنوع فى بلاد روسيا و الخامات ممتازة
                لانها تيوانى و ألمانى .. و بأسعار مناسبة وكمان فى هداية كتير
                لعملائنا و لان شركة فورساج اثبتت كفاءتها خلال فترة قصيرة فا
                تعتبر الوكيل الحصرى فى جمهورية مصر العربية و عندها فروع كتيرة
                على مستوى الجمهورية فى دمياط ، العاشر من رمضان ، جنوب بورسعيد ،
                بورسعيد و كمان المنزلة ، جمصه ، الاسكندرية.والبحر الاحمر
              </h5>
              {/* <button className='button mainbtn'>اعرف المزيد</button> */}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default HeroSection
