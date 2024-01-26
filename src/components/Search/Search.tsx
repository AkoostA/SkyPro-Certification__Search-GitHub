import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getUsers } from "../../api/api";
import { IError, IPropsSearch } from "../../interface/interface";
import { usersUpdate } from "../../store/reducers/reducers";
import { DivContent, DivSearch, InputSearch, ButtonSearch, PSearch } from "./Search.styled";

function Search({ isFilter, serErrorLog }: IPropsSearch) {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState<string>("");
  const [totalCount, setTotalCount] = useState<number>(0);
  const [isDisabled, sitIsDisabled] = useState<boolean>(true);

  const buttonSearch = () => {
    serErrorLog("");
    sitIsDisabled(true);
    getUsers(userName, isFilter)
      .then((respGetUsers) => {
        setTotalCount(respGetUsers.total_count);
        dispatch(usersUpdate(respGetUsers.usersData));
      })
      .catch((error: IError) => {
        setTotalCount(0);
        serErrorLog(error.message);
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
    userName ? sitIsDisabled(false) : sitIsDisabled(true);
  }, [userName]);

  return (
    <DivContent>
      <DivSearch>
        <InputSearch
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={(e) => checkEnterClick(e)}
          type="search"
          placeholder="Введите логин"
        />
        <ButtonSearch onClick={buttonSearch} disabled={isDisabled}>
          Поиск
        </ButtonSearch>
      </DivSearch>
      <PSearch>Количество совпадений: {totalCount}</PSearch>
    </DivContent>
  );
}

export default Search;
