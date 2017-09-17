export class Alert {
  type: AlertType;
  message: string;
}

export enum AlertType {
  SUCCESS,
  ERROR,
  INFO,
  WARNING
}
