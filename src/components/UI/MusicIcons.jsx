import {
  Itunes,
  Music2,
  Radio,
  Soundloud,
  Spotify,
} from "../../store/icons/icons";
import "./MusicIcons.css";
export const MusicIcons = (props) => {
  return (
    <div className="icons" {...props}>
      {Spotify}
      {Music2}
      {Soundloud}
      {Itunes}
      {Radio}
    </div>
  );
};
