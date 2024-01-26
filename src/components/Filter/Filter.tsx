import { IPropsFilter } from "../../interface/interface";
import { DivFilter, ButtonFilter, H2Filter } from "./Filter.styled";

function Filter({ isFilter, setIsFilter }: IPropsFilter) {
  return (
    <DivFilter>
      <H2Filter>Отфильтровать по количеству репозиториев</H2Filter>
      <ButtonFilter $isActive={isFilter && true} onClick={() => setIsFilter(true)}>
        От большего к меньшему
      </ButtonFilter>
      <ButtonFilter $isActive={!isFilter && true} onClick={() => setIsFilter(false)}>
        От меньшего к большему
      </ButtonFilter>
    </DivFilter>
  );
}

export default Filter;
