import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      <Product />
    </div>
  );
}

export default App;
