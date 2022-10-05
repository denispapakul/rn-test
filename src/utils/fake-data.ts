import {faker} from '@faker-js/faker';
import {IProduct} from '../screens/ProductList';

const list_data: IProduct[] = [];

for (let index = 0; index < 1500; index++) {
  const price = faker.commerce.price();
  const priceInt = parseFloat(faker.commerce.price());

  list_data.push({
    id: index.toString(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: price,
    salePrice: faker.helpers.maybe(
      () => faker.commerce.price(priceInt * 0.5, priceInt * 0.9),
      {probability: 0.1},
    ),
    brand: faker.company.name(),
  });
}

export default list_data;
