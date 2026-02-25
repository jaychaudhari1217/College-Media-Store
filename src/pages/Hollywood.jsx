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
    },
    {
      title: "Interstellar",
      desc: "Sci-Fi Space Adventure",
      image: "https://via.placeholder.com/400x250"
    }
  ];

  const filteredHollywood = movies.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
  

     <div className="page">
      <h1>🎬 Hollywood Movies</h1>
      <div className="card-container">
        {filteredHollywood.length > 0 ? (
      filteredHollywood.map((c, i) => (
        <Card key={i} {...c} />
      ))
    ) : (
      <p>No results found</p>
    )}
      </div>
    </div>
  );
}

export default Hollywood;
