import photo from './JoelHiltonHeadshot.jpg';
function Home() {
  return (
    <div>
      <div className="hero-text">
        <h1>The</h1>
        <h1>Joel Hilton</h1>
        <h1>Film Collection</h1>
      </div>
      <img src={photo} className="hero-image" alt="Joel Hilton" />
    </div>
  );
}

export default Home;
