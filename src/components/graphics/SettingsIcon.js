import React, { PureComponent, PropTypes } from 'react';
import { Svg, Path, G, Rect } from 'react-native-svg';
import ColorPropType from 'ColorPropType'; // eslint-disable-line

export default class extends PureComponent {
  static propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    opacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    color: ColorPropType.isRequired
  };

  static defaultProps = {
    opacity: 1,
    color: '#cad2d8',
    width: 15,
    height: 16
  };

  render() {
    const {width, height, opacity, color} = this.props;

    return (
      <Svg width={width} height={height} opacity={opacity}>
        <G fill={color}>
          <Path d="M14.5,6.23l-1.16.68A6,6,0,0,1,13.45,8a6.08,6.08,0,0,1-.11,1.09L14.5,9.77a1,1,0,0,1,.36,1.37l-1,1.73a1,1,0,0,1-1.35.37l-1.18-.69a5.89,5.89,0,0,1-1.86,1.09V15a1,1,0,0,1-1,1h-2a1,1,0,0,1-1-1V13.63a5.89,5.89,0,0,1-1.86-1.09l-1.18.69a1,1,0,0,1-1.35-.37l-1-1.73A1,1,0,0,1,.5,9.77l1.16-.68A6,6,0,0,1,1.55,8a6,6,0,0,1,.11-1.09L0.5,6.23A1,1,0,0,1,.13,4.87l1-1.73a1,1,0,0,1,1.35-.37L3.66,3.45A5.9,5.9,0,0,1,5.52,2.37V1a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V2.37a5.89,5.89,0,0,1,1.86,1.09l1.18-.69a1,1,0,0,1,1.35.37l1,1.73A1,1,0,0,1,14.5,6.23ZM7.5,9a1,1,0,1,1,1-1A1,1,0,0,1,7.5,9Z"/>
        </G>
      </Svg>
    );
  }
}
