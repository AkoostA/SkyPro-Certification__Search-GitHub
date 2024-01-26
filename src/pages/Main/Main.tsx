import { useState } from "react";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import Filter from "../../components/Filter/Filter";
import { DivContent, H2Main } from "./Main.styled";

function Main() {
  const [errorLog, serErrorLog] = useState<string>("");
  const [isFilter, setIsFilter] = useState<boolean>(true);

  return (
    <DivContent>
      <Header />
      <Search isFilter={isFilter} serErrorLog={serErrorLog} />
      <Filter isFilter={isFilter} setIsFilter={setIsFilter} />
      {errorLog && <H2Main>{errorLog}</H2Main>}
    </DivContent>
  );
}

export default Main;
