import React from "react";
import Input from "./Input";

type Sales = {
  id: string;
  nome: string;
  preco: number;
  status: string;
};

function App() {
  const [start, setStart] = React.useState("");
  const [end, setEnd] = React.useState("");
  const [data, setData] = React.useState<null | Sales[]>(null);

  React.useEffect(() => {
    if (start !== "" && end !== "") {
      fetch(`https://data.origamid.dev/vendas/?inicio=${start}&final=${end}`)
        .then((r) => r.json())
        .then((json) => setData(json as Sales[]))
        .catch((error) => console.log(error));
    }
  }, [start, end]);

  return (
    <div>
      <div>
        <Input label="Start" type="date" setState={setStart} value={start} />
        <Input label="End" type="date" setState={setEnd} value={end} />
      </div>
      <ul>
        {data !== null &&
          data.map((sale) => (
            <li key={sale.id}>
              {sale.nome}: {sale.status}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
