import {useState,useEffect} from 'react'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import cookies from 'js-cookie';
import Login from './Components/login'
import Register from './Components/register'
import './App.css'
import Home from './Components/Home'
import Create from './Components/Create'
import History from './Components/history';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import { getusers,getUsers } from '../Redux/userSlice';
import View from './Components/View';
import Profile from './Components/Profile';

const App = () => {
  axios.defaults.withCredentials = true;
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    const storedToken = cookies.get('token') || localStorage.getItem('token');

    if (storedToken) {
      console.log(storedToken);
      setIsAuthenticated(true);

    }
    const fetchData = async () => {
      const response = await axios.get('http://localhost:5000/', { withCredentials: true });
      const res = await axios.get('http://localhost:5000/user/', { withCredentials: true });
        // console.log(response.data);
      dispatch(getusers(response.data));
      dispatch(getUsers(res.data))
      console.log(res)
  }; 
  fetchData();
  }, []);
 
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/login"
            element={
              isAuthenticated ? <Navigate to="/home" /> : <Login />
            }
          />
          <Route path="/register"
            element={<Register />}
          />
          <Route path="/home"
            element={
              isAuthenticated ? <Home /> : <Navigate to="/login" />
            }
          />
          <Route path="/create"
            element={
              isAuthenticated ? <Create /> : <Navigate to="/login" />
            }
            />
          <Route path="/history"
            element={
              isAuthenticated ? <History/> : <Navigate to="/login" />
            }
          />
          <Route path="/view/:id"
            element={
              isAuthenticated ? <View/> : <Navigate to="/login" />
            }
          />
          <Route path="/profile"
            element={
              isAuthenticated ? <Profile/> : <Navigate to="/login" />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App