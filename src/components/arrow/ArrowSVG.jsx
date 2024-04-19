import * as React from "react"
const Arrow = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="current"
  >
    <path
      fillRule="evenodd"
      d="M11.92 0 14 2.07V14H2.07L0 11.92h10.37L0 1.55 1.55 0l10.37 10.37V0Z"
    />
  </svg>
)
export default Arrow