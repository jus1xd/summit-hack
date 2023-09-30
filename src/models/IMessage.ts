export interface IFullMessage {
  id?: string;
  phone: string;
  content: string
  callbackUrl: string
  status: "Success" | "Failure"
}

export interface IDataMessage {
  id?: string
  phone: string;
  message: string
  callback_url: string
}