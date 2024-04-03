import React from 'react';

interface CardsProps {
    jobs: string[];
}

const Cards: React.FC<CardsProps> = ({ jobs }) => {
    return (
        <div className="container position-absolute top-50 ms-5">
            <div className="row justify-content-start">
                {jobs.map((job, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card p-3 mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <div className="icon"> <i className="bx bxl-reddit"></i> </div>
                                    <div className="ms-2 c-details">
                                        <h6 className="mb-0">Reddit</h6> <span>{index} days ago</span>
                                    </div>
                                </div>
                                <div className="badge"> <span>Design</span> </div>
                            </div>
                            <div className="mt-5">
                                <h3 className="heading">{job}</h3> {/* Display the job */}
                                <div className="mt-5">
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                                    </div>
                                    <div className="mt-3"> <span className="text1">52 Applied <span className="text2">of 100 capacity</span></span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cards;
