import "./App.css";
import { useStateValue } from "./components/contextReact/StateProvider";
import Feed from "./components/Layout/Feed";
import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";
import Widgets from "./components/Layout/Widgets";
import Login from "./components/Pages/Login";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
