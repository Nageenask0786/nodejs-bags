const express = require('express');

const port = process.env.PORT || 3007;

const app = express();
const data = [
    {
      "id": 1,
      "title": "The Metro Movers Black",
      "price": 4899,
      "image_url": "https://res.cloudinary.com/dchxbofyt/image/upload/v1713078536/SIPR04031_01_1_2_s0ydib.png",
      "discount": 50
    },
    {
      "id": 2,
      "title": "The Metro Movers Black",
      "price": 4500,
      "image_url": "https://res.cloudinary.com/dchxbofyt/image/upload/v1713078437/SIPR04085_01_1_1_lr88cj.png",
      "discount": 50
    },
    {
      "id": 3,
      "title": "The Brown Metro Movers",
      "price": 4899,
      "image_url": "https://res.cloudinary.com/dchxbofyt/image/upload/v1713078483/SIPR04018_01_1_cjcrqq.png",
      "discount": 50
    },
    {
      "id": 4,
      "title": "The Black Metro Movers",
      "price": 4899,
      "image_url": "https://res.cloudinary.com/dchxbofyt/image/upload/v1713078401/SIPR04086_01_1_altmcq.png",
      "discount": 50
    },
    {
      "id": 5,
      "title": "The Metro Movers Black",
      "price": 4899,
      "image_url": "https://res.cloudinary.com/dchxbofyt/image/upload/v1713078536/SIPR04031_01_1_2_s0ydib.png",
      "discount": 50
    },
    {
      "id": 6,
      "title": "The Metro Movers Black",
      "price": 4500,
      "image_url": "https://res.cloudinary.com/dchxbofyt/image/upload/v1713078437/SIPR04085_01_1_1_lr88cj.png",
      "discount": 50
    },
    {
      "id": 7,
      "title": "The Brown Metro Movers",
      "price": 4899,
      "image_url": "https://res.cloudinary.com/dchxbofyt/image/upload/v1713078483/SIPR04018_01_1_cjcrqq.png",
      "discount": 50
    },
    {
      "id": 8,
      "title": "The Black Metro Movers",
      "price": 4899,
      "image_url": "https://res.cloudinary.com/dchxbofyt/image/upload/v1713078401/SIPR04086_01_1_altmcq.png",
      "discount": 50
    }
  ]

app.get('/bags', (req, res) => {
  res.send(data);
});

app.listen(3007, () => {
  console.log(`Server listening at port ${port}`);
});