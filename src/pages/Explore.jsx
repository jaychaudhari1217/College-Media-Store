import "./Explore.css";

function Explore() {
  return (
    <div className="explore">

      {/* Hero Banner */}
      <div className="hero">
        <div className="hero-content">
          <h1>Unlimited Books, Movies & Learning</h1>
          <p>Watch anywhere. Learn anytime.</p>
          <button className="hero-btn">Start Exploring</button>
        </div>
      </div>

      {/* Books Row */}
      <h2 className="section-title">Trending Books</h2>
      <div className="row">
        <div className="card">📘 Math Book</div>
        <div className="card">📗 Physics</div>
        <div className="card">📕 Chemistry</div>
        <div className="card">📙 IT Guide</div>
        <div className="card">📓 Programming</div>
      </div>

      {/* Movies Row */}
      <h2 className="section-title">Popular Movies</h2>
      <div className="row">
        <div className="card">🎬 Avengers</div>
        <div className="card">🎬 Interstellar</div>
        <div className="card">🎬 Bahubali</div>
        <div className="card">🎬 Dangal</div>
        <div className="card">🎬 Inception</div>
      </div>

      {/* Classes Row */}
      <h2 className="section-title">Top Classes</h2>
      <div className="row">
        <div className="card">🎓 React Course</div>
        <div className="card">🎓 Java</div>
        <div className="card">🎓 Python</div>
        <div className="card">🎓 Web Dev</div>
        <div className="card">🎓 Data Science</div>
      </div>

    </div>
  );
}

export default Explore;
