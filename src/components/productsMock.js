export let products = [
/*   {
    title: "EcoBoligráfo",
    price: 121,
    description: "Bolígrafo de cartón ecológicoTrazo fino y de color negro",
    imageUrl: "https://res.cloudinary.com/dmlqg9nvh/image/upload/v1709188377/React%20JS/boligrafos/boligrafo-florida-verde_rqfuub.jpg",
    stock: 12,
    category: "ecologicas",
  },
  {
    title: "Boligráfo Metálico retractil",
    price: 230,
    description: "Bolígrafo retractil con trazo mediano y de color azul",
    imageUrl: "https://res.cloudinary.com/dmlqg9nvh/image/upload/v1709188378/React%20JS/boligrafos/boligrafo-malibu-azul_csqoc3.jpg",
    stock: 5,
    category: "metalicos",
  }, */
  {
    title: "Boligráfo Metalico fijo",
    price: 209,
    description: "Metático de trazo fino y de color negro",
    imageUrl: "https://res.cloudinary.com/dmlqg9nvh/image/upload/v1709188378/React%20JS/boligrafos/boligrafo-tucson-plateado_rzdnfu.jpg",
    stock: 8,
    category: "metalicos",
  },
  {
    title: "EcoBoligráfo retractil",
    price: 130,
    description: "Ecológico de trazo fino, retractil y de color negro",
    imageUrl: "https://res.cloudinary.com/dmlqg9nvh/image/upload/v1709188377/React%20JS/boligrafos/boligrafo-eco-friendly_ajbguq.jpg",
    stock: 15,
    category: "ecologicas",
  },
]

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    } else {
      reject("No hay productos");
    }
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find((product) => product.id === id);

      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject(`No se encuentra el producto con el id ${id}`);
        }
      }, 2000);
    } else {
      reject("No hay productos");
    }
  });
};