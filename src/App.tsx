import React from "react";
import useFetch from "./useFetch";

type Product = {
  id: string;
  nome: string;
  descricao: string;
  quantidade: number;
  preco: number;
  internacional: boolean;
};

const PRODUCTS_URL = "https://data.origamid.dev/produtos";

function App() {
  const [id, setId] = React.useState("p001");
  const product = useFetch<Product>(`${PRODUCTS_URL}/${id}/`);
  const products = useFetch<Product[]>(PRODUCTS_URL);

  return (
    <section className="flex">
      <div>
        {products.data &&
          products.data.map((product) => (
            <button
              style={{ fontSize: "1rem" }}
              key={product.id}
              onClick={() => setId(product.id)}
            >
              {product.id}
            </button>
          ))}
      </div>
      <div>
        {product.loading && <div>Loading...</div>}
        {product.data && (
          <ul>
            <li>ID: {product.data.id}</li>
            <li>Name: {product.data.nome}</li>
            <li>Quantity: {product.data.quantidade}</li>
            <li>Description: {product.data.descricao}</li>
            {product.data.internacional ? <li>Origin: International</li> : ""}
          </ul>
        )}
      </div>
    </section>
  );
}

export default App;
