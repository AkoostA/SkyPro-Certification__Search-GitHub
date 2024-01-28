export interface IUser {
  id: number;
  url: string;
  login: string;
  avatar: string;
  created: string;
  followers: number;
  repository: string;
}

export interface IUsers {
  id: number;
  login: string;
  avatar_url: string;
}

export interface IResp {
  items: IUsers[];
  total_count: number;
  incomplete_results: boolean;
}

export interface IPropsFilter {
  setErrorLog: React.Dispatch<React.SetStateAction<string>>;
}

export interface IPropsSearch {
  setErrorLog: React.Dispatch<React.SetStateAction<string>>;
}

export interface IPropsCards {
  setErrorLog: React.Dispatch<React.SetStateAction<string>>;
}

export interface IPropsPagination {
  setErrorLog: React.Dispatch<React.SetStateAction<string>>;
}

export interface IError {
  message: string;
}
