import React from 'react';
import {FlatList} from 'react-native';

import ListData from '../../utils/fake-data';
import {ProductListItem} from '../../components/ProductIListItem';

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  salePrice?: string;
  brand: string;
}

const ListScreen = () => (
  <FlatList
    data={ListData as IProduct[]}
    keyExtractor={item => item.id}
    renderItem={({item}) => <ProductListItem product={item} />}
    initialNumToRender={20}
    maxToRenderPerBatch={20}
  />
);

export default ListScreen;
