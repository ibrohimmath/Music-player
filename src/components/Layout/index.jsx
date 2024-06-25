import { useContext, useRef } from "react";
import clsx from "clsx";
import { Context } from "@/context/context";
import Header from "@/components/Layout/components/Header";
import Sidebar from "@/components/Layout/components/Sidebar";
import Footer from "@/components/Layout/components/Footer";

import cn from "./style.module.scss";

function Layout({ children }) {
  const sidebarRef = useRef(null);

  const { openSidebar, setOpenSidebar } = useContext(Context);

  return (
    <div className={clsx(cn["layout"])}>
      <div className={clsx(cn["row--main"])}>
        <div
          className={clsx(cn["col--first"], openSidebar && cn["sidebar--open"])}
          ref={sidebarRef}
        >
          <Sidebar />
        </div>
        <div className={clsx(cn["col--second"])}>
          <div className={clsx(cn["row--inner-first"])}>
            <Header />
          </div>
          <div className={clsx(cn["row--inner-second"])}>
            <div className={clsx(cn["content-layout"])}>{children}</div>
          </div>
        </div>
      </div>
      <div className={clsx(cn["row--second"])}>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
