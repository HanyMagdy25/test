import React, { useState } from 'react';

const SvgWithPercentage = (props) => {
  const [percent, setPercent] = useState(props.percent);

  const fillColor = props.fillColor || "#007aff";
  const bgColor = props.bgColor || "#DDD";
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 221.2 500"
    transform="scale(1,-1)"
    {...props}
  >
    <g fill={bgColor}>
      <path d="M161.2 61.7c0 27.9-22.6 50.6-50.5 50.6S60.1 89.7 60.1 61.8s22.6-50.6 50.5-50.6c28 0 50.6 22.6 50.6 50.5zM184.4 126.4H37c-8.6 0-15.6 7-15.6 15.6v153.3c-.1 8.6 6.6 15.8 15.1 16.2 8.6.3 15.8-6.5 16.1-15.1v-135c0-2.1 1.7-3.8 3.8-3.8 2.1 0 3.8 1.7 3.8 3.8v314.9c-.1 10.6 8 19.6 18.6 20.5 11 .7 20.4-7.6 21.2-18.5V311.6h21.5v164.6c-.1 10.6 8 19.6 18.6 20.5 11 .7 20.4-7.6 21.2-18.5V161.4c0-2.1 1.7-3.8 3.8-3.8 2.1 0 3.8 1.7 3.8 3.8v134c-.1 8.6 6.5 15.8 15.1 16.2 8.6.3 15.8-6.5 16.1-15.1V142c-.1-8.7-7.1-15.6-15.7-15.6z" />
    </g>
    <g fill={fillColor}>
      <path
        d="M161.2 61.7c0 27.9-22.6 50.6-50.5 50.6S60.1 89.7 60.1 61.8s22.6-50.6 50.5-50.6c28 0 50.6 22.6 50.6 50.5z"
        transform={`translate(0 ${500 - (percent * 500) / 100})`}
      />
    </g>
  </svg>
  );
};

export default SvgWithPercentage;