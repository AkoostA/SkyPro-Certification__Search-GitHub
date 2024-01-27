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
  incomplete_results: boolean;
  items: IUsers[];
  total_count: number;
}

export interface IPropsFilter {
  isFilter: boolean;
}

export interface IPropsSearch {
  errorLog: string;
  setErrorLog: React.Dispatch<React.SetStateAction<string>>;
}

export interface IPropsCards {
  setErrorLog: React.Dispatch<React.SetStateAction<string>>;
}

export interface IPropsButtonSearch {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

export interface IHooksUsers {
  userName: string;
  isFilter: boolean;
  dispatch: Function;
  setErrorLog: React.Dispatch<React.SetStateAction<string>>;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IError {
  message: string;
}
