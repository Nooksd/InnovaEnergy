import { HamburgerSVG } from "../SVGStyles";

const SVGHamburger = ({ active, ...props }) => (
  <HamburgerSVG viewBox="0 0 100 100" $active={active ? 'true' : undefined} {...props}>
    <path
      className="line top"
      d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
    />
    <path className="line middle" d="m 30,50 h 40" />
    <path
      className="line bottom"
      d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
    />
  </HamburgerSVG>
);

export default SVGHamburger;
