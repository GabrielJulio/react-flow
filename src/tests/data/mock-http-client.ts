import { HttpPostClient, HttpPostParams, HttpResponse, HttpStatusCode } from "@/data/protocols/http"


export class HttpPostClientSpy<T, TR> implements HttpPostClient<T, TR> {
  url?: string
  body?: T
  response: HttpResponse<TR> = {
    statusCode: HttpStatusCode.ok
  }

  post(params: HttpPostParams<T>): Promise<HttpResponse<TR>> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve(this.response)
  }
}