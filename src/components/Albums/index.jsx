import { useContext } from "react";
import clsx from "clsx";

import { Context } from "@/context/context";
import { Text } from "@/components/Typography";

import cn from "./style.module.scss";

function Albums() {
  const { songs, setSongs } = useContext(Context);

  return (
    <div className={clsx(cn["albums"])}>
      <Text>TOP ALBUM</Text>
      <div className={clsx(cn["album-images"])}>
        {songs.map((songItem) => (
          <img
            key={songItem.id}
            className={clsx(cn["album-image"])}
            src={songItem.album}
          />
        ))}
      </div>
    </div>
  );
}

export default Albums;
