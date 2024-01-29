import * as S from "./Pagination.styled";
import { getUsers } from "../../api/api";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IError, IPropsPagination } from "../../interface/interface";
import { countPageUpdate, isLoadingUpdate, usersUpdate } from "../../store/reducers/reducers";
import {
  countPageSelector,
  isFilterSelector,
  totalCountSelector,
  userSearchSelector,
} from "../../store/selectors/selectors";

function Pagination({ isLoading, setErrorLog }: IPropsPagination) {
  const dispatch = useDispatch();
  const cardsInPage: number = 10;
  const isFilter: boolean = useSelector(isFilterSelector);
  const countPage: number = useSelector(countPageSelector);
  const userSearch: string = useSelector(userSearchSelector);
  const totalCount: number = useSelector(totalCountSelector);
  const [maxCountPage, setMaxCountPage] = useState<number>(Math.ceil(totalCount / cardsInPage));

  const switchPage = (newPage: string) => {
    if (newPage === "prev" && countPage === 1) return;
    if (newPage === "next" && maxCountPage === countPage) return;
    dispatch(isLoadingUpdate(true));
    const newCountPage = newPage === "prev" ? countPage - 1 : countPage + 1;
    setErrorLog("");
    getUsers(userSearch, isFilter, newCountPage)
      .then((respGetUsers) => {
        dispatch(countPageUpdate(newCountPage));
        dispatch(usersUpdate(respGetUsers.usersData));
      })
      .catch((error: IError) => {
        setErrorLog(error.message);
      })
      .finally(() => {
        dispatch(isLoadingUpdate(false));
      });
  };

  useEffect(() => {
    setMaxCountPage(Math.ceil(totalCount / cardsInPage));
  }, [totalCount]);

  return (
    <S.Content>
      {isLoading || !userSearch ? null : (
        <S.ButtonBlock>
          <S.ButtonPrevNext onClick={() => switchPage("prev")}>Назад</S.ButtonPrevNext>
          <S.NumberPage>{countPage}</S.NumberPage>
          <S.ButtonPrevNext onClick={() => switchPage("next")}>Вперед</S.ButtonPrevNext>
        </S.ButtonBlock>
      )}
    </S.Content>
  );
}

export default Pagination;
