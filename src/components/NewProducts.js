import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
  {
    img: "/pulsera_silicona.jpg",
    title: "Pulsera QR",
    desc: "Pulsera de Silicona con Código QR",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/collar.jpeg",
    title: "Collar",
    desc: "Collar con QR integrado",
    rating: 5,
    price: "55.00",
  },
  {
    img: "/anillo.jpg",
    title: "Anillo",
    desc: "Anillo inteligente para monitoreo de salud",
    rating: 3,
    price: "25.00",
  },
  {
    img: "/reloj.jpg",
    title: "Reloj",
    desc: "Reloj inteligente con múltiples funciones",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/gas_pimienta.jpg",
    title: "Sports",
    desc: "Spray de Gas Pimienta",
    rating: 3,
    price: "58.00",
  },
  {
    img: "/gps.jpg",
    title: "Pulsera con GPS",
    desc: "Pulsera con GPS integrado",
    rating: 4,
    price: "100.00",
  },
  {
    img: "/llavero_mano.jpg",
    title: "Llavero alarma",
    desc: "Llavero de Alarma de mano Personal",
    rating: 4,
    price: "120.00",
  },
];

const NewProducts = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">Nuestros productos</h2>

        <div className="grid gridl-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productsData.map((item, index) => {
            return (
              <ProductCard
                key={index}
                img={item.img}
                title={item.title}
                desc={item.desc}
                rating={item.rating}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
