export interface ResponseData<T> {
  error?: {
    status: number;
    message: string;
  };
  response: T;
  success: boolean;
}
