import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
  <Navbar title="TextUtils App" about="About App"/>
  <div className="container">
  <TextForm heading="Enter Your Text Here To Analyze"/>
  </div>
    </>
  );
}

export default App;
