import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  image: {
    height: hp(25),
    width: '100%',
    borderRadius: hp(1),
    marginBottom: hp(2),
  },
  title: {
    fontSize: hp(3),
    fontWeight: '900', // 100 - 900
    color: 'black',
    textAlign: 'center',
    lineHeight: hp(4),
    marginBottom: hp(1),
  },
});
