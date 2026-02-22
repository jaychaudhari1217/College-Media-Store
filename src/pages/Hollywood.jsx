import Card from "../components/Card";


function Hollywood({ search }) {
  const movies = [
    {
      title: "Avengers",
      desc: "Marvel Action Movie",
      image: "https://via.placeholder.com/400x250"
    },
    {
      title: "Interstellar",
      desc: "Sci-Fi Space Adventure",
      image: "https://via.placeholder.com/400x250"
    }
  ];

  return (
    <div className="page">
      <h1>🎬 Hollywood Movies</h1>
      <div className="card-container">
        {movies.map((m, i) => (
          <Card key={i} {...m} />
        ))}
      </div>
    </div>
  );
}

export default Hollywood;
