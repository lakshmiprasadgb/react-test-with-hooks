import { Routes, Route } from 'react-router-dom';
import './App.css';
import AddPost from './components/Posts/AddPost';
import Contact from './components/contact';
import Header from './components/Header';
import Post from './components/Posts/post';
import { PostStoreProvider } from './store/postStore';

function App() {
  return (
    <PostStoreProvider>
    <div className="App">
      <Header/>
      <Routes>
        <Route path = "/" element = {<Post/>}/>
      </Routes>
      <Routes>
        <Route path = "/add-post" element = {<AddPost/>}/>
      </Routes>
      <Routes>
        <Route path = "/contact" element = {<Contact/>}/>
      </Routes>
    </div>
    </PostStoreProvider>
  );
}

export default App;
