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
          <Path d="M15,7H13.57l-2.71,4.51h0A1,1,0,0,1,10,12a1,1,0,0,1-.93-0.63h0L5.82,3.24l-2,3.27h0A1,1,0,0,1,3,7H1A1,1,0,0,1,1,5H2.43L5.14,0.49h0A1,1,0,0,1,6,0a1,1,0,0,1,.93.63h0l3.25,8.13,2-3.27h0A1,1,0,0,1,13,5h2A1,1,0,0,1,15,7Z"/>
        </G>
      </Svg>
    );
  }
}
