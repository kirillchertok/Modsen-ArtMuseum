import React from "react";
import "./styles.scss";
import Section from "@components/Section";
import Input from "@components/Input";
import Img from "@components/Img";
import searchIcon from "@assets/images/search.png";

interface ISearch {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

function Search({ searchQuery, setSearchQuery }: ISearch) {
  return (
    <>
      <Section className="search">
        <h1 className="search__header">
          Let's find some
          <span className="search__header--highlight"> art</span> here!
        </h1>
        <Input
          value={searchQuery}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchQuery(e.target.value)
          }
          input_type="icon_text"
          icon={<Img src={searchIcon} />}
          className="search__input"
          placeholder="Search Art, Artist, Work"
        />
      </Section>
    </>
  );
}

export default Search;
