import { useState } from "react";
import * as S from "./Main.styled";
import { useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import Filter from "../../components/Filter/Filter";
import Loading from "../../components/Loading/Loading";
import Pagination from "../../components/Pagination/Pagination";
import { isLoadingSelector } from "../../store/selectors/selectors";

function Main() {
  const isLoading: boolean = useSelector(isLoadingSelector);
  const [errorLog, setErrorLog] = useState<string>("");

  return (
    <S.Content>
      <Header />
      <Search setErrorLog={setErrorLog} />
      <Filter isLoading={isLoading} setErrorLog={setErrorLog} />
      {errorLog && <S.ErrorText>{errorLog}</S.ErrorText>}
      {isLoading ? <Loading /> : <Cards setErrorLog={setErrorLog} />}
      <Pagination isLoading={isLoading} setErrorLog={setErrorLog} />
    </S.Content>
  );
}

export default Main;
