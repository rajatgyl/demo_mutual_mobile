import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './Card.styles';

const Card = ({imgUrl, title, onPress}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View>
          <Text style={styles.title}>
            {'This is a very long text in the view'}
          </Text>
          <Image
            style={styles.image}
            source={{
              uri: 'https://live.staticflickr.com/65535/51857733759_c1c9ab14d0.jpg',
            }}
          />
        </View>
      </TouchableOpacity>
    </>
  );
};

export default Card;
