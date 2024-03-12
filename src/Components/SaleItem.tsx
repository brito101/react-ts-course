import React from "react";
import { ISale } from "../Context/DataContext";
import { NavLink } from "react-router-dom";

const SaleItem = ({ sale }: { sale: ISale }) => {
  return (
    <div className="sale box">
      <NavLink to={`/sales/${sale.id}`} style={{ fontFamily: "monospace" }}>
        {sale.id}
      </NavLink>
      <div>{sale.nome}</div>
      <div>
        {sale.preco.toLocaleString("us-en", {
          style: "currency",
          currency: "USD",
        })}
      </div>
    </div>
  );
};

export default SaleItem;
