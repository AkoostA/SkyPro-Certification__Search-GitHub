import * as S from "./Filter.styled";
import { getUsers } from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { IError, IPropsFilter } from "../../interface/interface";
import { isFilterSelector, userSearchSelector } from "../../store/selectors/selectors";
import { countPageUpdate, isFilterUpdate, usersUpdate } from "../../store/reducers/reducers";

function Filter({ setErrorLog }: IPropsFilter) {
  const dispatch = useDispatch();
  const isFilter: boolean = useSelector(isFilterSelector);
  const userSearch: string = useSelector(userSearchSelector);

  const switchFilter = (isSwitch: boolean) => {
    setErrorLog("");
    if (!userSearch) {
      setErrorLog("Сначала проведите поиск по логину");
      return;
    }
    const countPage: number = 1;
    dispatch(isFilterUpdate(isSwitch));
    getUsers(userSearch, isSwitch, countPage)
      .then((respGetUsers) => {
        dispatch(countPageUpdate(1));
        dispatch(usersUpdate(respGetUsers.usersData));
      })
      .catch((error: IError) => {
        setErrorLog(error.message);
      });
  };

  return (
    <S.Content>
      <S.FilterTitle>Отфильтровать по количеству репозиториев</S.FilterTitle>
      <S.FilterButton $isActive={isFilter && true} onClick={() => switchFilter(true)}>
        От большего к меньшему
      </S.FilterButton>
      <S.FilterButton $isActive={!isFilter && true} onClick={() => switchFilter(false)}>
        От меньшего к большему
      </S.FilterButton>
    </S.Content>
  );
}

export default Filter;
