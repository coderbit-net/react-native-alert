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
    color: '#ffb144',
    width: 59,
    height: 73
  };

  render() {
    const {width, height, opacity, color} = this.props;

    return (
      <Svg width={width} height={height} opacity={opacity}>
        <G fill={color}>
          <Path d="M30.42,59.51L41.9,71.41,40.37,73,28.89,61.1Z"/>
          <Path d="M38.84,71.41L57.23,52.34l1.53,1.59L40.37,73Z"/>
          <G fill={color}>
            <Rect x="20.9" y="30.6" width="20.31" height="2.48"/>
            <Rect x="10.44" y="30.6" width="5.81" height="2.48"/>
            <Rect x="20.9" y="22.11" width="20.31" height="2.48"/>
            <Rect x="10.44" y="22.11" width="5.81" height="2.48"/>
            <Rect x="20.9" y="38.99" width="16.07" height="2.48"/>
            <Rect x="10.44" y="38.99" width="5.81" height="2.48"/>
          </G>
          <Path d="M30.58,67.06H4.79A2.4,2.4,0,0,1,2.4,64.65V7A2.4,2.4,0,0,1,4.79,4.64h9.76V6.88H36.32V4.64h10.1A2.4,2.4,0,0,1,48.81,7V57.13l2.4-2.41V7a4.8,4.8,0,0,0-4.79-4.81H36.32V0H14.55V2.24H4.79A4.8,4.8,0,0,0,0,7v57.6a4.8,4.8,0,0,0,4.79,4.81H32.9ZM16.88,2.23H34V4.76H16.88V2.23Z"/>
        </G>
      </Svg>
    );
  }
}
