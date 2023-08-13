import React from "react";
import { useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const TopCharts = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data, error, isFetching } = useGetTopChartsQuery();

  if (isFetching) {
    return <Loader title="Loading the top charts..." />;
  }

  if (error) {
    return <Error />;
  }

  console.log(data?.tracks);

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Discover top charts
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.tracks?.map((song, i) => {
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

export default TopCharts;
