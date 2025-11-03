/**
 * Travel Journal: Pass object as props challenge: Fix our component! 😱
 */

export default function Entry(props) {
  console.log(props);
  return (
    <section className="entry">
      <img src={props.entry.img.src} alt={props.entry.img.alt} />
      <article>
        <div>
          <img src="./src/assets/location.svg" alt="Location marker" />
          <span className="country-name">{props.entry.country}</span>
          <a
            className="google-map-link"
            href={props.entry.googleMapsLink}
            target="_blank"
          >
            View on Google Maps
          </a>
        </div>
        <h2>{props.entry.title}</h2>
        <span>{props.entry.dates}</span>
        <p>{props.entry.text}</p>
      </article>
    </section>
  );
}
