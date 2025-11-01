/**
 * Destructuring props challenge: fix the bug, now that we've
 * destructured the props object
 */

export default function Contact({ img, name, phone, email }) {
  return (
    <article className="contact-card">
      <img src={props.img} alt={props.imgAlt} />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src="./images/phone-icon.png" alt="phone icon" />
        <p>{props.phoneNo}</p>
      </div>
      <div className="info-group">
        <img src="./images/mail-icon.png" alt="mail icon" />
        <p>{props.email}</p>
      </div>
    </article>
  );
}
