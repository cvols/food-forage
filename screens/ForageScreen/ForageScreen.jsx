import { useCallback } from 'react';
import Swiper from 'react-native-deck-swiper';
import { Card } from '../../components';

import { restaurants } from '../../data/getRestaurants';
import { SafeAreaView, View } from './Styles';

export default function ForageScreen() {
  const RenderCard = useCallback((card) => <Card card={card} />, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, marginTop: -6 }}>
        <Swiper
          containerStyle={{ backgroundColor: 'transparent' }}
          cards={restaurants.results}
          renderCard={RenderCard}
          verticalSwipe={false}
          onSwiped={(cardIndex) => {
            console.log({ cardIndex });
          }}
          // stackSize={3}
        />
      </View>
    </SafeAreaView>
  );
}
