import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingTop: 10, paddingHorizontal: 15 }}
    >
      {/* Category card */}
      <CategoryCard
        imgUrl="https://images.pexels.com/photos/3023476/pexels-photo-3023476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="test"
      />
      <CategoryCard
        imgUrl="https://images.pexels.com/photos/983297/pexels-photo-983297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="test"
      />
      <CategoryCard
        imgUrl="https://images.pexels.com/photos/3683205/pexels-photo-3683205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="test"
      />
      <CategoryCard
        imgUrl="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="test"
      />
      <CategoryCard
        imgUrl="https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="test"
      />
      <CategoryCard
        imgUrl="https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="test"
      />
      <CategoryCard
        imgUrl="https://images.pexels.com/photos/397913/pexels-photo-397913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="test"
      />
      <Text>Categories</Text>
    </ScrollView>
  );
};

export default Categories;
