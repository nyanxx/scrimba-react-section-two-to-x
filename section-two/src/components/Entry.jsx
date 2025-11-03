export default function Entry(props) {
  return (
    <section className="entry">
      <img src={props.img.src} alt={props.img.alt} />
      <article>
        <div>
          <img src="./src/assets/location.svg" alt="Location marker" />
          <span>{props.country}</span>
          <a href={props.googleMapsLink}>View on Google Maps</a>
        </div>
        <h2>{props.title}</h2>
        <span>{props.dates}</span>
        <p>{props.text}</p>
      </article>
    </section>
  );
}
