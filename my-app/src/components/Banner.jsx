import React from "react";
import "./Banner.css";

export default function Banner() {

  const categories = [
    { name: "Mobiles", img: "https://www.pngall.com/wp-content/uploads/15/Android-Phone-PNG-File.png" },
    { name: "Electronics", img: "https://www.pngall.com/wp-content/uploads/1/Electronic.png" },
    { name: "Fashion", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0CES_vPeCIzPE29JGDU2S8wun-iXnJwQUTA&s" },
    { name: "Monitor", img: "https://static.vecteezy.com/system/resources/thumbnails/009/887/131/small/computer-monitor-free-png.png" },
    { name: "hair dryer", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCAWBp1WoAozSo4rC_ZE4yCiK58oLiA4ll3A&s" },
    { name: "Beauty", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-KoKUlYaX0iu65a-fA3IDZboyH0YKJCWgA&s" },
    { name: "Grocery", img: "https://png.pngtree.com/png-clipart/20240428/original/pngtree-grocery-basket-and-a-list-of-products-png-image_14956705.png" },
    { name: "Toys", img: "https://png.pngtree.com/png-vector/20240423/ourmid/pngtree-3d-photo-of-colorful-toys-for-children-on-transparent-background-png-image_12306318.png" }
  ];

  return (
    <section className="banner-wrapper">

      {/* HERO SLIDER */}
      <div className="hero">
        <h1>Big Billion Days Sale</h1>
        <p>Up to 70% OFF on all products</p>
        <button>Shop Now</button>
      </div>

      {/* CATEGORY GRID */}
      <div className="categories">
        {categories.map((cat, index) => (
          <div key={index} className="cat-card">
            <img src={cat.img} alt={cat.name} />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>

    </section>
  );
}
