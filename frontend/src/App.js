import './App.css';
import Banner from './component/Banner/banner';
import SingleCard from './component/Cards/Singlecard';
import Cards from './component/Cards/cards';
import Header from './component/Header/header';
import Loader from './component/Loader/loader';
import Search from './component/Search/search';
import 'bootstrap/dist/css/bootstrap.min.css';
import {SearchContext} from './Context/seacrhContext';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState} from 'react';


function App() {

  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  const [original_launch_unix, setOriginal_launch_unix] = useState("");
  const [capsuleValue, setCapsuleValue] = useState("");


  return (
    <>
      <SearchContext.Provider
        value={{
          status, setStatus, type, setType, original_launch_unix, setOriginal_launch_unix,
          capsuleValue, setCapsuleValue
        }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<>  <Header /> <Banner /> <Search /> <Cards /></>} />
          </Routes>
        </BrowserRouter>
      </SearchContext.Provider>
    </>
  );
}

export default App;
