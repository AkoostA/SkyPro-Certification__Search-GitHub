import { IUser, IResp } from "../interface/interface";

const PATH = "https://api.github.com";

export function getUser(userName: string) {
  return fetch(`${PATH}/users/${userName}`)
    .then((respFetch) => {
      statusCheck(respFetch);
      return respFetch.json();
    })
    .then((respUserData) => {
      const userData: IUser = {
        id: respUserData.id,
        url: respUserData.html_url,
        login: respUserData.login,
        avatar: respUserData.avatar_url,
        created: respUserData.created_at,
        followers: respUserData.followers,
        repository: respUserData.public_repos,
      };
      return userData;
    });
}

export function getUsers(userName: string, isFilter: boolean, countPage: number) {
  const page = `&page=${countPage}`;
  const per_page = "&per_page=12";
  const sort = "&sort=repositories";
  const order = `&order=${isFilter ? "desc" : "asc"}`;
  const uriComponent = encodeURIComponent(`${userName} in:login`);
  const encode = uriComponent + page + sort + order + per_page;
  return fetch(`${PATH}/search/users?q=${encode}`, {
    method: "GET",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  })
    .then((respFetch) => {
      statusCheck(respFetch);
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

function statusCheck(respFetch: Response) {
  if (respFetch.status === 403) throw new Error("Превышено количество запросов, повторить позднее");
  if (respFetch.status === 422) throw new Error("Ошибка на сервере, повторить позднее");
  if (respFetch.status === 503) throw new Error("Сервер не доступен, повторить позднее");
}
