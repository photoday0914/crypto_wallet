// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmptyPage from "./pages/Empty";
import Landing from "./pages/Landing";
import MainPage from "./pages/MainPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Landing />} />
                <Route path="*" element={<EmptyPage />} />
                <Route path="/mainpage" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
