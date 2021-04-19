// import HeaderItem from "./components/HeaderItem";
import Expenses from "./components-maximilian/Expenses";

function App() {
  // return (
  //   <div className="App">
  //     <HeaderItem
  //       item="car"
  //       amount="12000"
  //       date="12-02-2000"
  //       title="expense Car"
  //     />
  //   </div>
  // );
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div className="App">
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
