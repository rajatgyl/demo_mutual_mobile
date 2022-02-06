import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './Card.styles';

const Card = ({imgUrl, title, onPress}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Image
            style={styles.image}
            source={{
              uri: imgUrl,
            }}
          />
        </View>
      </TouchableOpacity>
    </>
  );
};

export default Card;
