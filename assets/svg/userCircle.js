import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

export default (props) => {
  return (
    <Svg width={75} height={75} viewBox="0 0 89 89" fill="none" {...props}>
      <Circle cx={44.5} cy={44.5} r={43} stroke="#FCBE1B" strokeWidth={3} />
      <Circle
        cx={45.101}
        cy={40.291}
        r={13.534}
        stroke="#FCBE1B"
        strokeWidth={3}
      />
      <Path
        d="M60.425 65.405c3.662 4.798 5.816 10.742 6.013 15.65-4.298 3.168-11.499 5.733-19.474 6.222-8.081.496-16.748-1.15-23.8-6.237.204-4.899 2.391-10.83 6.133-15.622 3.922-5.021 9.39-8.594 15.804-8.594 6.17 0 11.487 3.553 15.324 8.581z"
        stroke="#FCBE1B"
        strokeWidth={3}
      />
    </Svg>
  );
};
