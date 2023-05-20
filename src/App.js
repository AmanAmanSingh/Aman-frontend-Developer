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
import Login from './component/SignIn/signin';
import Signup from './component/SignUp/signup';
import Protected from './component/ProtectedRoutes/protected';


function App() {

  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  const [original_launch_unix, setOriginal_launch_unix] = useState("");
  const [capsuleValue, setCapsuleValue] = useState("");
  const [singleCardData, setSingleCardData] = useState([]);

  return (
    <>
      <SearchContext.Provider
        value={{
          status, setStatus, type, setType, original_launch_unix, setOriginal_launch_unix,
          capsuleValue, setCapsuleValue, singleCardData, setSingleCardData
        }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<>  <Header /> <Banner /> <Search /> <Protected> <Cards /></Protected></>} />
            <Route path='/signin' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='*' element={<center> PAGE NOT FOUND</center>} />
          </Routes>
        </BrowserRouter>
      </SearchContext.Provider>
    </>
  );
}

export default App;
