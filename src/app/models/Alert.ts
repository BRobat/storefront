export class Alert {
    type: AlertType;
    message: string;
}

export enum AlertType {
    Success,
    Warning,
    Info
}