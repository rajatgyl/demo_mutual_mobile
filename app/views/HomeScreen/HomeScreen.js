import {View, FlatList, TextInput, Text} from 'react-native';
import React, {useState, useCallback} from 'react';
import axios from 'axios';
import {styles} from './HomeScreen.styles';
import Card from '../../components/Card/Card';
import debounce from 'lodash.debounce';

const Empty = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.nothingTxt}>Nothing to show here</Text>
    </View>
  );
};

const HomeScreen = ({navigation}) => {
  const [searchString, setSearchString] = useState('');
  const [result, setResult] = useState([]);

  const changeSearchTxt = text => {
    setSearchString(text);
    callDebounce(text);
  };

  const searchForImages = keyword => {
    const _keyword = keyword.trim();
    const apiKey = '07ec85adfa52a3bd965cbd21455f27cc';
    const coordinate = '&lat=40.93&lon=-73.88';
    const photosSearchURL =
      'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' +
      apiKey +
      coordinate +
      '&format=json&extras=url_m,description&per_page=50&text=' +
      _keyword +
      '&nojsoncallback=1&safe_search=3&radius=32';
    axios
      .get(photosSearchURL)
      .then(res => {
        if (res.data.stat === 'ok') {
          const _result = res.data.photos.photo;
          setResult([..._result]);
          console.log(_result);
        }
      })
      .then(err => console.log(err));
  };

  const callDebounce = useCallback(
    debounce(nextValue => searchForImages(nextValue), 500),
    [],
  );

  function goToNextScreen(item) {
    navigation.push('DetailsScreen', item);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={searchString}
        onChangeText={changeSearchTxt}
      />
      <FlatList
        data={result}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Empty />}
        renderItem={({item}) => {
          return (
            <Card
              onPress={() => goToNextScreen(item)}
              imgUrl={item.url_m}
              title={item.title}
            />
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;
