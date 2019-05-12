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
  selectPage: {
    textAlign: 'center',
    marginTop: PixelRatio.roundToNearestPixel(32),
    marginStart: PixelRatio.roundToNearestPixel(16),
    marginEnd: PixelRatio.roundToNearestPixel(16),
    fontSize: PixelRatio.roundToNearestPixel(20),
    color: COLOR.deepOrange300,
  },
  button: {
    container: {
      marginTop: PixelRatio.roundToNearestPixel(16),
      marginStart: PixelRatio.roundToNearestPixel(16),
      marginEnd: PixelRatio.roundToNearestPixel(16),
    },
  },
};

export default Styles;
