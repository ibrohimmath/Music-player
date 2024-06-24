import clsx from "clsx";

import cn from "./style.module.scss";

function Footer({ className, style }) {
  return (
    <div className={clsx(className, cn["footer"])} style={style}>
      Footer
    </div>
  );
}

export default Footer;
