
function HeroSection() {
    return (
        <div style={{ backgroundColor: 'rgba(153,153,255)', position: 'fixed', top: 0, left: 0, width: '100%', height: '70vh', overflow: 'hidden', borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%' }}>
            <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-white text-center">
                    <h1 className="mb-3">Hello Ayoub Ellaouzi</h1>
                    <h4 className="mb-3">my website</h4>
                    <a className="btn btn-outline-light btn-lg ms-2" href="#!" role="button">Explore</a>
                    <a className="btn btn-outline-light btn-lg ms-2" href="#!" role="button">Purchase</a>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;

