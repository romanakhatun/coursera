import React from 'react';
import './cardCta.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const CardCta = (props) => {
    const { img, title, price, shortParagraph, instructor, rating, people } = props.course;
    const handleAddCourse = props.handleAddCourse;
    return (
        <div className="ctaCard">
            <img className="img" src={img} alt="codingImg" />
            <h1 className="title">{title}</h1>
            <p>{shortParagraph}</p>
            <p className="instructor">{instructor}</p>
            <p>
                <span className="rating"><small>{rating}</small></span>
                <span className="star"> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStarHalfAlt} /></span>
                <span className="people"> <small>({people})</small></span>
            </p>
            <button className="btn" onClick={() => handleAddCourse(props.course)}>Enroll for <FontAwesomeIcon icon={faDollarSign} />{price}</button>
        </div>
    );
};

export default CardCta;