export interface IUser {
  url: string;
  login: string;
  avatar: string;
  created: string;
  followers: number;
}

export interface Item {
  id: number;
  login: string;
  avatar_url: string;
}

export interface IResp {
  incomplete_results: boolean;
  items: Item[];
  total_count: number;
}

export interface IPropsFilter {
  isFilter: boolean;
  setIsFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IPropsSearch {
  isFilter: boolean;
  serErrorLog: React.Dispatch<React.SetStateAction<string>>;
}

export interface IError {
  message: string;
}
