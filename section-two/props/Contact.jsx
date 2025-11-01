/**
 * Destructuring props challenge: fix the bug, now that we've
 * destructured the props object
 */

export default function Contact({ img, imgAlt, name, phoneNo, email }) {
  return (
    <article className="contact-card">
      <img src={img} alt={imgAlt} />
      <h3>{name}</h3>
      <div className="info-group">
        <img src="./images/phone-icon.png" alt="phone icon" />
        <p>{phoneNo}</p>
      </div>
      <div className="info-group">
        <img src="./images/mail-icon.png" alt="mail icon" />
        <p>{email}</p>
      </div>
    </article>
  );
}
