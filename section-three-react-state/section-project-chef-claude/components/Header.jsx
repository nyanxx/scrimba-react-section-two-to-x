import chefClaudeLogo from "../images/chef-claude-icon.png";

export default function Header() {
  return (
    <header className="header">
      <img className="site-logo" src={chefClaudeLogo} alt="Chef claude logo" />
      <h1 className="site-heading">Chef Claude</h1>
    </header>
  );
}
