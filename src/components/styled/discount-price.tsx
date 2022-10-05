import styled from '@emotion/native';
import {Typography} from './typography';

export const DiscountedPrice = styled(Typography)({
  textDecorationLine: 'line-through',
});

DiscountedPrice.defaultProps = {
  fontSize: 18,
  color: 'black',
};
