import React from 'react';
import {Alert} from 'react-native';
import styled from '@emotion/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Container} from './container';
import {CartQuantity} from './cart-quantity';
import {Typography} from './typography';

import {COLORS} from '../../assets/constants/colors';

interface ICart {
  quantity: number;
  update: (value: number) => number | undefined;
}

export const Cart: React.FC<ICart> = ({quantity, update}) => {
  const insets = useSafeAreaInsets();

  return (
    <CartContainer style={{paddingBottom: Math.max(insets.bottom, 20)}}>
      <>
        <CartQuantity quantity={quantity} update={update} />

        <BuyButton
          onPress={() => Alert.alert('WiP button')}
          underlayColor={COLORS.white}>
          <Typography color={COLORS.white}>Buy Now</Typography>
        </BuyButton>
      </>
    </CartContainer>
  );
};

const CartContainer = styled(Container)({
  backgroundColor: COLORS.white,
  flexDirection: 'row',
  borderTopLeftRadius: 16,
  paddingTop: 16,
  borderTopRightRadius: 16,
});

const BuyButton = styled.TouchableHighlight({
  backgroundColor: COLORS.lightViolet,
  paddingVertical: 12,
  paddingHorizontal: 24,
  borderRadius: 26,
  maxHeight: 51,
  flex: 2,
  alignItems: 'center',
});
