import { PixelRatio } from 'react-native';
import { COLOR } from 'react-native-material-ui';

const Styles = {
  safeAreaView: {
    flex: 1,
  },
  languageView: {
    flex: 1,
  },
  selectLanguage: {
    textAlign: 'center',
    marginTop: PixelRatio.roundToNearestPixel(64),
    marginStart: PixelRatio.roundToNearestPixel(16),
    marginEnd: PixelRatio.roundToNearestPixel(16),
    fontSize: PixelRatio.roundToNearestPixel(25),
    color: COLOR.blueGrey500,
  },
  buttonContainer: {
    marginTop: PixelRatio.roundToNearestPixel(32),
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  error: {
    textAlign: 'center',
    marginTop: PixelRatio.roundToNearestPixel(16),
    marginStart: PixelRatio.roundToNearestPixel(16),
    marginEnd: PixelRatio.roundToNearestPixel(16),
    fontSize: PixelRatio.roundToNearestPixel(20),
    color: COLOR.redA200,
  },
};

export default Styles;
