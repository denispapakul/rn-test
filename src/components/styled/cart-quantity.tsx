import React from 'react';
import styled from '@emotion/native';

import {Typography} from './typography';
import {COLORS} from '../../assets/constants/colors';

interface ICartQuantity {
  quantity: number;
  update: (value: number) => number | undefined;
}

export const CartQuantity: React.FC<ICartQuantity> = ({quantity, update}) => (
  <QuantityContainer>
    <>
      <QuantityButton
        onPress={() => update(quantity + 1)}
        underlayColor={COLORS.lightBlue}>
        <Typography color={COLORS.violet}>+</Typography>
      </QuantityButton>

      <QuantityTypography>{quantity}</QuantityTypography>

      <QuantityButton
        onPress={() => update(quantity - 1)}
        underlayColor={COLORS.lightBlue}>
        <Typography color={COLORS.violet}>-</Typography>
      </QuantityButton>
    </>
  </QuantityContainer>
);

const QuantityButton = styled.TouchableHighlight({
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 20,
  width: 40,
  height: 40,
});

const QuantityContainer = styled.TouchableHighlight({
  borderWidth: 1,
  borderColor: COLORS.lightBlue,
  marginRight: 10,
  flex: 4,
  paddingVertical: 0,
  paddingHorizontal: 5,
  borderRadius: 26,
  maxHeight: 51,
  alignItems: 'center',
  flexDirection: 'row',
});

const QuantityTypography = styled(Typography)({
  textAlign: 'center',
  flex: 1,
});
