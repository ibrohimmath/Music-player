import { createContext, useState } from "react";

const Context = createContext();

import album1 from "@/assets/img/Album_1.jpg";
import rollTheWind from "@/assets/img/roll_the_wind.jfif";
import rollTheWindAudio from "@/assets/music/Roll_The_Wind.mp3";
import myWholeWorld from "@/assets/img/my_whole_world.jfif";
import myWholeWorldAudio from "@/assets/music/My_Whole_World.mp3";
import abandoned from "@/assets/img/abandoned.jpg";
import abandonedAudio from "@/assets/music/Abandoned.mp3";

import album2 from "@/assets/img/Album_2.jfif";
import Opening1 from "@/assets/img/Opening_1.jpg";
import Opening2 from "@/assets/img/Opening_2.jfif";
import Opening3 from "@/assets/img/Opening_3.jfif";
import Opening1Audio from "@/assets/music/Opening_1.mp3";
import Opening2Audio from "@/assets/music/Opening_2.mp3";
import Opening3Audio from "@/assets/music/Opening_3.mp3";

function ContextProvider({ children }) {
  const [openSidebar, setOpenSidebar] = useState(false);

  const [selectedAlbum, setSelectedAlbum] = useState(1);
  const [selectedSong, setSelectedSong] = useState(1);

  const [songs, setSongs] = useState([
    {
      id: 1,
      album: album1,
      songs: [
        {
          isPlaying: 0,
          id: 1,
          image: rollTheWind,
          name: "Roll the Wind",
          singer: "Alexander Rybak",
          audio: rollTheWindAudio,
        },
        {
          isPlaying: -1,
          id: 2,
          image: myWholeWorld,
          name: "My Whole World",
          singer: "Alexander Rybak",
          audio: myWholeWorldAudio,
        },
        {
          isPlaying: -1,
          id: 3,
          image: abandoned,
          name: "Abandoned",
          singer: "Alexander Rybak",
          audio: abandonedAudio,
        },
      ],
    },
    {
      id: 2,
      album: album2,
      songs: [
        {
          isPlaying: -1,
          id: 1,
          image: Opening1,
          name: "Haruka Kanata",
          singer: "Unknown",
          audio: Opening1Audio,
        },
        {
          isPlaying: -1,
          id: 2,
          image: Opening2,
          name: "You are my friend",
          singer: "Uknown",
          audio: Opening2Audio,
        },
        {
          isPlaying: -1,
          id: 3,
          image: Opening3,
          name: "Creditless",
          singer: "Uknown",
          audio: Opening3Audio,
        },
      ],
    },
  ]);

  const filterAlbum = (id) => {
    return songs.find((albumItem) => albumItem.id === id);
  };

  const filterSong = (id, albumId) => {
    const album = filterAlbum(albumId);
    return album ? album.songs.find((songItem) => songItem.id === id) : null;
  };

  const handleSelectSong = (id) => {
    setSelectedSong((prevId) => {
      return id;
    });
  };

  const handleSongPlaying = (id, albumId, playing) => {
    setSongs((prevSongs) =>
      prevSongs.map((albumItem) => {
        if (albumItem.id !== albumId) return albumItem;
        return {
          ...albumItem,
          songs: albumItem.songs.map((songItem) => {
            if (songItem.id !== id)
              return {
                ...songItem,
                isPlaying: -1,
              };
            return {
              ...songItem,
              isPlaying: playing ?? (songItem.isPlaying === 0 ? 1 : 0),
            };
          }),
        };
      })
    );
  };

  return (
    <Context.Provider
      value={{
        openSidebar,
        setOpenSidebar,
        selectedAlbum,
        setSelectedAlbum,
        filterAlbum,
        selectedSong,
        setSelectedSong,
        filterSong,
        handleSongPlaying,
        songs,
        setSongs,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
