import * as S from "./Search.styled";
import { getUsers } from "../../api/api";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IError, IPropsSearch } from "../../interface/interface";
import { isFilterSelector, totalCountSelector } from "../../store/selectors/selectors";
import {
  countPageUpdate,
  totalCountUpdate,
  userSearchUpdate,
  usersUpdate,
} from "../../store/reducers/reducers";

function Search({ setErrorLog }: IPropsSearch) {
  const dispatch = useDispatch();
  const isFilter: boolean = useSelector(isFilterSelector);
  const totalCount: number = useSelector(totalCountSelector);
  const [userName, setUserName] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const buttonSearch = () => {
    setErrorLog("");
    setIsDisabled(true);
    const countPage: number = 1;
    getUsers(userName, isFilter, countPage)
      .then((respGetUsers) => {
        dispatch(countPageUpdate(1));
        dispatch(userSearchUpdate(userName));
        dispatch(usersUpdate(respGetUsers.usersData));
        dispatch(totalCountUpdate(respGetUsers.total_count));
        setUserName("");
      })
      .catch((error: IError) => {
        setErrorLog(error.message);
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

  return (
    <S.Content>
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
    </S.Content>
  );
}

export default Search;
