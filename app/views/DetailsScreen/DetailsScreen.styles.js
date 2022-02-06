import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: wp(5),
  },
  title: {
    fontSize: hp(3),
    fontWeight: '900', // 100 - 900
    color: 'black',
    textAlign: 'center',
    lineHeight: hp(4),
    marginBottom: hp(1),
  },
  description: {
    fontSize: hp(2.5),
    color: 'grey',
    textAlign: 'center',
    lineHeight: hp(4),
    marginBottom: hp(1),
  },
  image: {
    height: hp(60),
    width: '100%',
    borderRadius: hp(1),
    marginBottom: hp(2),
    marginTop: hp(3),
  },
});

export {styles};
