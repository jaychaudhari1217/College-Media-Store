import Card from "../components/Card";


function Bollywood({ search }) {
  const movies = [
    {
      title: "3 Idiots",
      desc: "College Drama",
      image: "https://via.placeholder.com/400x250"
    },
    {
      title: "Dangal",
      desc: "Sports Biopic",
      image: "https://via.placeholder.com/400x250"
    }
  ];


  const filteredBollywood = movies.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.desc.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div className="page">
      <h1>🎥 Bollywood Movies</h1>
      <div className="card-container">
        {filteredBollywood.length > 0 ? (
      filteredBollywood.map((c, i) => (
        <Card key={i} {...c} />
      ))
    ) : (
      <p>No results found</p>
    )}
      </div>
    </div>
  );
}

export default Bollywood;
