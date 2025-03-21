import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

function Card({imageSeed, clickHandler}) {
  const [image, setImage] = useState(imageSeed)
  useEffect(() => {
    const requestURL = `https://picsum.photos/seed/${imageSeed}/300/300`;
    console.log(requestURL)
    try {
      fetch(requestURL)
        .then(response => response)
        .then(x => {
          setImage(x.url);
        });
    } catch (error) {
      console.error(error.message);
    }
  }, [imageSeed])

  return <div className="card" onClick={clickHandler}>
            <div className="card-image-container">
              <div className="card-image" style={{backgroundImage: `url(${image})`}}></div>
            </div>
            <hr />
            <h3 className="card-title">Lorem Ipsum</h3>
          </div>
}

Card.propTypes = {
  imageSeed: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
}

export default Card