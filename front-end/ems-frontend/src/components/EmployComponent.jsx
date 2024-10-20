import React, { useState } from 'react'
import { createEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const EmployComponent = () => {

    const navigator = useNavigate();
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState({});

    function handleFirstName(e) {
        setFirstName(e.target.value)
    }

    function handleLastName(e) {
        setLastName(e.target.value)
    }

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function saveEmployee(e) {
        e.preventDefault()
        const employee = { firstName, lastName, email }


        createEmployee(employee).then((response) => {
            navigator("/added-employee")
            console.log(response)
        }).catch((error) => {
            if (error.response) {
                if (error.response.status === 409) {
                    setErrors({ email: error.response.data });
                } else if (error.response.data) {
                    const errorMessages = {};
                    if (Array.isArray(error.response.data)) {
                        error.response.data.forEach((err) => {
                            errorMessages[err.field] = err.message;
                        });
                    }
                    setErrors(errorMessages);
                }
            }
        });
    }

    return (

        <div className='container vh-100  d-flex flex-column justify-content-center' >

            <div className="row">

                <div className="card">
                    <h2 className='text-center'>Add new employee</h2>

                    <div className="card-body">
                        <form >

                            <div className="form-group mb-2">
                                <label className='form-label'>
                                    First name:
                                </label>

                                <input
                                    type="text"
                                    placeholder='Enter with employee first name'
                                    name='firstName'
                                    value={firstName}
                                    className='form-control'
                                    onChange={handleFirstName}

                                />

                                {errors.firstName && <div className="text-danger">{errors.firstName}</div>}

                            </div>

                            <div className="form-group mb-2">

                                <label className='form-label'>
                                    Last name:
                                </label>
                                <input
                                    type="text"
                                    placeholder='Enter with employee last name'
                                    name='lastName'
                                    value={lastName}
                                    className='form-control'
                                    onChange={handleLastName}

                                />

                                {errors.lastName && <div className="text-danger">{errors.lastName}</div>}

                            </div>

                            <div className="form-group mb-2">

                                <label className='form-label'>
                                    Email:
                                </label>
                                <input
                                    type="text"
                                    placeholder='Enter with employee email'
                                    name='email'
                                    value={email}
                                    className='form-control'
                                    onChange={handleEmail}

                                />
                                {errors.email && <div className="text-danger">{errors.email}</div>}

                            </div>


                            <div className="d-flex justify-content-center align-items-center">
                                <button className="btn btn-success" onClick={saveEmployee}>
                                    send
                                </button>
                            </div>


                        </form>
                    </div>

                </div>


            </div>


        </div>
    )
}

export default EmployComponent