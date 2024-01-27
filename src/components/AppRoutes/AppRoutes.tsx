import Main from "../../pages/Main/Main";
import UserInfo from "../../pages/User/User";
import { Route, Routes } from "react-router-dom";
import NotFound from "../../pages/NotFound/NotFound";

function AppRoutes() {
  const PATH = "/skypro__search-github";

  return (
    <Routes>
      <Route path={PATH} element={<Main />} />
      <Route path={`${PATH}/:id`} element={<UserInfo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
