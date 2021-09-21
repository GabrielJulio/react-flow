import { AxiosHttpClient } from "@/infra/http/axios-http-client"
import axios from "axios"
import faker from "faker"


const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('AxiosHttpClient', () => {
  test('Should call axios with correct URL and verb', async () => {
    const url = faker.internet.url()
    const sut = makeSut()
    sut.post({ url })
    expect(mockedAxios.post).toHaveBeenCalledWith(url)
    
  })
  
})