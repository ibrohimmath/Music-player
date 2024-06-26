import { ContextProvider } from "./context/context";
import Layout from "@/components/Layout";
import Albums from "./components/Albums";
import Songs from "./components/Songs";

function App() {
  return (
    <ContextProvider>
      <Layout>
        <Albums />
        <Songs />
      </Layout>
    </ContextProvider>
  );
}

export default App;
