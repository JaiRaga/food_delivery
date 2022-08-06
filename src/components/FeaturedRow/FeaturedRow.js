import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from '../RestaurantCard';

const FeaturedRow = ({ id, title, description, featuredCategory }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="pt-4"
      >
        {/* Restaurant Cards */}
        <RestaurantCard
          id="123"
          imgUrl="https://images.pexels.com/photos/3683205/pexels-photo-3683205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Hey, Sushi!!"
          rating={4.6}
          genre="Japanese"
          address="123, main st"
          short_description="This is a test description"
          dishes={[]}
          long={29.99}
          lat={45.5455}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
