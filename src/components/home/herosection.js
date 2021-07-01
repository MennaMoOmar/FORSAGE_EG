import React from 'react'
import { useHistory } from 'react-router'


const HeroSection = () => {

  const history = useHistory()

  const aboutHandler = ()=> {
    history.push(`/about`)
  }

  return (
    <React.Fragment>
      <div className='herosection'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6 herosection__video'>
              <video controls>
                <source src='./images/video.mp4' type='video/mp4' />
                Your browser does not support HTML video.
              </video>
            </div>
            <div className='col-12 col-md-6 herosection__para'>
              <h3>
                الوكيل الحصرى بجمهورية مصر العربية شركة فورساج لاستراد المعدات و
                الأدوات الكهربائية
              </h3>
              <button className='button mainbtn' onClick={aboutHandler}>اعرف المزيد</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default HeroSection
