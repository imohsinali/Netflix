import "./App.css";
import Row from "./Row";
import requests from "./Request";
import NavBar from "./NavBar";
import Banner from "./Banner";
function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <Row
        title="NETFLIX ORGINAL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movie" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comaday Movie" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance Movie" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documantaries Movie" fetchUrl={requests.fetchDocumantaries} />
    </div>
  );
}

export default App;
