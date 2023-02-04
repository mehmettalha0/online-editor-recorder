import { EditorProvider } from "context";
import Header from "components/Header";
import Codebar from "./components/Codebar";
import Preview from "components/Preview";
import styles from "./App.module.css";

function App() {
  return (
    <EditorProvider>
      <Codebar />
      <main className={styles.main}>
        <Header />
        <Preview />
      </main>
    </EditorProvider>
  );
}

export default App;
