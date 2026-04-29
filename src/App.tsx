import HomePagePraktek from "./pages/HomaPagePraktek";
import Competition from "./pages/Competition";
import Seminar from "./pages/Seminar";
import Workshop from "./pages/Workshop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Talkshow from "./pages/Talkshow";
import AuthLayout from "./components/layouts/AuthLayout";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterEvent";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
         <Route path="/"element={<HomePagePraktek/>}/>
         <Route path="/competition" element={<Competition/>}/>
         <Route path="/seminar" element={<Seminar/>}/>
         <Route path="/workshop" element={<Workshop/>}/>
         <Route path="/talkshow" element={<Talkshow/>}/>
        </Route>

        <Route element={<AuthLayout/>}>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/register" element={<RegisterForm/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );


}

export default App;
