import { Routes, Route } from 'react-router-dom';
import './App.css';
import AddPost from './components/Posts/AddPost';
import Contact from './components/contact';
import Header from './components/Header';
import Post from './components/Posts/post';
import { PostStoreProvider } from './store/postStore';
import { Provider } from 'react-redux';
import { store } from './store/postStore-redux';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header/>
      <Routes>
        <Route path = "/" element = {<Post/>}/>
        <Route path = "/add-post" element = {<AddPost/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
      </Routes>
    </div>
    </Provider>
  );
}

export default App;
