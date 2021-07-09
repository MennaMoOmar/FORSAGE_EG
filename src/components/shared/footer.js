import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-4 footer__links'>
              <h5>تواصل معنا</h5>
              <ul>
                <li>٠١٠٠٢٤٢٣٢٩١</li>
                <li>٠١٥٥٤٤٠٣٦٠١</li>
                <li>٠١٥٥٤٤٠٣٦٠٢</li>
                <li>٠١٥٥٤٤٠٣٦٠٣</li>
              </ul>
            </div>
            <div className='col-4 footer__content'>
              <p>الصفحة الرئيسية</p>
              <p>الشركات</p>
              <p>عن الموقع</p>
            </div>
            <div className='col-4 footer__logo'>
              <img src='/images/Logofooter.png' alt=''></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
