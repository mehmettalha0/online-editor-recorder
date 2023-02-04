import { useState } from "react";
import styles from "components/Codebar.module.css";
import HtmlEditor from "components/Editor/HtmlEditor";
import CssEditor from "components/Editor/CssEditor";
import JsEditor from "./Editor/JsEditor";
import { Resizable } from "react-resizable";

function Codebar() {
  const [activeTab, setActiveTab] = useState("html");
  const [width, setWidth] = useState(600);

  const onResize = (event, { element, size, handle }) => {
    setWidth(size.width);
  };

  return (
    <Resizable width={width} height={0} onResize={onResize}>
      <aside className={styles.codebar} style={{ width: `${width}px` }}>
        <nav className={styles.tab}>
          <button
            onClick={() => setActiveTab("html")}
            className={`${styles.item} ${
              (activeTab === "html" && styles.activeTab) || ""
            }`}
          >
            HTML
          </button>
          <button
            onClick={() => setActiveTab("css")}
            className={`${styles.item} ${
              (activeTab === "css" && styles.activeTab) || ""
            }`}
          >
            CSS
          </button>
          <button
            onClick={() => setActiveTab("js")}
            className={`${styles.item} ${
              (activeTab === "js" && styles.activeTab) || ""
            }`}
          >
            JS
          </button>
        </nav>

        <section className={styles.editor}>
          {activeTab === "html" && <HtmlEditor />}
          {activeTab === "css" && <CssEditor />}
          {activeTab === "js" && <JsEditor />}
        </section>
      </aside>
    </Resizable>
  );
}

export default Codebar;
