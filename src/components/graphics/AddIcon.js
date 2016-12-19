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
    color: '#ffffff',
    width: 16,
    height: 16
  };

  render() {
    const {width, height, opacity, color} = this.props;

    return (
      <Svg width={width} height={height} opacity={opacity}>
        <G fill={color}>
          <Path d="M15,10a1,1,0,0,0-1,1v3H2V11a1,1,0,0,0-2,0v4a1,1,0,0,0,1,1H15a1,1,0,0,0,1-1V11A1,1,0,0,0,15,10ZM5,5a1,1,0,0,0,.71-0.29L7,3.41V11a1,1,0,1,0,2,0V3.41l1.29,1.29a1,1,0,0,0,1.41-1.41l-3-3a1,1,0,0,0-1.41,0l-3,3A1,1,0,0,0,5,5Z"/>
        </G>
      </Svg>
    );
  }
}
