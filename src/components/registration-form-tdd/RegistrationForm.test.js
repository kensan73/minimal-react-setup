import React from 'react'
import {render} from '@testing-library/react'
import user from "@testing-library/user-event";
import RegistrationForm from "./index";

describe('layout', () => {
    it('has an email editbox', () => {
        const {getByRole} = render(<RegistrationForm />)
        expect(getByRole('textbox', {name: /email address/i}))
    })
    it('has a password editbox', () => {
        const {getByRole} = render(<RegistrationForm />)
        expect(getByRole('textbox', {name: /create password/i}))
    })
    it('has a submit button', () => {
        const {getByRole} = render(<RegistrationForm />)
        expect(getByRole('button', {name: /submit/i}))
    })
})

describe('behavior', () => {
    const stubEmailAddress = 'me@you.com'
    const stubPassword = 'somepassword'
    const stubValues = {
        email: stubEmailAddress, password: stubPassword
    }
    const handleSubmitStub = jest.fn()
    it('calls submitHandler', () => {
        const {getByRole} = render(<RegistrationForm handleSubmit={handleSubmitStub} />)
        user.type(getByRole('textbox', {name: /email address/i}), stubEmailAddress + "{enter}")
        user.type(getByRole('textbox', {name: /create password/i}), stubPassword + "{enter}")
        user.click(getByRole('button'))

        expect(handleSubmitStub).toBeCalledTimes(1)
        expect(handleSubmitStub).toBeCalledWith(stubValues)
    })
})