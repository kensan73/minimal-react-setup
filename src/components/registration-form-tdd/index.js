import React from 'react'

const RegistrationForm = ({handleSubmit}) => {
    const [formValues, setFormValues] = React.useState({
        email: '', password: ''
    })
    const handleChange = event => {
        const {id, value} = event.target
        setFormValues((prev) => ({
            ...prev,
            [id]: value,
        }))
    }
    return <>
        <label htmlFor='email'>Email address</label>
        <input role='textbox' type="text" id='email' onChange={handleChange}/>
        <label htmlFor='password'>Create Password</label>
        <input role='textbox' type="text" id='password' onChange={handleChange}/>
        <button role='button' onClick={() => {
            handleSubmit(formValues)
        }}>Submit
        </button>
    </>;
}

export default RegistrationForm
export {RegistrationForm}