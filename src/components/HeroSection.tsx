import '../assets/css/hero-section.css'
interface HeroSectionProps {
    fullName: string;
    title: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ fullName, title }) => {
    return (
        <div className="hero-section">
            <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-white text-center">
                    <h1 className="mb-3">Hello {fullName}</h1>
                    <h4 className="mb-3">{title}</h4>
                    <a className="btn btn-outline-light btn-lg ms-2" href="#!" role="button">Explore</a>
                    <a className="btn btn-outline-light btn-lg ms-2" href="#!" role="button">Purchase</a>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;

