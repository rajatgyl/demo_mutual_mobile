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
  input: {
    borderWidth: 0.5,
    height: hp(5.5),
    width: '100%',
    marginVertical: hp(2),
    borderRadius: 5,
  },
  nothingTxt: {
    fontSize: hp(2),
    marginTop: hp(15),
    color: '#000',
    fontWeight: '500',
    textAlign: 'center',
  },
});

export {styles};
