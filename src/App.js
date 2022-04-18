import Home from './Component/Home/Home';
import Customers from "./Component/Customers/Customers";
import ContactUS from "./Component/ContactUs/ContactUs";
import AboutUs from "./Component/AboutUs/AboutUs";
import Security from "./Component/Security/Security";
import Error from './Component/Error/Error';
import {Routes, Route} from "react-router-dom";
import './App.css';

const App = ()=> {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customer" element={<Customers />} />
          <Route path="/contactus" element={<ContactUS />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/security" element={<Security />} />
          <Route path="*" element={<Error />}/>
        </Routes>
      </div>
  );
}

export default App;
