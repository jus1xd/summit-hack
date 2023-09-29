export interface IFullMessage {
  id: string;
  phone: string;
  content: string
  callbackUrl: string
  status: "Success" | "Failure"
}

export interface IDataMessage {
  phone: string;
  content: string
  callbackUrl: string
}