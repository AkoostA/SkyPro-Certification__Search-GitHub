import * as S from "./User.styled";
import { useSelector } from "react-redux";
import { IUser } from "../../interface/interface";
import { Link, useNavigate } from "react-router-dom";
import { formatCreated } from "../../hooks/formatHooks";
import { userSelector } from "../../store/selectors/selectors";

function User() {
  const navigate = useNavigate();
  const user: IUser = useSelector(userSelector);

  return (
    <S.Content>
      <S.UserCard>
        <S.UserImg src={user.avatar} alt="avatar" />
        <S.UserDetail>
          <S.UserText>Логин: {user.login}</S.UserText>
          <S.UserText>Репозитории: {user.repository}</S.UserText>
          <S.UserText>Подписчики: {user.followers}</S.UserText>
          <S.UserText>Зарегистрирован: {formatCreated(user.created)}</S.UserText>
          <Link to={user.url} target="_blank">
            <S.UserButton>Профиль</S.UserButton>
          </Link>
          <S.UserButton onClick={() => navigate("/")}>Назад к поиску</S.UserButton>
        </S.UserDetail>
      </S.UserCard>
    </S.Content>
  );
}

export default User;
