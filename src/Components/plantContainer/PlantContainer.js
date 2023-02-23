import React from 'react';
import { useNavigate } from 'react-router-dom';

const PlantContainer = ({ img, title, BinomialName, desc, care }) => {
    const history = useNavigate();

    const handleClick = () => {
        history('/plant-info', {
            state: {
                img,
                title,
                BinomialName,
                desc,
                care
            }
        });
    };

    return (
        <div>
            <div onClick={handleClick} className="card text-bg-light" style={{
                maxWidth: "25rem",
                pointerEvents: 'painted',
                cursor: 'pointer'
            }} >
                <img src={img} className="card-img" alt="..." />
                <div className="card-img-overlay">
                    <div style={{
                        fontSize: "22px",
                        fontWeight: 600
                    }} >
                        <p>
                            {title}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlantContainer