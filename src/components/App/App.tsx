import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppRoutes from "../AppRoutes/AppRoutes";
import { localStorageUpdate } from "../../store/reducers/reducers";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(localStorageUpdate());
  }, [dispatch]);

  return <AppRoutes />;
}

export default App;
