import React from 'react'

const ListEmployeeComponent = () => {

    const employeeData = [
        {
            "id": 1,
            "firstName": "Teste",
            "lastName": "da Silva Sauro",
            "email": "testeDaSilvaSauro@teste.com"
        }, {
            "id": 2,
            "firstName": "Xauton",
            "lastName": "banks",
            "email": "banks@xauton.com"
        },
        {
            "id": 3,
            "firstName": "xarara",
            "lastName": "da Silva",
            "email": "xarara@silva.com"
        }

    ]

    return (
        <div className='container'>

            <h2 className='text-center'>List of employees</h2>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Employee id</th>
                        <th>Employee first name</th>
                        <th>Employee last name</th>
                        <th>Employee email </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employeeData.map(employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}

export default ListEmployeeComponent