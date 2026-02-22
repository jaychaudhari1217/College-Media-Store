// function Home() {
//   return (
//     <div className="home">
//       <h1>Welcome to College Media Hub</h1>
//       <p>Books • Movies • Online Learning</p>
//       <button className="explore-btn">Explore Now</button>
//     </div>
//   );
// }

// export default Home;



import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Welcome to College Media Hub</h1>
      <p>Books • Movies • Online Learning</p>
      <button 
        className="explore-btn"
        onClick={() => navigate("/explore")}
      >
        Explore Now
      </button>
    </div>
  );
}

export default Home;

