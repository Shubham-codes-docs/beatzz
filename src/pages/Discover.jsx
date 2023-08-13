import { useDispatch, useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import { useGetSongsByGenreQuery } from "../redux/services/shazamCore";
import { selectGenreListId } from "../redux/features/playerSlice";
import { genres } from "../assets/constants";

const Discover = () => {
  const { activeSong, isPlaying, genreListId } = useSelector(
    (state) => state.player
  );

  const dispatch = useDispatch();

  const { data, isFetching, error } = useGetSongsByGenreQuery(
    genreListId || "genre-global-chart-1"
  );

  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  const genreTitle = genres.find((genre) => genre.list_id === genreListId);

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover {genreTitle?.title || "Pop"} Music
        </h2>
        <select
          name="genrres"
          id="genres"
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || "pop"}
        >
          {genres.map((genre) => (
            <option value={genre.list_id} key={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.tracks.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            i={i}
            activeSong={activeSong}
            isPlaying={isPlaying}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
