import React from "react";
import { Error, Loader, ArtistCard } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const TopArtists = () => {
  const { data, error, isFetching } = useGetTopChartsQuery();

  if (isFetching) {
    return <Loader title="Bringing in the top artists..." />;
  }

  if (error) {
    return <Error />;
  }

  console.log(data?.tracks);

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Top Artists
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.tracks?.map((track) => {
          return <ArtistCard key={track.key} track={track} />;
        })}
      </div>
    </div>
  );
};

export default TopArtists;
