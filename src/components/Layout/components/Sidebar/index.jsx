import clsx from "clsx";

import cn from "./style.module.scss";

function Sidebar({ className, style }) {
  return (
    <div className={clsx(className, cn["sidebar"])} style={style}>
      Sidebar
    </div>
  );
}

export default Sidebar;
