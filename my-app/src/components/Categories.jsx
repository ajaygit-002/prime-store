import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

export default function Categories() {

  const categories = [
    {
      name: "Mobiles",
      img: "https://png.pngtree.com/png-clipart/20240321/original/pngtree-smart-phone-mockup-png-png-image_14640632.png",
      path: "/mobiles"
    },
    {
      name: "Electronics",
      img: "https://www.pngall.com/wp-content/uploads/1/Electronic.png",
      path: "/electronics"
    },
    {
      name: "Fashion",
      img: "https://img.freepik.com/free-photo/portrait-handsome-young-model-man-dressed-jeans-clothes-sunglasses-posing-isolated_158538-9108.jpg?semt=ais_hybrid&w=740&q=80",
      path: "/fashion"
    },
    {
      name: "Monitor",
      img: "https://img.freepik.com/premium-psd/dell-curved-gaming-monitor_1249303-20954.jpg?semt=ais_hybrid&w=740&q=80",
      path: "/monitor"
    },
    {
      name: "Hair Dryer",
      img: "https://aeno.com/blog/wp-content/uploads/2024/12/tgfhj-1.png",
      path: "/hair-dryer"
    },
    {
      name: "Beauty",
      img: "https://img.freepik.com/free-vector/realistic-make-up-brushes-composition_1284-25929.jpg?semt=ais_hybrid&w=740&q=80",
      path: "/beauty"
    },
    {
      name: "Grocery",
      img: "https://png.pngtree.com/png-vector/20240314/ourmid/pngtree-grocery-basket-and-a-list-of-products-png-image_11952487.png",
      path: "/grocery"
    },
    {
      name: "Toys",
      img: "https://static.vecteezy.com/system/resources/thumbnails/045/726/736/small/toy-cars-trucks-and-other-toys-on-a-transparent-background-ai-generated-free-png.png",
      path: "/toys"
    }
  ];

  return (
    <section className="categories-wrapper">
      <h2 className="categories-title">Shop by Category</h2>

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
