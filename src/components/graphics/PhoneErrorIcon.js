import React, { PureComponent, PropTypes } from 'react';
import { Svg, Path, G } from 'react-native-svg';
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
    color: '#ff3b30',
    width: 43,
    height: 70
  };

  render() {
    const {width, height, opacity, color} = this.props;

    return (
      <Svg width={width} height={height} opacity={opacity}>
        <G fill={color}>
          <Path d="M17.46,65.84a2.69,2.69,0,1,0-2.69-2.69A2.69,2.69,0,0,0,17.46,65.84ZM14.38,18.42a1.34,1.34,0,0,0-1.9-1.9L6.4,22.6a1.34,1.34,0,1,0,1.9,1.9ZM32.92,0A10.09,10.09,0,0,0,22.86,9.41H1.34A1.34,1.34,0,0,0,0,10.75V68.52a1.34,1.34,0,0,0,1.34,1.34H33.58a1.34,1.34,0,0,0,1.34-1.34V20A10.08,10.08,0,0,0,32.92,0ZM32.24,67.18H2.68V59.12H32.24v8.06Zm0-10.75H2.68V12.09H23a10.1,10.1,0,0,0,9.2,8v36.3Zm7.9-44.8c0,0.19-.09.38-0.15,0.56l0,0.14q-0.09.27-.19,0.53l0,0.13c-0.09.2-.18,0.4-0.29,0.6l-0.1.16c-0.07.13-.15,0.26-0.23,0.38l-0.2.29-0.16.22-0.26.31-0.14.15L38,15.42l-0.07.06a7.38,7.38,0,0,1-1.86,1.26l0,0L35.53,17l-0.07,0a7.1,7.1,0,0,1-3.62.37l-0.23,0-0.42-.09-0.17,0a7.37,7.37,0,0,1-3.1-12.57h0q0.24-.22.49-0.41l0,0c0.16-.12.33-0.24,0.5-0.35l0.07,0,0.51-.29,0.12-.06,0.5-.23,0.17-.06L30.81,3,31,2.93l0.44-.11,0.34-.05,0.36-.05c0.22,0,.43,0,0.65,0h0.08a7.39,7.39,0,0,1,1.47.15h0l0.29,0.07a7.35,7.35,0,0,1,5.47,8.61ZM19.2,17.86L7.76,29.3a1.34,1.34,0,1,0,1.9,1.9L21.1,19.76A1.34,1.34,0,1,0,19.2,17.86ZM36.31,7.11a1.35,1.35,0,0,0-1.91,0L33.13,8.38,31.85,7.11A1.35,1.35,0,1,0,29.94,9l1.27,1.27-1.27,1.27a1.35,1.35,0,1,0,1.91,1.91l1.27-1.27,1.27,1.27a1.35,1.35,0,1,0,1.91-1.91L35,10.29,36.31,9A1.35,1.35,0,0,0,36.31,7.11Z"/>
        </G>
      </Svg>
    );
  }
}
