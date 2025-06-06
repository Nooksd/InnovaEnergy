const SVGCheck = ({ ...props }) => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M4 12.6111L8.92308 17.5L20 6.5"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SVGCheck;
