import React from 'react'
import { useLocation } from 'react-router-dom';


const PlantInfo = () => {

    const location = useLocation();

    return (
        <div style={{
            marginTop: '25px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div className="card mb-3" style={{ maxWidth: "95%" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={location.state.img} className="img-fluid rounded-start" alt={location.state.title} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{location.state.title} ({location.state.BinomialName})</h5>
                            <p className="card-text my-3">{location.state.desc}</p>
                            <p className="card-text my-3"> <strong>{location.state.title} Care :</strong>  {location.state.desc}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlantInfo