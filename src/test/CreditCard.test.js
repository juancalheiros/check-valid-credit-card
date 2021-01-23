import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react';
import TextField from '@material-ui/core/TextField'
import Enzyme ,{shallow} from "enzyme"
import Adapter from 'enzyme-adapter-react-16';
import {canHaveError, menssageValidation, NumberCreditCard} from '../Component'
import { Reducers } from '../reducers'

Enzyme.configure({ adapter: new Adapter() })

describe( "menssageValidation", () =>{
    it("Should return the menssage 'Number credit card invalid' when have error", ()=>{
        const value = 15
        const error = true
        const expected = "Number credit card invalid"

        const resp = menssageValidation(value,error)
    
        expect(resp).toStrictEqual(expected)
    })

    it("Should return the menssage 'Number credit card valid' when don`t have error", ()=>{
        const value = 15
        const error = false
        const expected = "Number credit card valid"

        const resp = menssageValidation(value,error)
    
        expect(resp).toStrictEqual(expected)
    })

    it("Should return undefined when value is null", ()=>{
        const value = null
        const error = false

        const resp = menssageValidation(value,error)
    
        expect(resp).toBeUndefined()
    })

    it("Should return undefined when value is defined empty string", ()=>{
        const value = ''
        const error = false

        const resp = menssageValidation(value,error)
    
        expect(resp).toBeUndefined()
    })

})

describe("canHaveError", () => {
    it("Should return false when currentValue is null", () => {
        const currentValue = null
        const error = false

        const resp = canHaveError(currentValue,error)

        expect(resp).toBeFalsy()
    })

    it("Should return false when currentValue have lenght equals 0", () => {
        const currentValue = ""
        const error = true

        const resp = canHaveError(currentValue,error)

        expect(resp).toBeFalsy()
    })

    it("Should return true when have error", () => {
        const currentValue = "12"
        const error = true

        const resp = canHaveError(currentValue,error)

        expect(resp).toBeTruthy()
    })

    it("Should return false when not have error", () => {
        const currentValue = "12"
        const error = false

        const resp = canHaveError(currentValue,error)

        expect(resp).toBeFalsy()
    })
})

describe("NumberCreditCard", () => {

    const renderWithRedux = (
        component,
        {store = createStore(Reducers)} = {}
    ) => {
        return {
            ...render(<Provider store={store}>{component}</Provider>),
            store,
        }
    }

    it("Should return TextField component", () => {
        const props = {
            currentValue: null,
            error: false,
        }
        
        const { container } = renderWithRedux(<NumberCreditCard {...props}/>)
        
        console.log(container)
        expect(container).toHaveLength(2)
    })
})