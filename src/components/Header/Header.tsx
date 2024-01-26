import { DivHeader, H1Header, PHeader } from "./Header.styled";

function Header() {
  return (
    <DivHeader>
      <H1Header>Это приложение создано для финальной адаптации в skypro</H1Header>
      <PHeader>Введите логин в поиск что-бы найти пользователей в github</PHeader>
    </DivHeader>
  );
}

export default Header;
