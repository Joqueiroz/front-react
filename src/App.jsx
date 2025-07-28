import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Users from "./pages/Users";
import Todos from "./pages/Todos";
import Footer from "./components/Footer";

function App() {
  const appContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', 
  };

  const mainContentStyle = {
    flexGrow: 1, 
  };

  return (
    <BrowserRouter>
      <div style={appContainerStyle}>
        <div style={mainContentStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/users" element={<Users />} />
            <Route path="/todos" element={<Todos />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;