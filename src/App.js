import "./App.css";
import Home from "./components/screens/Home";
import Footer from "./components/widgets/Footer";
import Header from "./components/widgets/Header";

function App() {
  return (
    <div style={{ margin: 0 }}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
