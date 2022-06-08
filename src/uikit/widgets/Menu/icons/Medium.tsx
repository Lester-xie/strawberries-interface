import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <g id="页面-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="图标" transform="translate(-18.000000, -132.000000)">
          <g id="-mockplus-" transform="translate(18.000000, 132.000000)">
            <g id="sidebar/medium" transform="translate(2.000000, 2.000000)">
              <rect id="矩形" stroke="#E55268" strokeWidth="2" x="0" y="0" width="20" height="20" rx="8"></rect>
              <path d="M16,5.21423294 L15.04375,6.17704998 C14.959375,6.24353606 14.9195312,6.35188377 14.9359375,6.45776902 L14.9359375,13.542231 C14.9195312,13.6505787 14.959375,13.7589264 15.04375,13.82295 L15.98125,14.7857671 L15.98125,15 L11.275,15 L11.275,14.7956168 L12.2429688,13.8081753 C12.3390625,13.707215 12.3390625,13.6776656 12.3390625,13.5274563 L12.3390625,7.79487811 L9.64374999,14.9753755 L9.28046876,14.9753755 L6.14453126,7.79487811 L6.14453126,12.6089633 C6.11640625,12.810884 6.184375,13.0152672 6.32031251,13.1605516 L7.58125001,14.763605 L7.58125001,14.977838 L4,14.977838 L4,14.763605 L5.26093751,13.1605516 C5.39565499,13.0143455 5.45651027,12.8097463 5.42500001,12.6089633 L5.42500001,7.04383157 C5.44140626,6.88869737 5.38515627,6.73848805 5.27265625,6.63260282 L4.15234376,5.21423294 L4.15234376,5 L7.63281251,5 L10.31875,11.1930559 L12.6835937,5.00492489 L16,5.00492489 L16,5.21423294 L16,5.21423294 Z" id="路径" fill="#E55268"></path>
            </g>
          </g>
        </g>
      </g>
    </Svg>
  );
};

export default Icon;
