import { SVGProps } from 'react';

interface ArrowRightIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

function ArrowRightSVGIcon(props: ArrowRightIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
      width={props.size || 20}
      height={props.size || 20}
      {...props}
    >
      <path
        fill={props.color || 'currentColor'}
        d='m359.873 121.377l-22.627 22.627l95.997 95.997H16v32.001h417.24l-95.994 95.994l22.627 22.627L494.498 256z'
      ></path>
    </svg>
  );
}

export default ArrowRightSVGIcon;
