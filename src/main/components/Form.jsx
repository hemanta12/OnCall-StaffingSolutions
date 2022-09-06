import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form(props) {
    const { formName } = props

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState(null)
    const [userType, setUserType] = useState('')

    const navigate = useNavigate()

    const handleSumbit = (event) => {
        localStorage.setItem('username', username)
        navigate('/auth/bushome')
    }

  return (
          formName && formName === "Register" ? (
              <form className='form'>
                <h3>{ formName }</h3>
                <label>
                Name:
                <input type="text" name="name"
                    onChange={(event) => setName(event.target.value)}/>
                </label>
                <label>
                username:
                <input type="text" name="username"
                    onChange={(event) => setUsername(event.target.value)}/>
                </label>
                <label>
                password:
                <input type="password" name="password"
                    onChange={(event) => setPassword(event.target.value)}/>
                </label>
                <label>
                Business or Individual
                <select onChange={(event) => setUserType(event.target.value) }>
                    <option selected value="individual">Individual</option>
                    <option value="business">Business</option>
                </select>
                </label>
                <button className="btn btn-primary" onClick={handleSumbit}> register </button>
              </form>
          )
          :
          (
              <form className='form'>
                <h3>{ formName }</h3>
                <label>
                    username:
                    <input type="text" name="username" />
                </label>
                <label>
                    password:
                    <input type="password" name="password" />
                </label>
                <button className="btn btn-primary" onClick={handleSumbit}> login </button>
              </form>
          )
  )
}

export default Form
