import React from "react";

const tyres = [
  {
    id: 1,
    brand: "Michelin",
    model: "Pilot Road 5",
    size: "120/70 ZR17 (Front) + 180/55 ZR17 (Rear)",
    price: "£199.99 (pair)",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    brand: "Pirelli",
    model: "Diablo Rosso III",
    size: "120/70 ZR17 + 190/50 ZR17",
    price: "£189.99 (pair)",
    image: "https://via.placeholder.com/150"
  }
];

export default function MotorcycleTyresPage() {
  return (
    <div className="page">
      <header>
        <h1>Motorcycle Tyres</h1>
        <p>Use discount code <strong>BIKEPAIR10</strong> for 10% off tyre pairs!</p>
      </header>
      <div className="tyre-grid">
        {tyres.map((tyre) => (
          <div className="tyre-card" key={tyre.id}>
            <img src={tyre.image} alt={tyre.model} />
            <h3>{tyre.brand} — {tyre.model}</h3>
            <p>{tyre.size}</p>
            <p className="price">{tyre.price}</p>
            <button>Add to Basket</button>
          </div>
        ))}
      </div>
    </div>
  );
}