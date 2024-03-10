import React from "react";
import { ISale } from "../Context/DataContext";

const SaleItem = ({ sale }: { sale: ISale }) => {
  return (
    <div className="sale box">
      <a href="" style={{ fontFamily: "monospace" }}>
        {sale.id}
      </a>
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
