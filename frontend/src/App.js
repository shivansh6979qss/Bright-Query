import { useState } from "react";
import Header from "./components/Header";
import "./sass/_main.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DashBoard from "./components/DashBoard";
import Login from "./pages/Login";

function App() {
  const [login, setLogin] = useState(false);

  const token = localStorage.getItem("token");
  return (
    <div className="App">
      {token ? (
        <>
          <Navbar />
          <DashBoard />
          <Footer />
        </>
      ) : (
        <Login setLogin={(x) => setLogin(x)} login={login} />
      )}
    </div>
  );
}

export default App;
