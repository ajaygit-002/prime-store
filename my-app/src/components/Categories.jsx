import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

export default function Categories() {

  const categories = [
    {
      name: "Mobiles",
      img: "https://static.vecteezy.com/system/resources/previews/055/244/323/non_2x/stylish-aviator-sunglasses-with-orange-mirrored-lenses-metal-frame-free-png.png",
      path: "/mobiles"
    },
    {
      name: "Laptops",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3l1x_9pS2MAxF1Kt0n5BGN9Cb9EbW3QS7LA&s"
    },
    {
      name: "Fashion",
      img: "https://png.pngtree.com/png-vector/20240914/ourmid/pngtree-fashionable-men-and-women-shopping-together-png-image_12898365.png"
    },
    {
      name: "sofa ",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR38GBeXXziQsbDdm9zBD-EkxJFtC7KcEMG4g&s"
    },
    {
      name: "washing machine",
      img: "https://png.pngtree.com/png-vector/20250106/ourmid/pngtree-laundry-washing-machine-set-isolated-on-transparent-background-png-image_15086053.png"
    },
    {
      name: "fridge",
      img: "https://png.pngtree.com/png-clipart/20241124/original/pngtree-stocked-fridge-png-image_17288166.png"
    },
    {
      name: "bed",
      img: "https://png.pngtree.com/png-vector/20241226/ourmid/pngtree-luxury-comfort-3d-upholstered-queen-bed-with-stylish-headboard-png-image_14907799.png"
    },
    {
      name: "dining table",
      img: "https://static.vecteezy.com/system/resources/previews/049/329/192/non_2x/dining-table-and-chairs-full-of-foods-transparent-background-png.png"
    },
    {
      name: "Sports",
      img: "https://img.freepik.com/premium-photo/sporting-essentials-diverse-gear-white-png-transparent-background_94628-26847.jpg?w=360"
    },
    {
      name: "Books",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZJruXlGCz1VG3JdWyhdv0O0YNv7HE_z3meg&s"
    }
  ];

  return (
    <section className="categories-wrapper">
      <h2 className="title">Shop by Category</h2>

      <div className="categories-grid">
        {categories.map((item) => {
          const content = (
            <>
              <img
                src={item.img}
                alt={item.name}
                className="cat-img"
              />
              <p>{item.name}</p>
            </>
          );

          return item.path ? (
            <Link key={item.name} to={item.path} className="cat-link cat-card">
              {content}
            </Link>
          ) : (
            <div key={item.name} className="cat-card">
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}
