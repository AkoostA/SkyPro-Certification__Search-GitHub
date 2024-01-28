import { useState } from "react";
import * as S from "./Main.styled";
import { useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import Filter from "../../components/Filter/Filter";
import Pagination from "../../components/Pagination/Pagination";
import { usersSelector } from "../../store/selectors/selectors";

function Main() {
  const users = useSelector(usersSelector);
  const [errorLog, setErrorLog] = useState<string>("");

  return (
    <S.Content>
      <Header />
      <Search setErrorLog={setErrorLog} />
      <Filter setErrorLog={setErrorLog} />
      {errorLog && <S.ErrorText>{errorLog}</S.ErrorText>}
      <Cards setErrorLog={setErrorLog} />
      {users.length > 0 && <Pagination setErrorLog={setErrorLog}/>}
    </S.Content>
  );
}

export default Main;
