import { Routes, Route } from 'react-router-dom';
import './App.css';
import AddPost from './components/AddPost';
import Contact from './components/contact';
import Header from './components/Header';
import Post from './components/post';

function App() {
  return (
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
  );
}

export default App;
