import './Card.css'

function Card({imageLink = 'vite.svg'}) {
  return <div className="card">
            <div className="card-image-container">
              <div className="card-image" style={{backgroundImage: `url(${imageLink})`}}></div>
            </div>
            <hr />
            <h3 className="card-title">Lorem Ipsum</h3>
          </div>
}

export default Card