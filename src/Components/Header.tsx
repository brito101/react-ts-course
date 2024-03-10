import React from "react";
import DateRange from "./DateRange";
import Months from "./Months";

const Header = () => {
  const [title, setTitle] = React.useState("Resume");

  return (
    <header className="mb">
      <div className="dateRange mb">
        <DateRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <Months />
    </header>
  );
};

export default Header;
