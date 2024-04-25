import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FilterSVG: React.FC<any> = props => (
  <Svg width={21} height={19} fill={props.fill} {...props}>
    <Path
      fillRule="evenodd"
      d="M9.334 4.486a3.001 3.001 0 0 1-5.668 0c-.054.01-.11.014-.166.014h-2a1 1 0 0 1 0-2h2c.057 0 .112.005.166.014a3.001 3.001 0 0 1 5.668 0c.054-.01.11-.014.166-.014h10a1 1 0 1 1 0 2h-10c-.057 0-.112-.005-.166-.014ZM7.5 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM.5 15.5a1 1 0 0 1 1-1h2c.057 0 .112.005.166.014a3.001 3.001 0 0 1 5.668 0c.054-.01.11-.014.166-.014h10a1 1 0 1 1 0 2h-10c-.057 0-.112-.005-.166-.014a3.001 3.001 0 0 1-5.668 0c-.054.01-.11.014-.166.014h-2a1 1 0 0 1-1-1Zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM19.5 8.5a1 1 0 1 1 0 2h-2c-.056 0-.112-.005-.166-.014a3.001 3.001 0 0 1-5.668 0c-.054.01-.11.014-.166.014h-10a1 1 0 1 1 0-2h10c.056 0 .112.005.166.014a3.001 3.001 0 0 1 5.668 0c.054-.01.11-.014.166-.014h2Zm-5 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default FilterSVG;
