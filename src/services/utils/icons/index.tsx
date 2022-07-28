import React from "react";
import Svg, { G, Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  type: string;
}

const Icon = ({ type, ...props }: IconProps) => {
  switch (type) {
    case "google": {
      return (
        <Svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="#4F4F4F"
          {...props}
        >
          <Path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z" />
        </Svg>
      );
    }
    case "facebook": {
      return (
        <Svg
          width="20px"
          height="20px"
          fill="#4F4F4F"
          viewBox="0 0 512 512"
          {...props}
        >
          <G>
            <Path
              d="M360.7,284.1l12.5-81.4h-78.1v-52.8c0-22.3,10.9-44,45.9-44h35.5V36.5c0,0-32.2-5.5-63.1-5.5C249.1,31,207,70,207,140.6v62.1h-71.5v81.4H207V481h88V284.1H360.7z"
              fill="#4F4F4F"
            />
          </G>
        </Svg>
      );
    }

    default: {
      return <Svg x="0px" y="0px" viewBox="0 0 24 24" {...props}></Svg>;
    }
  }
};

export default Icon;
