import React from 'react';

const AnimeCard = ({ props }) => {
    return (
        <div className="anime">
            <div>
                <p>{props.year}</p>
            </div>
            <div>
                <img src={props.images.jpg.large_image_url !== "" ? props.images.jpg.large_image_url : 'https://via.placeholder.com/400'} alt={props.title_english} />
            </div>
            <div>
                <span>{props.type}</span>
                <h3>{props.title_english}</h3>
            </div>
        </div>
    );
}

export default AnimeCard;