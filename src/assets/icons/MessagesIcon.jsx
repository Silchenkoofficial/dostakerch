import * as React from "react";
import Svg, { Path } from "react-native-svg";

function MessagesIcon(props) {
  return (
    <Svg width={25} height={25} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M4.00008 17.1702L9.07241 14H15.6667C16.5872 14 17.3334 13.2538 17.3334 12.3333V2.33332C17.3334 1.41285 16.5872 0.666656 15.6667 0.666656H2.33341C1.41294 0.666656 0.666748 1.41285 0.666748 2.33332V12.3333C0.666748 13.2538 1.41294 14 2.33341 14H4.00008V17.1702ZM8.59442 12.3333L5.66675 14.1631V12.3333H2.33341V2.33332H15.6667V12.3333H8.59442ZM4.83341 9.83332V8.16666H10.6667V9.83332H4.83341ZM4.83341 4.83332V6.49999H12.3334V4.83332H4.83341Z" fill={props.color} />
    </Svg>

  );
}

export default MessagesIcon;
