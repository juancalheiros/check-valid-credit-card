import { numberCreditCardIsValid } from '../Component/ValidateNumberCreditCard'


export const TYPING_UPDATE_VALUE = 'TYPING_UPDATE_VALUE'
export const typingField = value => ({
    type: TYPING_UPDATE_VALUE,
    newValue: value,
    error: !numberCreditCardIsValid(value)
})