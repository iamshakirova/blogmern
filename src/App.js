import './index.scss';
import {Header, Footer, Post, Profile, Sidebar} from './components';
import {Routes, Route} from "react-router-dom"
import {Login, Register, Homepage, AddPost, SinglePost} from './Pages'
import ByTags from './Pages/ByTags';
import { useSelector, useDispatch } from 'react-redux';
import { useGetProfileQuery } from './services/authApi';
import { useEffect } from 'react';
import { getProfile } from './redux/slices/authSlice';

function App() {
  const dispatch = useDispatch();

	const storedAuthData = localStorage.getItem('token');
	const userId = localStorage.getItem('current_user_id');
	const profile = useGetProfileQuery(userId);
	const { data } = profile;

    console.log(profile);


	useEffect(() => {
    if (storedAuthData) {
        dispatch(getProfile({ isLoggedIn: true, data }))
    }
    // if (profile.error) {
    //     console.error("Error fetching user profile:", profile.error);
    // }
    // if (data) {
    //     console.log(data);
    // }
  }, [dispatch, profile, storedAuthData, data]);



  return (
   <div className='App'>
    <Header/>
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/profile/:id' element={<Profile/>}/>
        <Route path='/posts/:id' element={<SinglePost/>}/>
        <Route path='/add-post' element={<AddPost/>}/>
        <Route path='/posts/:id/edit' element={<AddPost/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/tags' element={<ByTags/>}/>
    </Routes>
    <Footer/>
   </div>
  );
}

export default App;
