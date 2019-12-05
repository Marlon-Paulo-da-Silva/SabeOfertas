import React, { useEffect, useState } from "react";
import api from "../../services/api";

export default function Home() {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    async function loadOffers() {
      const userAddress = localStorage.getItem("userAddress");

      const response = await api.get(`/offers/?city=${userAddress}`);

      console.log(response.data);
      setOffers(response.data);
    }

    loadOffers();
  }, []);
  return (
    <>
      <ul className="offer-list">
        {offers.map(offer => (
          <li key={offer._id}>
            <header />
            <h3>
              <strong>{offer.description}</strong>
            </h3>
            <h4>{offer.companyName}</h4>
            <span>{offer.price}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
