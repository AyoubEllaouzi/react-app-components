import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from "./components/HeroSection.tsx";
import Header from "./components/Header.tsx";
import Cards from "./components/Cards.tsx";


function App() {
    return (
        <>
            <Header/>
            <HeroSection />
            <Cards/>
        </>

    );
}

export default App;
