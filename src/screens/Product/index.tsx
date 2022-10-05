import React, {useLayoutEffect, useState} from 'react';
import {ScrollView, useWindowDimensions} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styled from '@emotion/native';

import {Container} from '../../components/styled/container';
import {Typography} from '../../components/styled/typography';
import {DetailsTitle} from '../../components/styled/details-title';
import {DetailsLine} from '../../components/styled/details-line';
import {Cart} from '../../components/styled/cart';
import {Price} from '../../components/Price';

import {faker} from '@faker-js/faker';
import {RootStackParamList} from '../../navigation/MainNavigation';
import {getImage} from '../../utils/image';

// @TODO: mocked values
const SPEC_1 = faker.color.human();
const SPEC_2 = faker.vehicle.vin();
const SPEC_3 = faker.commerce.product();
const SPEC_4 = faker.datatype.float({min: 0.1, max: 10, precision: 0.1});

const Product: React.FC = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'ProductList'>
    >();
  const {params: product} =
    useRoute<RouteProp<RootStackParamList, 'Product'>>();

  const [quantity, setQuantity] = useState<number>(5);

  const {width} = useWindowDimensions();
  const onSetQuantity = (value: number) => {
    if (value < 0) {
      return quantity;
    } else {
      setQuantity(value);
    }
  };

  useLayoutEffect(() => {
    if (product?.name) {
      navigation.setOptions({
        title: product.name,
      });
    }
  }, [navigation, product?.name]);

  if (!product) {
    return <Typography>Loading ...</Typography>;
  }

  const {name, price, salePrice, id, brand, description} = product;

  return (
    <>
      <ScrollView>
        <Container style={{height: width}}>
          <ItemImage source={{uri: getImage(id, width)}} />
        </Container>

        <Container>
          <Typography fontSize={18} weight="semiBold">
            {name}
          </Typography>
          <Price salePrice={salePrice} price={price} />
        </Container>

        <Container>
          <Typography>{description}</Typography>
        </Container>

        <Container>
          <DetailsTitle>Details</DetailsTitle>
          <DetailsLine label="Brand">{brand}</DetailsLine>
          <DetailsLine label="Color">{SPEC_1}</DetailsLine>
          <DetailsLine label="SKU" weight="medium">
            {SPEC_2}
          </DetailsLine>
        </Container>
        <Container>
          <Typography weight="medium">Specifications</Typography>
          <DetailsLine label="Type">{SPEC_3}</DetailsLine>
          <DetailsLine label="Weight">{SPEC_4 + 'kg'}</DetailsLine>
        </Container>
      </ScrollView>

      <Cart quantity={quantity} update={onSetQuantity} />
    </>
  );
};

const ItemImage = styled.Image<{size?: number}>({
  flex: 1,
  marginVertical: 16,
  borderRadius: 9,
});

export default Product;
