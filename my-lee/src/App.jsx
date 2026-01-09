import './App.css'
import Home from './Component/Home'
import SignIn from './Component/SignIn'
import SignUp from './Component/SignUp'
import ForgotPassword from './Component/ForgotPassword'
import ResetPassword from './Component/ResetPassword'
import Profile from './Component/Profile'
import ProfileHome from './Component/ProfileHome'
import HomeNew from './Component/HomeNew'
import Checkout from './Component/Checkout'
import Payment from './Component/Payment'
import Confirm from './Component/confirm'
import Orders from './Component/Orders'
import Shopping from './Component/Shopping'
import Audio from './Product/Audio'
import Computer from './Product/Computer'
import Camera from './Product/Camera'
import Gaming from './Product/Gaming'
import Phone from './Product/Phone'
import Tablet from './Product/Tablet'
import Wearable from './Product/Wearable'
import Review from './Component/Review'
import { Routes,Route } from "react-router-dom"
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeNew />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/review" element={<Review />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/audio" element={<Audio />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/payment" element={<Payment />} />
       <Route path="/checkout" element={<Checkout />} />
      <Route path="/profilehome" element={<ProfileHome />} />
      <Route path="/cart" element={<Shopping />} />
      <Route path="/confirm" element={<Confirm />} />
      <Route path="/computer" element={<Computer />} />
      <Route path="/phone" element={<Phone />} />
      <Route path="/wearable" element={<Wearable />} />
      <Route path="/camera" element={<Camera />} />
      <Route path="/tablet" element={<Tablet />} />
      <Route path="/gaming" element={<Gaming />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  );
}

export default App;
