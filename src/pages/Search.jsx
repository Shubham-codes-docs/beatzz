import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import { useGetSongsBySearchQuery } from "../redux/services/shazamCore";

const Search = () => {
  const { searchTerm } = useParams();

  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data, error, isFetching } = useGetSongsBySearchQuery(searchTerm);

  const songs = data?.tracks?.hits?.map((song) => song.track);

  if (isFetching) {
    return <Loader title="Loading the top charts..." />;
  }

  if (error) {
    return <Error />;
  }

  console.log(songs);

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Showing results for <span className="font-black">{searchTerm}</span>
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs?.map((song, i) => {
          return (
            <SongCard
              key={song.key}
              song={song}
              i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Search;
