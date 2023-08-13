import SongBar from "./SongBar";

const RelatedSongs = ({
  data,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  artistId,
}) => {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl text-white">Related Songs:</h1>
      <div>
        {data.tracks ? (
          data?.tracks?.map((song, i) => (
            <SongBar
              key={`${song.key}-${artistId}-${i}}`}
              song={song}
              i={i}
              artistId={artistId}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={handlePlayClick}
            />
          ))
        ) : (
          <p className="text-gray-400 text-base my-1">
            No related songs found!
          </p>
        )}
      </div>
    </div>
  );
};

export default RelatedSongs;
