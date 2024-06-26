import { createContext, useState } from "react";

const Context = createContext();

import album1 from "@/assets/img/Album_1.jpg";
import rollTheWind from "@/assets/img/roll_the_wind.jfif";
import rollTheWindAudio from "@/assets/music/Roll_The_Wind.mp3";
import myWholeWorld from "@/assets/img/my_whole_world.jfif";
import myWholeWorldAudio from "@/assets/music/My_Whole_World.mp3";
import abandoned from "@/assets/img/abandoned.jpg";
import abandonedAudio from "@/assets/music/Abandoned.mp3";

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

  const handleSongPlaying = (id, albumId) => {
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
              isPlaying: songItem.isPlaying === 0 ? 1 : 0,
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
