import * as React from "react";
import Svg, { Path } from "react-native-svg";

function OrdersIcon(props) {
  return (
    <Svg width={25} height={25} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.497 1.667C8.124 1.136 9.033.833 10 .833c.967 0 1.877.303 2.503.834h.83c.92 0 1.667.746 1.667 1.666h.833c.92 0 1.667.747 1.667 1.667v12.5c0 .92-.746 1.667-1.667 1.667H4.167c-.92 0-1.667-.747-1.667-1.667V5c0-.92.746-1.667 1.667-1.667H5c0-.92.746-1.666 1.667-1.666h.83zm5.836 4.166c.617 0 1.156-.335 1.444-.833h1.056v12.5H4.167V5h1.056c.288.498.827.833 1.444.833h6.666zm-6.666 7.5v-1.666h5v1.666h-5zm0-5V10h6.666V8.333H6.667zm1.548-5l.249-.287c.274-.315.86-.546 1.536-.546.675 0 1.262.23 1.536.546l.25.287h1.547v.834H6.667v-.834H8.214z"
        fill={props.color}
      />
    </Svg>
  );
}

export default OrdersIcon;
