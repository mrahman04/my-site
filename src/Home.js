import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page">
      <h1>hi what do u wanna add to ur list</h1>
      <p>hello, welcome to my site here we can sit and plan everything very neatly and have a idea of what to do.</p>

      <div className="home-boxes">
        <Link to="/eat" className="home-box">🍽️ Places to Eat</Link>
        <Link to="/buy" className="home-box">🛍️ Things to Buy</Link>
        <Link to="/visit" className="home-box">✈️ Places to Visit</Link>
      </div>
    </div>
  );
}
