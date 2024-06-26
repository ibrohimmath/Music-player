import { useContext } from "react";
import clsx from "clsx";

import { Context } from "@/context/context";
import { Text } from "@/components/Typography";

import cn from "./style.module.scss";

function Albums() {
  const {
    selectedSong,
    setSelectedSong,
    selectedAlbum,
    setSelectedAlbum,
    filterSong,
    handleSongPlaying,
    songs,
    setSongs,
  } = useContext(Context);

  const handleAlbumSelect = (albumId) => {
    setSelectedAlbum(albumId);
    handleSongPlaying(selectedSong, selectedAlbum, 0);
    handleSongPlaying(
      selectedSong,
      albumId,
      filterSong(selectedSong, selectedAlbum).isPlaying
    );
  };

  return (
    <div className={clsx(cn["albums"])}>
      <Text>TOP ALBUM</Text>
      <div className={clsx(cn["album-images"])}>
        {songs.map((songItem) => (
          <img
            key={songItem.id}
            className={clsx(
              cn["album-image"],
              songItem.id === selectedAlbum && cn["album-image--selected"]
            )}
            src={songItem.album}
            onClick={() => handleAlbumSelect(songItem.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Albums;
