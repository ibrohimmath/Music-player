import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import clsx from "clsx";
import { Context } from "@/context/context";
import { Text, Boldness } from "@/components/Typography";

import cn from "./style.module.scss";

function Footer({ className, style }) {
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

  const audioTagRef = useRef(null);
  const audioRef = useRef(null);
  const rangeRef = useRef(null);

  const [durationPoint, setDurationPoint] = useState(
    filterSong(selectedSong, selectedAlbum).current
  );
  const [isPlaying, setIsPlaying] = useState(
    filterSong(selectedSong, selectedAlbum).isPlaying
  );

  console.log("Footer", isPlaying, selectedSong, selectedAlbum);

  const handlePreviousSong = () => {
    const album = filterAlbum(selectedAlbum);
    const len = album.songs.length;
    let ind = album.songs.findIndex((songItem) => songItem.id === selectedSong);
    ind = (ind - 1 + len) % len;
    const nextSong = album.songs[ind];
    handleSongPlaying(nextSong.id, selectedAlbum);
    setSelectedSong(nextSong.id);
  };

  const handleNextSong = () => {
    const album = filterAlbum(selectedAlbum);
    const len = album.songs.length;
    let ind = album.songs.findIndex((songItem) => songItem.id === selectedSong);
    ind = (ind + 1) % len;
    const nextSong = album.songs[ind];
    handleSongPlaying(nextSong.id, selectedAlbum);
    setSelectedSong(nextSong.id);
  };

  // Boshqa audio ustiga bosilganda footer da ham o'zgarishi kerak
  useEffect(() => {
    const song = filterSong(selectedSong, selectedAlbum);
    if (song) {
      audioRef.current.src = song.audio;
      audioTagRef.current.load();
    }
  }, [selectedSong, selectedAlbum]);

  // isPlaying o'zgarishiga qarab muzikani play qilish
  useEffect(() => {
    setIsPlaying((prevIsPlaying) => {
      const newIsPlaying = filterSong(selectedSong, selectedAlbum).isPlaying;
      if (newIsPlaying === 1) {
        audioTagRef.current.play();
      } else {
        audioTagRef.current.pause();
      }
      return newIsPlaying;
    });
  }, [isPlaying, filterSong]);

  // Audio davom etayotganida input range ni o'zgartirib turish kerak
  const onUpdateDuration = () => {
    setInterval(() => {
      rangeRef.current.value = audioTagRef.current.currentTime;
    }, 500);
  };

  const handleMusicDurationPoint = (value) => {
    audioTagRef.current.currentTime = value;
  };

  return (
    <div className={clsx(className, cn["footer"])} style={style}>
      <img
        src={filterSong(selectedSong, selectedAlbum).image}
        className={clsx(cn["footer-music__image"])}
      />
      <div className={clsx(cn["footer-music__info"])}>
        <Text boldness={Boldness.low}>
          {filterSong(selectedSong, selectedAlbum).name}
        </Text>
        <Text boldness={Boldness.bold}>
          {filterSong(selectedSong, selectedAlbum).singer}
        </Text>
      </div>
      <audio ref={audioTagRef} onDurationChange={onUpdateDuration}>
        <source
          ref={audioRef}
          src={filterSong(selectedSong, selectedAlbum)?.audio}
          type="audio/mp3"
        />
      </audio>
      <div className={clsx(cn["footer-music__controllers"])}>
        {/* Left */}
        <span className={clsx(cn["song--before"])} onClick={handlePreviousSong}>
          <i className="fa-solid fa-caret-left"></i>
        </span>
        {/* Play */}
        <span
          className={clsx(cn["song--play"])}
          onClick={() => {
            handleSongPlaying(selectedSong, selectedAlbum);
          }}
        >
          {isPlaying ? (
            <i className="fa-solid fa-pause"></i>
          ) : (
            <i className="fa-solid fa-play"></i>
          )}
        </span>
        {/* Right */}
        <span className={clsx(cn["song--next"])} onClick={handleNextSong}>
          <i className="fa-solid fa-caret-right"></i>
        </span>
      </div>
      <div className={clsx(cn["footer-music__progressbar"])}>
        <input
          type="range"
          min="0"
          max={audioTagRef.current?.duration}
          defaultValue="0"
          ref={rangeRef}
          onClick={() => console.log("Duration point", rangeRef.value)}
          onChange={(e) => handleMusicDurationPoint(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Footer;
