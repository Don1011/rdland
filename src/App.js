import React from "react";
import './sass/rd.scss';
import { Routes, Route} from "react-router-dom";
import CustomVerification from "./pages/auth/customVerification";
import Home from "./pages/Home";
import Login from "./pages/auth/login";
import GenRoute from "./pages/genRoute";
import Terms from "./pages/auth/Terms";
import MessagePage from "./pages/successPage";
//DISCORD USERS GET DIRECT LINK
//MAILCHIMP USERS GET SENT DIRECT LINK AFTER A WHILE with their email already typed in
//ALL OTHER USERS GET A POP UP MENU TO TRIGGER THEM TO ADD EMAIL

//after all these they get redirected to a verify age ,terms & conditions

//AGE & Conditions
function App() {
  return (
    <>

        <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route  path='/genRoute' element={<GenRoute/>}/>
          <Route  path='/success' element={<MessagePage/>}/>
          <Route  path='/auth/tokenVerification/:id/:tk' element={<CustomVerification/>}/>
          <Route  path='/auth/terms_conditions' element={<Terms/>}/>
          <Route  path='/login' element={<Login/>}/>
          <Route  path='*' element={<ErrorScreen/>}/>
        </Routes>

    </>
  );
}
function ErrorScreen() {
    return <div>
        <h1>ERROR 404</h1>
    </div>
}

export default App;
