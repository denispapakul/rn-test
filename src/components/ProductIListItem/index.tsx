import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styled from '@emotion/native';

import {RootStackParamList} from '../../navigation/MainNavigation';
import {Avatar} from '../styled/avatar';
import {Typography} from '../styled/typography';
import {Price} from '../Price';

import {IProduct} from '../../screens/ProductList/index';
import {getImage} from '../../utils/image';
import {COLORS} from '../../assets/constants/colors';

export const ProductListItem: React.FC<{product: IProduct}> = ({product}) => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'ProductList'>
    >();
  const {id, price, name, salePrice} = product;
  return (
    <ProductItemContainer
      onPress={() => navigation.navigate('Product', product)}>
      <AvatarProduct source={{uri: getImage(id)}} />

      <ProductWrapper>
        <Typography weight="medium">{name}</Typography>

        <Price salePrice={salePrice} price={price} />

        <Typography fontSize={14} color={COLORS.gray}>
          Brand: {name}
        </Typography>
      </ProductWrapper>
    </ProductItemContainer>
  );
};

const ProductItemContainer = styled.TouchableOpacity({
  paddingTop: 10,
  paddingBottom: 10,
  paddingHorizontal: 25,
  borderBottomColor: COLORS.transparentBlack,
  borderBottomWidth: 1,
  flexDirection: 'row',
});

const ProductWrapper = styled.View({
  flex: 1,
});

const AvatarProduct = styled(Avatar)({
  marginTop: 8,
  marginRight: 16,
});
