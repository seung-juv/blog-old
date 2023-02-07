import React from 'react';

export interface LogoProps extends React.SVGAttributes<HTMLOrSVGElement> {}

export default function Logo(props: LogoProps): React.ReactElement {
  return (
    <svg version="1.1" viewBox="0 0 504.3 134.2" {...props}>
      <mask id="mask">
        <path
          id="mk"
          style={{
            fill: 'none',
            stroke: '#FFFFFF',
            strokeWidth: 13,
            strokeDasharray: '2834.6455, 14173.2275',
          }}
          d="M64.8,24.7c0,0-2.4-16.7-23-19.3c-20.2-2.6-31.3,6-32.9,22.1c0.8,12.8,12,22.9,27.6,23.3
c16.8,0.4,30.8,7.2,33.1,24.5c1,19.1-12.2,27-30.4,28.1C21,104.4,7.8,93.2,4.1,79s-12.8,2.5-12.8,2.5s-20.9,51.8,4.8,55.8
c25.7,4,30.4-31,30.4-31l53.5-39.5H141c0,0,3.5-31.1-20.9-32.7c-24.4-1.6-25.7,20.1-25.1,39.3c1.6,18.2,8,26.2,23,27.6
s26.6-20.9,26.6-23.3s2.8-57,2.8-57l16.3-3.2l0.3,66.2c0,0,3.8,17.4,22.3,17.4c15.9,0,21.9-14.7,21.9-14.7l0.8-63.2l7.5,88.4
c0,0,2.9,15.5,11,13.7c8-1.9,5.4-21.9,5.4-21.9l-0.3-49.1c0,0,3.4-19.9,22.2-21c18.7-1.1,23.6,20.4,23.6,20.4l-0.8,62.1
c0,0,39.2,15,49.4,12.3c10.2-2.7,19.1-10.5,19.2-21.5c0.1-11.4,0.8-53.5,0.8-53.5s-3.2-19.8-24.1-19.3c-20.9,0.5-22,21.4-22,21.4
l0.1,24.7c0,0,1.7,20.8,23.5,21c21.9,0.3,23.1-25.5,23.1-25.5L415.3-20c0,0,15.5,9.9,15.5,16.3s-0.1,88.5-0.1,88.5
s-1.7,16-26.9,16.5c-25.2,0.5-7.5,19-7.5,19l24.6,2.1c0,0-5.1-107.7,15-105.5c20.1,2.1,17.4,18.2,17.4,18.2l53.3-3.1l-53.4,7.7
l0.5,42.6c0,0,4,19.3,23.9,18.7c19.6-1.7,20.3-21,20.3-21l1.3-40.8"
        />
      </mask>
      <g mask="url(#mask)">
        <path
          d="M12.5,83c2,4.4,5.3,8,9.4,10.5c4.4,2.8,9.5,4.2,15.5,4.2c3.2,0,6.5-0.4,9.6-1.1c3-0.7,5.8-1.8,8.4-3.5
c2.4-1.5,4.4-3.6,5.8-6.1c1.5-2.7,2.3-5.7,2.2-8.8c0-3.2-0.7-6.3-2.1-9.2C60,66.4,58,64,55.6,62.2c-2.5-1.9-5.3-3.4-8.3-4.4
c-3.2-1-6.5-1.5-9.9-1.5c-4.6,0-9.1-0.7-13.5-2C20,53,16.3,51,13.2,48.3c-3-2.6-5.4-5.8-7.1-9.4C4.3,35,3.4,30.8,3.5,26.5
c0-8.7,3.1-15.5,9.2-20.4s14.4-7.3,24.7-7.3c0.2,0,1.4,0.1,3.7,0.2c2.8,0.3,5.5,0.8,8.1,1.7C52.7,1.9,56,3.5,59,5.4
c3.5,2.3,6.4,5.4,8.4,9c0.2,0.5,0.5,1.1,0.8,1.7c0.2,0.7,0.3,1.4,0.3,2.1c-0.1,1.4-0.6,2.8-1.6,3.9c-1,1.3-2.6,2-4.3,2
c-1.8,0.1-3.5-0.7-4.6-2.1c-1.4-1.6-2.7-3.1-4-4.4c-1.3-1.4-2.7-2.5-4.3-3.6c-1.7-1-3.5-1.8-5.4-2.4c-2.3-0.6-4.7-0.9-7.1-0.9
c-3.4-0.1-6.9,0.4-10.2,1.3c-2.5,0.7-4.8,1.9-6.8,3.5c-1.7,1.3-2.9,3-3.7,5c-0.7,1.9-1.1,3.8-1.1,5.8c0,2.6,0.5,5.2,1.7,7.6
c1.1,2.2,2.7,4.1,4.7,5.6c2.1,1.6,4.4,2.8,6.9,3.5c2.8,0.8,5.7,1.2,8.6,1.2c5,0,10,0.8,14.7,2.4c4.4,1.5,8.6,3.8,12.2,6.8
c3.5,2.9,6.3,6.6,8.2,10.7c2,4.4,3.1,9.2,3,14.1c0.1,4.8-0.9,9.5-3.1,13.8c-2,3.9-4.9,7.3-8.4,9.9c-3.7,2.7-7.9,4.7-12.3,5.8
c-4.9,1.3-9.9,1.9-14.9,1.9c-1,0-3-0.2-6-0.5c-3.4-0.4-6.8-1.4-9.9-2.8c-4-1.7-7.8-4.1-11.1-7c-3.7-3.2-6.7-7.5-9.1-13.1
C0.2,85.2,0,84.1,0,83c0-1.6,0.5-3.1,1.6-4.3C2.6,77.6,4,77,5.5,77c1.5,0,3,0.6,4.1,1.7C10.9,79.9,11.8,81.4,12.5,83z"
        />
        <path
          d="M89.7,55.8c0-3.8,0.7-7.6,2.2-11.1c1.4-3.4,3.5-6.5,6.2-9.1c2.6-2.6,5.7-4.6,9.1-6.1c7.1-3,15.1-3,22.2,0
c3.4,1.4,6.5,3.5,9.1,6.1c2.6,2.6,4.7,5.7,6.2,9.1c1.5,3.5,2.3,7.3,2.2,11.1v11.4c0,3.3-2.6,6-5.9,6c0,0-0.1,0-0.1,0h-39.1v5.4
c0,2.2,0.5,4.3,1.3,6.3c0.9,1.9,2.1,3.7,3.6,5.2c1.5,1.5,3.3,2.8,5.3,3.6c2,0.8,4.2,1.3,6.4,1.3c6.5,0.1,12.5-3.7,15.2-9.6l0.2-0.5
c0.4-1.1,1.1-2.1,2.1-2.8c1-0.7,2.2-1,3.4-1c1.6,0,3.2,0.6,4.3,1.8c1.1,1.1,1.7,2.6,1.7,4.2c0,0.8-0.2,1.5-0.5,2.2l-0.3,0.6
c-2.2,5-5.7,9.3-10.3,12.3c-4.6,3.2-10.1,4.8-15.8,4.7c-3.8,0-7.6-0.7-11.1-2.2c-3.4-1.4-6.5-3.5-9.1-6.1c-2.6-2.6-4.7-5.7-6.2-9.1
c-1.5-3.5-2.3-7.3-2.2-11.1L89.7,55.8z M101.7,61.2h33.2v-5.4c0-2.2-0.5-4.3-1.3-6.3c-0.9-2-2-3.8-3.5-5.3c-1.5-1.5-3.3-2.7-5.2-3.6
c-2-0.8-4.2-1.3-6.4-1.3c-6.7-0.1-12.8,3.9-15.4,10.1c-0.8,2-1.3,4.1-1.3,6.3V61.2z"
        />
        <path
          d="M158.1,34c0-3.3,2.6-6,5.9-6c0,0,0.1,0,0.1,0c1.6,0,3.1,0.6,4.2,1.7c1.2,1.1,1.8,2.7,1.8,4.3v44.5
c0,2.2,0.4,4.3,1.3,6.3c0.8,2,2,3.7,3.6,5.2c3.1,3.1,7.4,4.9,11.8,4.8c2.2,0,4.4-0.4,6.4-1.3c2-0.8,3.8-2,5.3-3.6
c1.5-1.5,2.7-3.3,3.6-5.2c0.9-2,1.3-4.1,1.3-6.3V34c0-3.3,2.6-6,5.9-6c0,0,0.1,0,0.1,0c1.6,0,3.1,0.6,4.2,1.7
c1.2,1.1,1.8,2.7,1.8,4.3v44.5c0,3.8-0.7,7.6-2.2,11.1c-1.5,3.4-3.6,6.5-6.2,9.1c-2.6,2.6-5.7,4.7-9.1,6.1c-7.1,2.9-15.1,2.9-22.2,0
c-3.4-1.4-6.5-3.5-9.1-6.1c-5.4-5.3-8.4-12.6-8.4-20.1L158.1,34z"
        />
        <path
          d="M226.9,55.8c0-3.8,0.7-7.6,2.2-11.1c1.4-3.4,3.5-6.5,6.2-9.1c2.6-2.6,5.7-4.6,9.1-6.1c7.1-3,15.1-3,22.2,0
c3.4,1.4,6.5,3.5,9.1,6.1c2.6,2.6,4.7,5.7,6.2,9.1c1.5,3.5,2.3,7.3,2.3,11.1v44.5c0,1.6-0.6,3.2-1.8,4.3c-1.1,1.1-2.6,1.7-4.2,1.7
c-3.3,0-6-2.6-6-5.9c0,0,0-0.1,0-0.1V55.8c0-2.2-0.5-4.3-1.3-6.3c-0.9-2-2.1-3.7-3.6-5.3c-1.5-1.5-3.3-2.8-5.3-3.6
c-2-0.8-4.2-1.3-6.4-1.3c-6.7,0-12.7,4-15.3,10.1c-0.8,2-1.3,4.1-1.3,6.3v44.5c0,1.6-0.6,3.2-1.8,4.3c-1.1,1.1-2.6,1.7-4.2,1.7
c-3.3,0-6-2.6-6-5.9c0,0,0-0.1,0-0.1L226.9,55.8z"
        />
        <path
          d="M295.3,55.8c0-3.8,0.8-7.6,2.2-11.1c1.4-3.4,3.5-6.5,6.2-9.1c2.6-2.6,5.7-4.6,9.1-6.1c7.1-3,15.1-3,22.2,0
c3.4,1.4,6.5,3.5,9.1,6.1c2.6,2.6,4.7,5.7,6.2,9.1c1.5,3.5,2.3,7.3,2.3,11.1v49.9c0,3.8-0.8,7.6-2.3,11.1c-1.5,3.4-3.6,6.5-6.2,9.1
c-2.6,2.6-5.7,4.7-9.1,6.1c-3.5,1.5-7.3,2.3-11.1,2.2c-3.3,0-6-2.7-6-6c0-3.3,2.7-6,6-6c2.2,0,4.4-0.4,6.4-1.3c2-0.8,3.8-2,5.2-3.5
c1.5-1.5,2.7-3.3,3.6-5.3c0.9-2,1.3-4.1,1.3-6.3v-4c-8.1,5.7-18.5,6.8-27.6,3c-3.4-1.4-6.5-3.5-9.1-6.1c-2.6-2.6-4.7-5.7-6.2-9.1
c-1.5-3.5-2.3-7.3-2.3-11.1V55.8z M307.3,78.6c0,2.2,0.5,4.3,1.3,6.3c0.9,1.9,2.1,3.7,3.6,5.2c1.5,1.5,3.3,2.8,5.3,3.6
c2,0.8,4.2,1.3,6.4,1.3c2.2,0,4.3-0.4,6.3-1.2c1.9-0.7,3.7-1.9,5.2-3.3c1.5-1.4,2.7-3.1,3.6-5c0.9-1.9,1.4-4,1.5-6.2V55.8
c0-2.2-0.5-4.3-1.3-6.3c-0.9-2-2.1-3.7-3.6-5.3c-1.5-1.5-3.3-2.7-5.2-3.6c-2-0.8-4.2-1.3-6.4-1.3c-6.7-0.1-12.8,3.9-15.4,10.1
c-0.8,2-1.3,4.1-1.3,6.3V78.6z"
        />
        <path
          d="M424.6,8.1c0-1.6,0.6-3.2,1.8-4.3c1.1-1.1,2.6-1.7,4.2-1.7c3.3,0,6,2.6,6,5.9c0,0,0,0.1,0,0.1v70.4
c0,3.8-0.8,7.6-2.3,11.1c-1.5,3.4-3.6,6.5-6.2,9.1c-2.6,2.6-5.7,4.7-9.1,6.1c-3.5,1.5-7.3,2.2-11,2.2c-3.3,0-6-2.7-6-6s2.7-6,6-6
c2.1,0,4.3-0.4,6.2-1.3c1.9-0.8,3.7-2,5.2-3.4c1.5-1.4,2.7-3.1,3.6-5c0.9-1.9,1.4-4,1.5-6.2L424.6,8.1z"
        />
        <path
          d="M447.3,55.8c0-3.3,2.6-6,5.9-6c0,0,0.1,0,0.1,0c1.6,0,3.1,0.6,4.2,1.7c1.2,1.1,1.8,2.6,1.8,4.3v22.8
c0,2.2,0.4,4.3,1.3,6.3c1.7,4,4.9,7.2,8.8,8.8c2.1,0.9,4.3,1.3,6.5,1.3c2.2,0,4.4-0.4,6.4-1.3c2-0.8,3.8-2,5.2-3.6
c1.5-1.5,2.7-3.3,3.6-5.2c0.9-2,1.3-4.1,1.3-6.3V55.8c0-3.3,2.6-6,5.9-6c0,0,0.1,0,0.1,0c1.6,0,3.1,0.6,4.2,1.7
c1.2,1.1,1.8,2.7,1.8,4.3v22.8c0,3.8-0.7,7.6-2.2,11.1c-1.5,3.4-3.6,6.5-6.2,9.1c-2.6,2.6-5.7,4.7-9.1,6.1c-7.1,2.9-15.1,2.9-22.2,0
c-3.4-1.4-6.5-3.5-9.1-6.1c-5.4-5.3-8.4-12.6-8.4-20.1V55.8z"
        />
        <circle cx="498.3" cy="33.8" r="6" />
        <circle cx="453.3" cy="33.8" r="6" />
      </g>
    </svg>
  );
}
