export default function PlaceCard() {
  return (
    <div className="place-card">
      <img src="https://picsum.photos/seed/picsum/200/300" alt="Mount fuji" />
      <div className="place-details">
        <div className="place-heading">
          <div>
            <img src="./src/assets/location.svg" alt="Location icon" />
            <span>JAPAN</span>
            <a href="">View on Google Maps</a>
          </div>
          <h1>Mount Fuju</h1>
        </div>
        <div className="place-about">
          <span className="travel-date">12 Jan, 2023 - 24 Jan, 2023</span>
          <p>
            Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists.
          </p>
        </div>
      </div>
    </div>
  );
}
