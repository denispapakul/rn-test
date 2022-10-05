import React from 'react';
import {TextStyle} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProductList, {IProduct} from '../screens/ProductList';
import Product from '../screens/Product';
import {ThemeFont} from '../components/styled/typography';
import {COLORS} from '../assets/constants/colors';

export type RootStackParamList = {
  ProductList: undefined;
  Product?: IProduct;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const MainNavigation = () => {
  return (
    <RootStack.Navigator
      initialRouteName="ProductList"
      screenOptions={{
        headerShadowVisible: false,
        headerBackTitle: '',
        headerTitleStyle: {
          fontSize: 16,
          ...(ThemeFont.medium as Record<string, TextStyle>),
        },
        contentStyle: {
          backgroundColor: COLORS.middleGray,
        },
      }}>
      <RootStack.Screen
        name="ProductList"
        component={ProductList}
        options={{title: 'Items'}}
      />
      <RootStack.Screen name="Product" component={Product} />
    </RootStack.Navigator>
  );
};

export default MainNavigation;
