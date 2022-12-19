import axios from "axios";
import React from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";
import Genres from "../../components/Genres";
import useGenre from "../../Hooks/useGenre";

const Series = () => {
  const [page, setPage] = React.useState(1);
  const [content, setContent] = React.useState([]);
  const [numOfPages, setNumOfPages] = React.useState();
  const [selectedGenres, setSelectedGenres] = React.useState([]);
  const [genres, setGenres] = React.useState([]);
  const genreforURL=useGenre(selectedGenres)

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };
  React.useEffect(() => {
    fetchMovies();
  }, [page,genreforURL]);
  return (
    <div>
      <span className="pageTitle">Series</span>
      <Genres
        type="tv"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Series;
