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
    width: 12,
    height: 16
  };

  render() {
    const {width, height, opacity, color} = this.props;

    return (
      <Svg width={width} height={height} opacity={opacity}>
        <G fill={color}>
          <Path d="M11,16H1a1,1,0,0,1-1-1,5,5,0,0,1,5-5H7a5,5,0,0,1,5,5A1,1,0,0,1,11,16ZM6,8A3,3,0,0,1,3,5V3A3,3,0,0,1,9,3V5A3,3,0,0,1,6,8Z"/>
        </G>
      </Svg>
    );
  }
}
