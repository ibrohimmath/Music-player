import { useContext } from "react";
import clsx from "clsx";
import { Context } from "@/context/context";
import { Text, Size, Boldness } from "@/components/Typography";

import backgroundSrc from "@/assets/img/party.jfif";
import cn from "./style.module.scss";

function Header({ className, style }) {
  const { openSidebar, setOpenSidebar } = useContext(Context);

  return (
    <div className={clsx(className, cn["header"])} style={style}>
      <div className={clsx(cn["img-wrapper"])}>
        <img src={backgroundSrc} alt="Party" />
      </div>
      <div className={clsx(cn["head"])}>
        <div className={clsx(cn["search-music"])}>
          <input type="text" placeholder="search" />
        </div>
        <span
          onClick={() => setOpenSidebar(!openSidebar)}
          className={clsx(cn["sidebar-control"])}
        >
          {openSidebar ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </span>
      </div>
      <div className={clsx(cn["content"])}>
        <Text size={Size["2xl"]} boldness={Boldness.bold}>
          WHAT'S NEW
        </Text>
        <Text
          size={Size.md}
          boldness={Boldness.bold}
          style={{ marginTop: "1rem" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed
          pellentesque odio, nec iaculis turpis. Praesent convallis est vitae
          auctor consequat.{" "}
        </Text>
        <Text>
          Aliquam pretium suscipit facilisis. Cras ornare ligula nulla, non
          fringilla lacus tincidunt in. Aenean mattis id dui sed semper.
        </Text>
        <Text style={{ marginTop: "0.8rem" }}>
          Donec tincidunt blandit nibh, ac fringilla mi pellentesque eget. Nulla
          sed purus vitae mi consectetur dapibus.
        </Text>
        <Text>
          {" "}
          Nam est lacus, convallis vitae egestas a, condimentum ac sapien.
        </Text>
      </div>
      <button className={clsx(cn["start"])}>START</button>
    </div>
  );
}

export default Header;
