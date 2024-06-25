import { useContext } from "react";
import clsx from "clsx";
import { Context } from "@/context/context";
import { Text, Size, Boldness } from "@/components/Typography";

import cn from "./style.module.scss";

function Sidebar({ className, style }) {
  const { openSidebar, setOpenSidebar } = useContext(Context);

  return (
    <div className={clsx(className, cn["sidebar"])} style={style}>
      <Text size={Size.md} boldness={Boldness.bold}>
        BROWSE
      </Text>
      <div
        className={clsx("sidebar-flex", cn["move-right"])}
        style={{
          marginTop: "1.5rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Text size={Size["xl"]} boldness={Boldness.bold}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </Text>
        <Text size={Size.md} boldness={Boldness.bold}>
          DISCOVER
        </Text>
      </div>
      <div
        className={clsx("sidebar-flex", cn["move-right"])}
        style={{
          marginTop: "1.2rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Text size={Size["xl"]} boldness={Boldness.bold}>
          <i className="fa-solid fa-music"></i>
        </Text>
        <Text size={Size.md} boldness={Boldness.bold}>
          GENRE
        </Text>
      </div>
      <div
        className={clsx("sidebar-flex", cn["move-right"])}
        style={{
          marginTop: "1.2rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Text size={Size["xl"]} boldness={Boldness.bold}>
          <i className="fa-solid fa-headphones"></i>
        </Text>
        <Text size={Size.md} boldness={Boldness.bold}>
          TOP CHARTS
        </Text>
      </div>
      <div
        className={clsx("sidebar-flex", cn["move-right"])}
        style={{
          marginTop: "1.2rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Text size={Size["xl"]} boldness={Boldness.bold}>
          <i className="fa-solid fa-microphone"></i>
        </Text>
        <Text size={Size.md} boldness={Boldness.bold}>
          PODCASTS
        </Text>
      </div>
      <Text
        size={Size.md}
        boldness={Boldness.bold}
        style={{ marginTop: "8rem" }}
      >
        LIBRARY
      </Text>
      <div
        className={clsx("sidebar-flex", cn["move-right"])}
        style={{
          marginTop: "1.5rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Text size={Size["xl"]} boldness={Boldness.bold}>
          <i className="fa-regular fa-star"></i>
        </Text>
        <Text size={Size.md} boldness={Boldness.bold}>
          FAVOURITES
        </Text>
      </div>
      <div
        className={clsx("sidebar-flex", cn["move-right"])}
        style={{
          marginTop: "1.2rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Text size={Size["xl"]} boldness={Boldness.bold}>
          <i className="fa-regular fa-file-video"></i>
        </Text>
        <Text size={Size.md} boldness={Boldness.bold}>
          PLAYLIST
        </Text>
      </div>
    </div>
  );
}

export default Sidebar;
