function Card({ icon, title, description }) {
  return (
    <article className="card">
      <div className="card-icon">{typeof icon === "function" ? icon() : icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default Card;
