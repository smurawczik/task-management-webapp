export interface UserState {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  roles: any[];
  fetchStatus: UserFetchStatus;
}

export enum UserFetchStatus {
  IDLE,
  LOADING,
  SUCCESS,
  ERROR,
}
