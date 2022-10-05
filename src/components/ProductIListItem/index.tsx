import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styled from '@emotion/native';

import {RootStackParamList} from '../../navigation/MainNavigation';
import {Avatar} from '../styled/avatar';
import {Typography} from '../styled/typography';

import {IProduct} from '../../screens/ProductList/index';
import {getImage} from '../../utils/image';
import {COLORS} from '../../assets/constants/colors';

export const ProductListItem: React.FC<{product: IProduct}> = ({product}) => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'ProductList'>
    >();

  return (
    <ProductItemContainer
      onPress={() => navigation.navigate('Product', product)}>
      <Avatar style={styles.image} source={{uri: getImage(product.id)}} />

      <View style={styles.wrapper}>
        <Typography weight="medium">{product.name}</Typography>
        {product.salePrice ? (
          <Typography color={COLORS.red}>
            <Typography style={product.salePrice && styles.discounted}>
              SAR {product.price}
            </Typography>
            {'  '}SAR {product.salePrice}
          </Typography>
        ) : (
          <Typography style={product.salePrice && styles.discounted}>
            SAR {product.price}
          </Typography>
        )}

        <Typography fontSize={14} color={COLORS.gray}>
          Brand: {product.name}
        </Typography>
      </View>
    </ProductItemContainer>
  );
};

const ProductItemContainer = styled.TouchableOpacity({
  paddingTop: 10,
  paddingBottom: 10,
  paddingHorizontal: 25,
  borderBottomColor: 'rgba(0,0, 0, 0.05)',
  borderBottomWidth: 1,
  flexDirection: 'row',
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  image: {
    marginTop: 8,
    marginRight: 16,
  },
  discounted: {
    textDecorationLine: 'line-through',
  },
});
