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
    width: 16,
    height: 12
  };

  render() {
    const {width, height, opacity, color} = this.props;

    return (
      <Svg width={width} height={height} opacity={opacity}>
        <G fill={color}>
          <Rect width={width} height={height} rx="1" ry="1"/>
        </G>
        <G fill={'#ffffff'}>
          <Path d="M14,2H2V3H14V2ZM11,8.17a1,1,0,1,1-1,1A1,1,0,0,1,11,8.17Zm2,0a1,1,0,1,1-1,1A1,1,0,0,1,13,8.17Z"/>
        </G>
      </Svg>
    );
  }
}
