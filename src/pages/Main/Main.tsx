import { useState } from "react";
import * as S from "./Main.styled";
import Cards from "../../components/Cards/Cards";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";

function Main() {
  const [errorLog, setErrorLog] = useState<string>("");

  return (
    <S.MainContent>
      <Header />
      <Search errorLog={errorLog} setErrorLog={setErrorLog} />
      <Cards setErrorLog={setErrorLog} />
    </S.MainContent>
  );
}

export default Main;
