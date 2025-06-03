import React from 'react';
import './Logo.css';
import img1  from '../assets/logo/cube-events-logo.png';
import img2  from '../assets/logo/cube-events-logo.png';
import img3  from '../assets/logo/cube-events-logo.png';
import img4  from '../assets/logo/cube-events-logo.png';
import img5  from '../assets/logo/cube-events-logo.png';
import img6 from '../assets/logo/cube-events-logo.png';
import img7  from '../assets/logo/cube-events-logo.png';
import img8  from '../assets/logo/cube-events-logo.png';
import img9  from '../assets/logo/cube-events-logo.png';
import img10  from '../assets/logo/cube-events-logo.png';

function CompanyLogo() {
  const logos = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  const duplicated = [...logos, ...logos];

  return (
    <div className="tag-list ">
      <div className="inner">
        {duplicated.map((logo, idx) => (
          <div key={idx} className="tag">
            <img src={logo} alt="company logo" />
          </div>
        ))}
      </div>
      <div className="fade" />
    </div>
  );
}

export default CompanyLogo;