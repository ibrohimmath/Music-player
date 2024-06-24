import clsx from "clsx";

import cn from "./style.module.scss";

function Header({ className, style }) {
  return (
    <div className={clsx(className, cn["header"])} style={style}>
      Header
    </div>
  );
}

export default Header;
