import { Button } from "../UI/Button";
import "./Episodes.css";
import { EpisodesItem } from "./EpisodesItem";
import { data } from "../../store/data/data";

export const Episodes = () => {
  return (
    <section className="section episodes_section">
      <div className="title_box">
        <h1>Latest episodes</h1>
        <Button>View all episodes</Button>
      </div>
      <div className="episodes">
        {data.map((data) => {
          return <EpisodesItem data={data} />;
        })}
      </div>
    </section>
  );
};
