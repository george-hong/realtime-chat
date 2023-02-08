interface IHeaderConfigItem {
  content: string;
  isIcon?: boolean;
  onClick?: () => unknown;
}

export interface IHeaderConfig {
  title: IHeaderConfigItem;
  left?: IHeaderConfigItem;
  right?: IHeaderConfigItem;
}