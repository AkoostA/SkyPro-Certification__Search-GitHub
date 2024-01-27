import * as S from "./Header.styled";

function Header() {
  return (
    <S.HeaderContent>
      <S.HeaderTitle>Это приложение создано для финальной адаптации в skypro</S.HeaderTitle>
      <S.HeaderText>Введите логин в поиск что-бы найти пользователей в github</S.HeaderText>
    </S.HeaderContent>
  );
}

export default Header;
