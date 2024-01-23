import "./Main.css";
import { FirstPage } from "./FirstPage/FirstPage";
import { InfosPage } from "./InfosPage/InfosPage";
import { MontresPage } from "./Montres/Montres";
import { useNavigate } from "react-router-dom";

function Main() {
  return (
    <main>
      <FirstPage />
      <InfosPage />
      <MontresPage />
    </main>
  );
}

export default Main;
