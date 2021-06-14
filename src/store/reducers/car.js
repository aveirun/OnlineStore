const initialState = {
  cars: [
    {
      id: 0,
      name: 'BMW i8',
      price: 20000,
      img: 'https://s.auto.drom.ru/i24215/c/photos/fullsize/bmw/i8/bmw_i8_772564.jpg',
      quantity: 1,
    },
    {
      id: 1,
      name: 'Audi TT',
      price: 15000,
      img: 'https://hdfon.ru/wp-content/uploads/hdfon.ru-307822776-640x480.jpg',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Bentley Continental GT',
      price: 30000,
      img: 'https://avatars.mds.yandex.net/get-verba/787013/2a000001609d3308213ea15e80fb68e77bfd/cattouchret',
      quantity: 1,
    },
    {
      id: 3,
      name: 'Mercedes AMG GT',
      price: 22000,
      img: 'http://krasnodar.cardana.ru/img/auto/mercedes_benz/amg_gt_coupe/amg_gt_coupe_1b.jpg',
      quantity: 1,
    },
    {
      id: 4,
      name: 'Chevrolet Camaro V',
      price: 18000,
      img: 'https://avatars.mds.yandex.net/get-verba/787013/2a000001609d0534e1fef8968a5de8b69987/cattouch',
      quantity: 1,
    },
    {
      id: 5,
      name: 'Lexus LS',
      price: 10500,
      img: 'https://avatars.mds.yandex.net/get-verba/1540742/2a000001798f7ac5f89bf21cc54c47725015/cattouch',
      quantity: 1,
    },
  ],
};

const car = (state = initialState) => {
  return state;
};

export default car;
