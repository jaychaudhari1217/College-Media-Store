import "./Card.css";

function Card({ image, title, desc, link, book }) {
  return (
    <div className="card-container">
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{desc}</p>
        {link && (
          <a href={link} target="_blank" rel="noreferrer">
            Watch Now
          </a>
        )}

        {book && (
          <a
            href={book}
            target="_blank"
            rel="noreferrer"
            className="btn view-btn"
          >
            View PDF
          </a>
        )}
      </div>
    </div>
    </div>
  );
}

export default Card;
