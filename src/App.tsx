import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from "./components/HeroSection.tsx";
import Header from "./components/Header.tsx";
import Cards from "./components/Cards.tsx";

const jobs = [
    "Software Architect Java - Agadir",
    "Software Architect React - Agadir",
    "Software Architect Angular - Agadir"
];
function App() {
    return (
        <>
            <Header/>
            <HeroSection fullName="Ayoub Ellaouzi" title="My Website" />
            <Cards jobs={jobs} />
        </>

    );
}

export default App;
