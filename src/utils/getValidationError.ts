import { TypeWithKey } from './../models/TypeWithKey';


export const getValidatorError = (errorCode: string) => {
  const codeMatcher: TypeWithKey<string> = {
    'ERR_NETWORK': 'Ocurrio un error de red'
  }

  return codeMatcher[errorCode]
}