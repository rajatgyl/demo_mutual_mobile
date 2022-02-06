import {ScrollView, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './DetailsScreen.styles';

const DetailsScreen = ({navigation, route}) => {
  const data = route.params;
  const {title, url_m, description} = data;
  const {_content} = description;
  console.log(data);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Image style={styles.image} source={{uri: url_m}} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{_content}</Text>
    </ScrollView>
  );
};

export default DetailsScreen;
