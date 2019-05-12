import { PixelRatio } from 'react-native';
import { COLOR } from 'react-native-material-ui';

const Styles = {
  toolbarHideLeft: {
    leftElementContainer: {
      opacity: 0,
    },
  },
  toolbarHideRight: {
    rightElementContainer: {
      opacity: 0,
    },
  },
  languageText: {
    marginTop: PixelRatio.roundToNearestPixel(16),
    marginStart: PixelRatio.roundToNearestPixel(16),
    marginEnd: PixelRatio.roundToNearestPixel(16),
    fontSize: PixelRatio.roundToNearestPixel(18),
    color: COLOR.blueGrey500,
  },
  radioContainer: {
    marginTop: PixelRatio.roundToNearestPixel(8),
    flexDirection: 'row',
  },
  radio: {
    label: {
      fontSize: PixelRatio.roundToNearestPixel(16),
    },
  },
  radioRtl: {
    container: {
      transform: [{ rotateY: '180deg' }],
    },
    label: {
      fontSize: PixelRatio.roundToNearestPixel(16),
      transform: [{ rotateY: '180deg' }],
    },
  },
};

export default Styles;
