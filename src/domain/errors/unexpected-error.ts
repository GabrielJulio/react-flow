export class UnexpectedError extends Error {
  constructor() {
    super('Algo dAlgo de errado aconteceu. Tente novamente em breve')
    this.name = 'UnexpectedError'
  }
}