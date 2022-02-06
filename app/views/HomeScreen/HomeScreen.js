import {View, FlatList, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {styles} from './HomeScreen.styles';
import Card from '../../components/Card/Card';

const HomeScreen = ({navigation}) => {
  const [searchString, setSearchString] = useState('');
  const [result, setResult] = useState([]);

  const changeSearchTxt = text => {
    setSearchString(text);
  };

  const searchForImages = keyword => {
    const apiKey = '07ec85adfa52a3bd965cbd21455f27cc';
    const coordinate = '&lat=40.93&lon=-73.88'; // new york
    const photosSearchURL =
      'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' +
      apiKey +
      coordinate +
      '&format=json&extras=url_m,description&per_page=500&text=' +
      'cat' +
      '&nojsoncallback=1&safe_search=3&radius=32';
    axios
      .get(photosSearchURL)
      .then(res => {
        if (res.data.stat === 'ok') {
          const _result = res.data.photos.photo;
          setResult([..._result]);
          console.log(res);
        }
      })
      .then(err => console.log(err));
  };

  useEffect(() => {
    searchForImages();
  }, []);

  function goToNextScreen() {
    navigation.push('DetailsScreen');
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={changeSearchTxt} />
      {/* <FlatList data={result} /> */}
      <Card onPress={goToNextScreen} />
    </View>
  );
};

export default HomeScreen;
