import { HttpPostClient, HttpPostParams } from "@/data/protocols/http/http-post-client"
import { HttpResponse, HttpStatusCode } from "@/data/protocols/http/http-response"


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