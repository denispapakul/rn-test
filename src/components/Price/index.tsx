import React from 'react';

import {DiscountedPrice} from '../styled/discount-price';
import {Typography} from '../styled/typography';

import {COLORS} from '../../assets/constants/colors';
import {IProduct} from '../../screens/ProductList';

interface IPrice {
  price: IProduct['price'];
  salePrice?: IProduct['salePrice'];
}

export const Price: React.FC<IPrice> = ({price, salePrice}) => {
  return salePrice ? (
    <Typography fontSize={18} color={COLORS.red}>
      <DiscountedPrice>{`SAR ${price}`}</DiscountedPrice>
      {`   SAR ${salePrice}`}
    </Typography>
  ) : (
    <Typography fontSize={18}>{`SAR ${price}`}</Typography>
  );
};
