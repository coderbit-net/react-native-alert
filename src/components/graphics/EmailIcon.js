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
    color: '#ffb144',
    width: 85,
    height: 60
  };

  render() {
    const {width, height, opacity, color} = this.props;

    return (
      <Svg width={width} height={height} opacity={opacity}>
        <G fill={color}>
          <Path
            d="M76.05,22.15v36h0a1.49,1.49,0,0,1,0,.29s0,0.1,0,.14,0,0.09,0,.13a1.49,1.49,0,0,1-.09.17l0,0.08a1.49,1.49,0,0,1-.42.42l-0.09,0-0.16.09-0.14,0-0.13,0-0.29,0H1.49l-0.29,0-0.14,0-0.14,0-0.17-.09-0.09,0A1.49,1.49,0,0,1,.25,59l0-.06a1.46,1.46,0,0,1-.1-0.19s0-.07,0-0.1A1.45,1.45,0,0,1,0,58.45a1.45,1.45,0,0,1,0-.17s0-.08,0-0.12V11.91a1.35,1.35,0,0,1,0-.15s0-.1,0-0.15l0-.09a1.54,1.54,0,0,1,.06-0.19l0-.05a1.45,1.45,0,0,1,.12-0.21h0l0,0,0.15-.17,0.08-.07,0.15-.11,0.1-.05,0.16-.08,0.11,0,0.17,0H62.67A11.18,11.18,0,1,1,76.05,22.15ZM3,54.56l21-21a1.49,1.49,0,0,1,2.11,2.11l-21,21H71l-21-21a1.49,1.49,0,1,1,2.11-2.11l21,21V22.33a11.12,11.12,0,0,1-6.63-2.76L38.89,39.24a1.49,1.49,0,0,1-1.73,0L3,14.83V54.56ZM62.86,13.42H6.14L38,36.2,64.47,17.31A11.12,11.12,0,0,1,62.86,13.42ZM73.82,3A8.2,8.2,0,0,0,67.5,16.41a1.48,1.48,0,0,1,.33.33l0.06,0.1A8.2,8.2,0,1,0,73.82,3Zm4.74,7.37-4.84,4.84a1.49,1.49,0,0,1-2.09,0l-2.41-2.41a1.47,1.47,0,1,1,2.07-2.07l1.38,1.38,3.81-3.81A1.47,1.47,0,1,1,78.55,10.36Z"/>
        </G>
      </Svg>
    );
  }
}
