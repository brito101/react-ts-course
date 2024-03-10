import React from "react";
import { useData } from "../Context/DataContext";

const Resume = () => {
  const { data } = useData();

  if (data === null) return null;
  return (
    <section>
      <div className="resume flex mb">
        <div className="box">
          <h2>Sales</h2>
          <span>
            {data
              .filter((i) => i.status !== "falha")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "USD" })}
          </span>
        </div>
        <div className="box">
          <h2>Received</h2>
          <span>
            {data
              .filter((i) => i.status === "pago")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "USD" })}
          </span>
        </div>
        <div className="box">
          <h2>Processing</h2>
          <span>
            {data
              .filter((i) => i.status === "processando")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </span>
        </div>
      </div>
      <div className="box mb">Charts</div>
    </section>
  );
};

export default Resume;
