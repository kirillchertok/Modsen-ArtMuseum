import { IArt } from "../../services/interfaces/IArt";
import Img from "../Img";
import "./styles.scss";
import noImageImg from "@assets/images/no-image.png";
import bookmarkImg from "@assets/images/bookmark.png";

interface IArtBlock {
  data: IArt;
  [key: string]: any;
}

function ArtBlock({ data, ...attrs }: IArtBlock) {
  return (
    <>
      <article className="art" {...attrs}>
        <Img
          src={data.image_url || noImageImg}
          alt={`image ${data.id}`}
          className="art__image"
        />
        <div className="art__description">
          <div className="description__text">
            <p className="description__text--title">{data.title}</p>
            <span className="description__text--artist">
              {data.artist_title || "Unknown"}
            </span>
            <p className="description__text--is-public">
              {!data.is_public_domain ? "Not " : ""}Public
            </p>
          </div>
          <div className="description__to-favorite">
            <div className="to-favorite__container">
              <Img
                className="to-favorite__image"
                src={bookmarkImg}
                alt={`bookmark ${data.id}`}
              />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default ArtBlock;
