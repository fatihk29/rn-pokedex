export const APP_ROUTER: IAPP_ROUTER = {
  SCREEN: {
    MAIN_PAGE: {
      label: 'Main',
      path: 'main',
    },
    DETAIL_PAGE: { label: 'Detail', path: 'detail' },
    LIST_PAGE: { label: 'List', path: 'list' },
  },
};

export interface IAPPRouterItem {
  path: string;
  label: string;
}

interface IAPP_ROUTER {
  SCREEN: {
    MAIN_PAGE: IAPPRouterItem;
    DETAIL_PAGE: IAPPRouterItem;
    LIST_PAGE: IAPPRouterItem;
  };
}
