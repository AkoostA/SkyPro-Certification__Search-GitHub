import * as S from "./Search.styled";
import Filter from "../Filter/Filter";
import { getUsers } from "../../api/api";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IError, IPropsSearch } from "../../interface/interface";
import {
  isFilterSelector,
  totalCountSelector,
  userSearchSelector,
} from "../../store/selectors/selectors";
import { totalCountUpdate, userSearchUpdate, usersUpdate } from "../../store/reducers/reducers";

function Search({ errorLog, setErrorLog }: IPropsSearch) {
  const dispatch = useDispatch();
  const isFilter: boolean = useSelector(isFilterSelector);
  const totalCount: number = useSelector(totalCountSelector);
  const userSearch: string = useSelector(userSearchSelector);
  const [userName, setUserName] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const buttonSearch = () => {
    setErrorLog("");
    setIsDisabled(true);
    const checkUserName = userName ? userName : userSearch;
    getUsers(checkUserName, isFilter)
      .then((respGetUsers) => {
        dispatch(userSearchUpdate(checkUserName));
        dispatch(usersUpdate(respGetUsers.usersData));
        dispatch(totalCountUpdate(respGetUsers.total_count));
      })
      .catch((error: IError) => {
        setErrorLog(error.message);
      })
      .finally(() => {
        setUserName("");
      });
  };

  const checkEnterClick = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      buttonSearch();
    }
  };

  useEffect(() => {
    userName ? setIsDisabled(false) : setIsDisabled(true);
  }, [userName]);

  useEffect(() => {
    if (!userName && !userSearch) return;
    buttonSearch();
  }, [isFilter]);

  return (
    <S.SearchContent>
      <S.SearchUser>
        <S.SearchInput
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={(e) => checkEnterClick(e)}
          type="search"
          name="search"
          placeholder="Введите логин"
        />
        <S.SearchButton onClick={buttonSearch} disabled={isDisabled}>
          Поиск
        </S.SearchButton>
      </S.SearchUser>
      <S.SearchText>Количество совпадений: {totalCount}</S.SearchText>
      <Filter isFilter={isFilter} />
      {errorLog && <S.SearchErrorText>{errorLog}</S.SearchErrorText>}
    </S.SearchContent>
  );
}

export default Search;
