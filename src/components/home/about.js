import React from 'react'

import aboutImg from '../../assets/about.jfif';

import Navbar from '../shared/navbar'
import Footer from '../shared/footer'

const About = () => {
  return (
    <React.Fragment>
    <Navbar></Navbar>
      <div className='about'>
        <div className='container'>
          <div className='row'>
          <div className="col-12 about__header">
              <h2>عن الموقع</h2>
          </div>
            <div className='col-12 about__image'>
              <img src={aboutImg} alt="aboutimg"></img>
            </div>
            <div className='col-12 about__para'>
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
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </React.Fragment>
  )
}

export default About
