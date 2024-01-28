import * as S from "./Filter.styled";
import { getUsers } from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { IError, IPropsFilter } from "../../interface/interface";
import { isFilterSelector, userSearchSelector } from "../../store/selectors/selectors";
import {
  countPageUpdate,
  isFilterUpdate,
  isLoadingUpdate,
  usersUpdate,
} from "../../store/reducers/reducers";

function Filter({ isLoading, setErrorLog }: IPropsFilter) {
  const dispatch = useDispatch();
  const countPage: number = 1;
  const isFilter: boolean = useSelector(isFilterSelector);
  const userSearch: string = useSelector(userSearchSelector);

  const switchFilter = (isSwitch: boolean) => {
    setErrorLog("");
    if (!userSearch) {
      setErrorLog("Сначала проведите поиск по логину");
      return;
    }
    dispatch(isLoadingUpdate(true));
    dispatch(isFilterUpdate(isSwitch));
    getUsers(userSearch, isSwitch, countPage)
      .then((respGetUsers) => {
        dispatch(countPageUpdate(1));
        dispatch(usersUpdate(respGetUsers.usersData));
      })
      .catch((error: IError) => {
        setErrorLog(error.message);
      })
      .finally(() => {
        dispatch(isLoadingUpdate(false));
      });
  };

  return (
    <S.Content>
      <S.FilterTitle>Отфильтровать по количеству репозиториев</S.FilterTitle>
      <S.ButtonBox>
        <S.FilterButton
          disabled={isLoading}
          $isActive={isFilter && true}
          onClick={() => switchFilter(true)}
        >
          От большего к меньшему
        </S.FilterButton>
        <S.FilterButton
          disabled={isLoading}
          $isActive={!isFilter && true}
          onClick={() => switchFilter(false)}
        >
          От меньшего к большему
        </S.FilterButton>
      </S.ButtonBox>
    </S.Content>
  );
}

export default Filter;
