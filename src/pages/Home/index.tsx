import { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import "./styles.scss";
import Search from "../../components/Search";
import FoundArts from "../../components/FoundArts";
import { observer } from "mobx-react-lite";
import { Context } from "../../main";

function HomeComponent() {
  const { artsStore } = useContext(Context);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    artsStore.initialFetch();
  }, []);

  return (
    <>
      <Header header_type="home" />
      <Main>
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <FoundArts searchQuery={searchQuery} arts={artsStore.arts} />
      </Main>
      <Footer />
    </>
  );
}

const Home = observer(HomeComponent);
export default Home;
