import {
  Itunes,
  Music2,
  Radio,
  Soundloud,
  Spotify,
} from "../../store/icons/icons";
import "./MusicIcons.css";
export const MusicIcons = () => {
  return (
    <div className="icons">
      {Spotify}
      {Music2}
      {Soundloud}
      {Itunes}
      {Radio}
    </div>
  );
};
