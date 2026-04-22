import HomePage from "./pages/HomePage"
import LoginForm from "./pages/LoginForm";
import RegisterEvent from "./pages/RegisterEvent";
import Footer from "./components/Footer";

function App() {

  return (
    <>
    <div className=" grid max-w-7xl mx-auto contain-content gap-4 ">
      <HomePage/>
      <RegisterEvent/>
      <LoginForm />
      <Footer/>
    </div>
      

    </>

  );


}

export default App;
