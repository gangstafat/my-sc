import React from 'react';

const PlayIcon = ({ width, height, color }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 14 19">
      <g fillRule="evenodd">
        <g id="play" fillRule="nonzero" fill={color}>
          <g transform="translate(7.000000, 9.500000) rotate(90.000000) translate(-7.000000, -9.500000) translate(-2.500000, 2.500000)">
            <path d="M8.695,1.09 C8.88348807,0.834245176 9.18229214,0.68327481 9.5,0.68327481 C9.81770786,0.68327481 10.1165119,0.834245176 10.305,1.09 L18.284,11.906 C18.5082479,12.2097029 18.5423476,12.6138077 18.3721631,12.9507941 C18.2019786,13.2877805 17.8565216,13.500202 17.479,13.5 L1.52,13.5 C1.14247839,13.500202 0.797021383,13.2877805 0.626836899,12.9507941 C0.456652415,12.6138077 0.490752078,12.2097029 0.715,11.906 L8.695,1.091 L8.695,1.09 Z" id="a" />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default PlayIcon;
