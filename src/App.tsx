import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { Navbar } from "./shared/Navbar";
import { Footer } from "./shared/Footer";
import Vendors from "./pages/Vendors";
import Affiliate from "./pages/Affiliate";
import Organisers from "./pages/Organisers";
import SignUp from "./pages/Signup";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";

// A Layout component that includes the persistent UI
const MainLayout = () => (
  <>
    <Navbar />
    <Outlet /> {/* This is where the specific page content renders */}
    <Footer />
  </>
);

function App() {
  return (
    <div className="selection:bg-lime selection:text-dark">
      <BrowserRouter>
        <Routes>
          {/* Routes inside here will have the Navbar and Footer */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/vendors" element={<Vendors />} />
            <Route path="/affiliate" element={<Affiliate />} />
            <Route path="/organisers" element={<Organisers />} />
          </Route>

          {/* Example: A route WITHOUT Navbar/Footer would go here, outside MainLayout */}
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/auth/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
