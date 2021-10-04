import { AxiosHttpClient } from "@/infra/http/axios-http-client"
import { mockAxios } from "@/tests/infra"
import { mockPostRequest } from "@/tests/data/mock-http-post"
import axios from "axios"


jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}
const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()
  return {
    sut,
    mockedAxios
  }
}


describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const postRequest = mockPostRequest()
    const {sut, mockedAxios} = makeSut()
    sut.post(postRequest)
    expect(mockedAxios.post).toHaveBeenCalledWith(postRequest.url, postRequest.body)
  })

  test('Should return the correct statusCode and body', () => {
    const {sut, mockedAxios} = makeSut()
    const promise = sut.post(mockPostRequest())
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
  })
})