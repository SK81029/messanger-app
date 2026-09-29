import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SideBar from "./Components/SideBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CreatePost from "./Components/PostSection";
import PostList from "./Components/PostList";
import PostListProvider from "./Store/PostLst-Store";
import { useState } from "react";
import Login from "./Components/Lodin";

function App() {
  const [slectedTab, setSlectedTab] = useState("Home");

  const [islogIn, setLogIn] = useState(false);

  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar
          slectedTab={slectedTab}
          setSlectedTab={setSlectedTab}
          islogIn={islogIn}
        />

        <div className="header-footer">
          <Header
            islogIn={islogIn}
            setLogIn={setLogIn}
            setSlectedTab={setSlectedTab}
          />
          <div className="contentArea">
          {slectedTab === "Home" ? (
            <PostList />
          ) : slectedTab === "Login" ? (
            <Login setLogIn={setLogIn} setSlectedTab={setSlectedTab} />
          ) : (
            <CreatePost />
          )}
          </div>
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
