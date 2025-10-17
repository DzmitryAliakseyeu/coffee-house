export interface ButtonI {
  parent: HTMLElement;
  className: string;
  action: () => void;
  text: string;
  hasIcon?: boolean;
  isHtml?: boolean;
}
