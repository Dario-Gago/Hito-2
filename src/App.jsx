import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <RegisterPage />
      {/* <LoginPage /> */}
      <Footer />
    </div>
  );
};
export default App;
