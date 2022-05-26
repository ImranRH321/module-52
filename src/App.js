import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./componets/Home/Home.jsx";
import Friends from "./componets/Friends/Friends.jsx";
import About from "./componets/About/About.jsx";
import NotFound from "./componets/NotFound/NotFound.jsx";
import Header from "./componets/Header/Header.jsx";
import FriendDetail from "./componets/FriendDetail/FriendDetail";
import Posts from "./componets/Posts/Posts";
import PostDetail from "./componets/PostDetail/PostDetail";
import Countires from "./componets/Countries/Countires";

function App() {
  return (
    <div className="App">
      <h3>This is For Routing....</h3>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/friends" element={<Friends />}>
          Friends
        </Route>
        <Route path="/friend/:friendId" element={<FriendDetail />}></Route>

        <Route path="/posts" element={<Posts/>}>
          <Route path=":postId" element={<PostDetail/>}></Route>
        </Route>
   
         <Route path="countries" element={<Countires/>}>  </Route>
        <Route path="/about" element={<About />}>
          About
        </Route>
        <Route path="*" element={<NotFound/>}>
          NotFound
        </Route>
      </Routes>
    </div>
  );
}

export default App;
