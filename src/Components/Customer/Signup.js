import { useFormik } from 'formik'
import React from 'react'

export default function Signup() {
  const initialValues = {
    username: '',
    firstName: '',
    lastName: '',
    password:''
  }

  const onSubmit = values => {
    alert(JSON.stringify(values, null, 2));
  }

  const validate = values => {
    const errors = {}
    if (!values.username) {
      errors.username = 'username required';
    } else if (values.username.length > 15) {
      errors.username = 'Must be 15 characters or less';
    }

    if (!values.firstName) {
      errors.firstName = 'firstName required';
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
      errors.lastName = 'lastName required';
    } else if (values.lastName.length > 15) {
      errors.lastName = 'Must be 15 characters or less';
    }
  
    if (!values.password) {
      errors.password = 'password required';
    } else if (values.password.length < 8) {
      errors.password = 'Must be 8 characters or more';
    }
    return errors;
  }

  const formik = useFormik ({
    initialValues,
    onSubmit,
    validate
  })
  return (
    <div className='container'>
    <div  class="row customer">
    <div class="col-md-6 offset-md-3">
      <div class="card my-5">

        <form onSubmit={formik.handleSubmit} class="card-body cardbody-color p-lg-5">

          <div style={{marginBottom: '5vh'}} class="text-center">
              <h2 style={{color: '#2dafa9'}}>Signup for a new account</h2>
          </div>

          <div class="mb-3">
            <input type="text" class="form-control" id="Username" name="username" placeholder="Username*" onChange={formik.handleChange}
                value={formik.values.username}></input>
                {formik.errors.username ? <div className='error'>{formik.errors.username}</div> : null}
          </div>
          <div class="mb-3">
            <input type="text" class="form-control" id="firstName" name="firstName" placeholder="First Name*" onChange={formik.handleChange}
                value={formik.values.firstName}></input>
                { formik.errors.firstName ? <div className='error'>{formik.errors.firstName}</div> : null}
          </div>
          <div class="mb-3">
            <input type="text" class="form-control" id="lastName" name="lastName" placeholder="Last Name*" onChange={formik.handleChange}
                value={formik.values.lastName}></input>
                { formik.errors.lastName ? <div className='error'>{formik.errors.lastName}</div> : null}
          </div>
          <div class="mb-3">
            <input type="password" class="form-control" id="password" name="password" placeholder="password*" onChange={formik.handleChange}
                value={formik.values.password}></input>
                { formik.errors.password ? <div className='error'>{formik.errors.password}</div> : null}
          </div>
          <div class="text-center"><button type="submit" id='btn-color' class="btn btn-color px-5 mb-5 w-100">Signup</button></div>
          <div id="emailHelp" class="form-text text-center mb-5 text-dark">Already user? <a id='signup' href="/" onClick={() => this.setState({ signup: false, login:true })} class="text-dark fw-bold">Login</a>
          </div>
        </form>
      </div>

    </div>
  </div>
  </div>
  )
}
