import faker from 'faker';

const cities = [
  'Kyiv',
  'Odesa',
  'Poltava',
  'Kharkiv',
  'Dnipro',
  'Lviv',
  'Kherson',
  'Mariupol',
];

console.log(
  new Array(20).fill(null).map(() => ({
    id: faker.random.uuid(),
    imgUrl: 'https://via.placeholder.com/640/480',
    title: faker.lorem.sentence(),
    descr: faker.lorem.paragraph(),
    price: faker.random.number({
      min: 500,
      max: 4000,
    }),
    location: {
      city: faker.random.arrayElement(cities),
    },
    owner: {
      name: faker.name.firstName(),
      phone: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
    },
  })),
);
