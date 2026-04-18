import Price from "./Price";
import "./Product.css";

export default function Product({ title, description, idx }) {
  let oldPrice = ["$100", "$200", "$300", "$400"];
  let newPrice = ["$80", "$150", "$250", "$350"];
  let descriptionArr = [
    "Logitech Keyboard is a high-quality keyboard that offers a comfortable typing experience and durable build quality.",
    "Razer Mouse is a high-performance gaming mouse that offers precision tracking, customizable buttons, and a comfortable design for gamers.",
    "Samsung Monitor is a high-quality display that offers vibrant colors, sharp images, and a sleek design for both work and entertainment.",
    "Apple MacBook is a premium laptop that offers powerful performance, a sleek design, and a user-friendly interface for professionals and creatives.",
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{descriptionArr[idx]}</p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
      
    </div>
  );
}
