import * as S from "./Header.styled";

function Header() {
  return (
    <S.Content>
      <S.HeaderTitle>Это приложение создано для финальной адаптации в skypro</S.HeaderTitle>
      <S.HeaderText>Введите логин в поиск что-бы найти пользователей в github</S.HeaderText>
    </S.Content>
  );
}

export default Header;
