import { useContext } from "react";
import clsx from "clsx";
import { Context } from "@/context/context";

import backgroundSrc from "@/assets/party.jfif";
import cn from "./style.module.scss";

function Header({ className, style }) {
  const { openSidebar, setOpenSidebar } = useContext(Context);

  return (
    <div className={clsx(className, cn["header"])} style={style}>
      <div className={clsx(cn["img-wrapper"])}>
        <img src={backgroundSrc} alt="Party" />
      </div>
      <div className={clsx(cn["head"])}>
        <span>
          <input type="text" />
        </span>
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
    </div>
  );
}

export default Header;
