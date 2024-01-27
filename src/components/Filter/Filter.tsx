import * as S from "./Filter.styled";
import { IPropsFilter } from "../../interface/interface";
import { useDispatch } from "react-redux";
import { isFilterUpdate } from "../../store/reducers/reducers";

function Filter({ isFilter }: IPropsFilter) {
  const dispatch = useDispatch();

  return (
    <S.FilterContent>
      <S.FilterTitle>Отфильтровать по количеству репозиториев</S.FilterTitle>
      <S.FilterButton $isActive={isFilter && true} onClick={() => dispatch(isFilterUpdate())}>
        От большего к меньшему
      </S.FilterButton>
      <S.FilterButton $isActive={!isFilter && true} onClick={() => dispatch(isFilterUpdate())}>
        От меньшего к большему
      </S.FilterButton>
    </S.FilterContent>
  );
}

export default Filter;
