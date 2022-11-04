import { Logo } from "../../store/icons/icons";
import "./Header.css";
import { Navigation } from "./Navigation";
export const Header = () => {
  return (
    <header>
      {Logo}
      <Navigation />
    </header>
  );
};
