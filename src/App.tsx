import React from "react";
import Button from "./Button";
import Input from "./Input";
function App() {
  const [total, setTotal] = React.useState(0);

  function increment() {
    setTotal((total) => total + 1);
  }

  return (
    <div>
      <p>Total: {total}</p>
      <Button size="1.25 rem" onClick={increment}>
        Increment
      </Button>
      <Input label="Nome" name="name" id="name" />
      <Input label="E-mail" name="email" type="email" id="email" />
      <Input label="Password" name="password" type="password" id="password" />
      <Button type="submit">Send</Button>
    </div>
  );
}

export default App;
