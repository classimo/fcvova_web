import React from 'react';

import img01 from './Images/fcvova_header_01.jpg';
import img02 from './Images/fcvova_header_02.jpg';
import img03 from './Images/fcvova_header_03.jpg';
import img04 from './Images/fcvova_header_04.jpg';
import img05 from './Images/fcvova_header_05.jpg';
import img06 from './Images/fcvova_header_06.jpg';
import img07 from './Images/fcvova_header_07.jpg';
import img08 from './Images/fcvova_header_08.jpg';
import img09 from './Images/fcvova_header_09.jpg';
import img10 from './Images/fcvova_header_10.jpg';
import img11 from './Images/fcvova_header_11.jpg';
import img12 from './Images/fcvova_header_12.jpg';
import img13 from './Images/fcvova_header_13.jpg';
import img14 from './Images/fcvova_header_14.jpg';
import img15 from './Images/fcvova_header_15.jpg';
import img16 from './Images/fcvova_header_16.jpg';
import img17 from './Images/fcvova_header_17.jpg';
import img18 from './Images/fcvova_header_18.jpg';

function HeaderPhoto() {
  const images = [img01, img02, img03, img04, img05, img06, img07, img08, img09, img10, img11, img12, img13, img14, img15, img16, img17, img18];
  const random = Math.floor(18 * Math.random());
  const divStyle = {
    height: '35em',
    color: 'white',
    background: `url(${images[random]})`,
    backgroundPosition: 'top left',
    backgroundSize: 'cover',
    WebkitTransition: 'all',
    msTransition: 'all',
    WebkitFilter: 'grayscale(90%) saturate(2) brightness(110%) contrast(80%) sepia(20%)',
    Filter: 'grayscale(90%) saturation(2) brightness(110%) contrast(80%) sepia(20%)',
  };
  return (
    <div style={divStyle}>
    </div>
  );
}

export default HeaderPhoto;
// visibility: inherit; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0); transform-origin: 50% 50% 0px;
