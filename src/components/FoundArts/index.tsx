import { useContext } from "react";
import { IArt } from "../../services/interfaces/IArt";
import Section from "../Section";
import "./styles.scss";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";
import ArtBlock from "../ArtBlock";

interface IFoundArts {
  searchQuery: string;
  arts: IArt[];
}

function FoundArtsComponent({ searchQuery, arts }: IFoundArts) {
  const { artsStore } = useContext(Context);

  return (
    <>
      <Section className="arts">
        <div className="arts__headers">
          <h3 className="arts__headers--first">Topics for you</h3>
          <h1 className="arts__headers--second">Our special gallery</h1>
        </div>
        <div className="arts__blocks">
          {artsStore.arts &&
            artsStore.arts.map((art) => <ArtBlock key={art.id} data={art} />)}
        </div>
      </Section>
    </>
  );
}

const FoundArts = observer(FoundArtsComponent);
export default FoundArts;
