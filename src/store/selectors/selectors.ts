const mainSelector = (store: { store: any }) => store.store;

export default mainSelector;

export const userSelector = (store: { store: any }) => mainSelector(store).user;
export const usersSelector = (store: { store: any }) => mainSelector(store).users;
export const isFilterSelector = (store: { store: any }) => mainSelector(store).isFilter;
export const isLoadingSelector = (store: { store: any }) => mainSelector(store).isLoading;
export const countPageSelector = (store: { store: any }) => mainSelector(store).countPage;
export const totalCountSelector = (store: { store: any }) => mainSelector(store).totalCount;
export const userSearchSelector = (store: { store: any }) => mainSelector(store).userSearch;
