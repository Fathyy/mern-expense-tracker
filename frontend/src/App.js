import { useState } from "react";
import { Dashboard, Expense, Footer, Income, Navbar, Sidebar } from "./components";
import './App.css'
function App() {
  const [active, setActive] = useState(1);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Income />;
      case 3:
        return <Expense />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="container">
    <div className="menu">
      <Sidebar setActive={setActive} active={active}/>
    </div>

    <div className="content">
      <Navbar />
      {displayData()}
      <Footer />
    </div>
  </div>
  )
}

export default App;
