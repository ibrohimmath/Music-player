import clsx from "clsx";
import Header from "@/components/Layout/components/Header";
import Sidebar from "@/components/Layout/components/Sidebar";
import Footer from "@/components/Layout/components/Footer";

import cn from "./style.module.scss";

function Layout({ children }) {
  return (
    <div className={clsx(cn["layout"])}>
      <div className={clsx(cn["row--main"])}>
        <div className={clsx(cn["col--first"])}>
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
