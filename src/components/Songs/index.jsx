import { useContext } from "react";

import clsx from "clsx";

import { Context } from "@/context/context";
import { Text, Size, Boldness } from "@/components/Typography";

import cn from "./style.module.scss";

function Songs() {
  const {
    selectedAlbum,
    setSelectedAlbum,
    filterAlbum,
    selectedSong,
    setSelectedSong,
    filterSong,
    handleSongPlaying,
    songs,
    setSongs,
  } = useContext(Context);

  // <i className="fa-solid fa-pause"></i>

  console.log(
    "Songs",
    filterSong(selectedSong, selectedAlbum).isPlaying,
    selectedSong,
    selectedAlbum
  );

  return (
    <div>
      <Text style={{ marginLeft: "3rem", marginTop: "1rem" }}>
        ALBUM #{selectedAlbum}
      </Text>
      <div className={clsx(cn["songs-grid"])}>
        {filterAlbum(selectedAlbum)?.songs?.map((songItem, id) => (
          <div key={songItem.id} className={clsx(cn["song-item"])}>
            <span className={clsx(cn["song-item__ord"])}>
              {String(id).padStart(2, "0")}
            </span>
            <span
              className={clsx(cn["song-item__icon"])}
              onClick={() => {
                handleSongPlaying(songItem.id, selectedAlbum);
                setSelectedSong(songItem.id);
              }}
            >
              {selectedSong === songItem.id ? (
                <>
                  {songItem.isPlaying === 1 ? (
                    <i className="fa-solid fa-pause"></i>
                  ) : (
                    <i
                      className="fa-solid fa-play"
                      style={{ fontSize: "1.1rem" }}
                    ></i>
                  )}
                </>
              ) : (
                <i
                  className="fa-solid fa-plus"
                  style={{ fontSize: "0.9rem" }}
                ></i>
              )}
            </span>
            <img src={songItem.image} className={clsx(cn["song-item__img"])} />
            <span className={clsx(cn["song-item__name"])}>{songItem.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Songs;
