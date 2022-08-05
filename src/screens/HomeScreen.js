import {
  StyleSheet,
  Text,
  View,
  StatusBar as rnStatusBar,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  ChevronDownIcon,
  UserIcon,
  SearchIcon,
  AdjustmentsIcon,
} from 'react-native-heroicons/outline';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/4109078/pexels-photo-4109078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          className="h-7 w-7 bg-grey-300 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search Box */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <SearchIcon size={20} color="gray" />
          <TextInput
            placeholder="Restaurant and Cuisinies"
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon color="#00CCBB" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
