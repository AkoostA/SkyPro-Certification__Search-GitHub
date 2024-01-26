import { IUser, IResp } from "../interface/interface";

const PATH = "https://api.github.com";

export function getUser(userName: string) {
  return fetch(`${PATH}/users/${userName}`)
    .then((respFetch) => {
      if (respFetch.status === 403 || respFetch.status === 422)
        throw new Error("Ошибка на сервере, попробуйте повторить позднее");
      if (respFetch.status === 503)
        throw new Error("Сервер не доступен, попробуйте повторить позднее");
      return respFetch.json();
    })
    .then((respUserData) => {
      const userData: IUser = {
        url: respUserData.html_url,
        login: respUserData.login,
        avatar: respUserData.avatar_url,
        created: respUserData.created_at,
        followers: respUserData.followers,
      };
      return userData;
    });
}

export function getUsers(userName: string, isFilter: boolean) {
  const page = "&page=1";
  const per_page = "&per_page=10";
  const sort = "&sort=repositories";
  const order = `&order=${isFilter ? "desc" : "asc"}`;
  const uriComponent = encodeURIComponent(`${userName} in:login`);
  const encode = uriComponent + page + sort + order + per_page;
  return fetch(`${PATH}/search/users?q=${encode}`)
    .then((respFetch) => {
      if (respFetch.status === 403 || respFetch.status === 422)
        throw new Error("Ошибка на сервере, попробуйте повторить позднее");
      if (respFetch.status === 503)
        throw new Error("Сервер не доступен, попробуйте повторить позднее");
      return respFetch.json();
    })
    .then((respUsersData: IResp) => {
      if (respUsersData.items.length === 0)
        throw new Error("Пользователя с таким логином не найдено");
      const usersData = respUsersData.items.map((user) => {
        return {
          id: user.id,
          login: user.login,
          avatar_url: user.avatar_url,
        };
      });
      return { usersData, total_count: respUsersData.total_count };
    });
}
