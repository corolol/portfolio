import Topbar from "./components/Topbar";
import { ThemeContextProvider } from "./context/theme";

function App() {
  return (
    <ThemeContextProvider>
      <div className="content">
        <Topbar />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
