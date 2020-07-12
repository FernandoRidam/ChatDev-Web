import React from 'react';

import './styles.css';

import {
  loadingLg,
  loadingMd,
  loadingWhiteLg,
  loadingWhiteMd,
} from '../../assets';

export function Loading({ size = 45, color = '#25A1D0'}) {
  const styles = {
    width: size,
    height: size,
  };

  return (
    <div className="loading" style={ styles }>
       <svg style={ styles } className="loading-lg" xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 192 192">
        <g id="blue-lg" transform="translate(-252 883)">
          <rect id="Retângulo_21" data-name="Retângulo 21" width="192" height="192" transform="translate(252 -883)" fill="none"/>
          <path id="loading1" d="M157.327,82.876A7.681,7.681,0,0,0,165.2,74.6,82.876,82.876,0,0,0,.276,74.6,7.679,7.679,0,0,0,8.15,82.876h0c4.577,0,8.234-3.725,8.8-8.266a66.3,66.3,0,0,1,131.567,0c.571,4.541,4.228,8.266,8.8,8.266Z" transform="translate(265.762 -870)" fill={ color }/>
        </g>
      </svg>

      <svg style={ styles } className="loading-md" xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 192 192">
        <g id="blue-md" transform="translate(-252 883)">
          <rect id="Retângulo_22" data-name="Retângulo 22" width="192" height="192" transform="translate(252 -883)" fill="none"/>
          <path id="loading2" d="M115.949,61.93a7.041,7.041,0,0,0,7.258-7.721,61.93,61.93,0,0,0-122.893,0A7.041,7.041,0,0,0,7.572,61.93h0c4.275,0,7.676-3.489,8.385-7.706a46.447,46.447,0,0,1,91.607,0c.709,4.216,4.109,7.706,8.385,7.706Z" transform="translate(286.74 -848.43)" fill={ color }/>
        </g>
      </svg>
    </div>
  );
};
