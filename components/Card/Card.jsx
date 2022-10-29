import axios from 'axios';
import { useEffect, useState } from 'react';
import { Text } from 'react-native';

import { View, Image } from './Styles';

export default function Card({ card }) {
  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState('');

  const getImageSource = async (details) => {
    const { photo_reference, width, height } = details;
    const url = `https://maps.googleapis.com/maps/api/place/photo?photoreference=${photo_reference}&sensor=false&maxheight=${height}&maxwidth=${width}&key=AIzaSyBSD7JMfPtUP5p8UfRfZaY0nN__0peZ1x8`;
    try {
      const response = await axios.get(url);
      setImageUrl(response.config.url);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getImageSource(card.photos[0]);
  }, [card]);

  return (
    <>
      {!isLoading ? (
        <View key={card.place_id}>
          <Text>{card.name}</Text>
          <Image source={{ uri: imageUrl }} />
        </View>
      ) : (
        <Text>loading</Text>
      )}
    </>
  );
}
