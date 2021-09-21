import { HttpResponse } from ".";


export type HttpPostParams<T> = {
  url: string
  body?: T
}

export interface HttpPostClient<T, TR> {
  post(params: HttpPostParams<T>): Promise<HttpResponse<TR>>
}
