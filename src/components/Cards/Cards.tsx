import { useState } from "react";
import * as S from "./Cards.styled";
import { getUser } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userUpdate } from "../../store/reducers/reducers";
import { usersSelector } from "../../store/selectors/selectors";
import { IError, IPropsCards, IUsers } from "../../interface/interface";

function Cards({ setErrorLog }: IPropsCards) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users: IUsers[] = useSelector(usersSelector);
  const [isDisabled, sitIsDisabled] = useState<boolean>(false);

  const userInfo = (user: IUsers) => {
    sitIsDisabled(true);
    getUser(user.login)
      .then((userData) => {
        dispatch(userUpdate(userData));
        navigate("/skypro__search-github/user-info");
      })
      .catch((error: IError) => {
        setErrorLog(error.message);
      })
      .finally(() => {
        sitIsDisabled(false);
      });
  };

  return (
    <S.Content>
      {users.map((user) => (
        <S.CardsUser key={user.id}>
          <S.UserTitle>{user.login}</S.UserTitle>
          <S.UserImg src={user.avatar_url} alt="avatar"></S.UserImg>
          <S.UserButton disabled={isDisabled} onClick={() => userInfo(user)}>
            {isDisabled ? "Данные грузятся" : "Подробная информация"}
          </S.UserButton>
        </S.CardsUser>
      ))}
    </S.Content>
  );
}

export default Cards;
