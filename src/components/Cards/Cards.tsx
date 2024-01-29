import * as S from "./Cards.styled";
import { getUser } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { usersSelector } from "../../store/selectors/selectors";
import { IError, IPropsCards, IUsers } from "../../interface/interface";
import { isLoadingUpdate, userUpdate } from "../../store/reducers/reducers";

function Cards({ setErrorLog }: IPropsCards) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users: IUsers[] = useSelector(usersSelector);

  const userInfo = (user: IUsers) => {
    dispatch(isLoadingUpdate(true));
    getUser(user.login)
      .then((userData) => {
        dispatch(userUpdate(userData));
        navigate("/user");
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
      {users.map((user) => (
        <S.CardsUser key={user.id}>
          <S.UserTitle>{user.login}</S.UserTitle>
          <S.UserImg src={user.avatar_url} alt="avatar"></S.UserImg>
          <S.UserButton onClick={() => userInfo(user)}>Подробная информация</S.UserButton>
        </S.CardsUser>
      ))}
    </S.Content>
  );
}

export default Cards;
