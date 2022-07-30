import "./App.css";
import Navbar from "./Navbar";
import Posts from "./pages/Posts";
import Projects from "./pages/Projects";
import Home from "./pages/Etc";
import Footer from "./Footer";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import ConnectGithubSshPage from "./pages/ConnectGithubSshPage";
import CreateRockylinuxDockerPage from "./pages/CreateRockylinuxDockerPage";
import MakeGithubPagePage from "./pages/MakeGithubPagePage";
import GenerateKeypair from "./pages/GenerateKeypair";
import InstallNodejsAndNpm from "./pages/InstallNodejsAndNpm";
import MakeGithubRepository from "./pages/MakeGithubRepository";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/" element={<Posts/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/ConnectGithubSshPage" element={<ConnectGithubSshPage/>}/>
                <Route path="/CreateRockylinuxDockerPage" element={<CreateRockylinuxDockerPage/>}/>
                <Route path="/MakeGithubPagePage" element={<MakeGithubPagePage/>}/>
                <Route path="/GenerateKeypairPage" element={<GenerateKeypair/>}/>
                <Route path="/InstallNodejsAndNpm" element={<InstallNodejsAndNpm/>}/>
                <Route path="/MakeGithubRepository" element={<MakeGithubRepository/>}/>

            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App;
