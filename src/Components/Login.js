import React from 'react'
import '../Styles/style.css'
import { useFormik } from 'formik'

export default function Login() {

  const initialValues= {
    username: '',
    password: ''
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
  
    if (!values.password) {
      errors.password = 'password required';
    } else if (values.password.length < 8) {
      errors.password = 'Must be 8 characters or more';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate

  });

  return (

  <div className='container'>
      <div class="row customer">
      <div class="col-md-6 offset-md-3">
        <div class="card my-5">

          <form onSubmit={formik.handleSubmit} class="card-body cardbody-color p-lg-5">

            <div class="text-center">
              <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile"></img>
            </div>

            <div class="mb-3">
              <input type="text" class="form-control" id="Username" placeholder="User Name*" name='username' onChange={formik.handleChange}
                value={formik.values.username}></input>
                {formik.errors.username ? <div className='error'>{formik.errors.username}</div> : null}
            </div>

            <div class="mb-3">
              <input type="password" class="form-control" id="password" placeholder="password*" name='password' onChange={formik.handleChange}
                value={formik.values.password} ></input>
                {formik.errors.password ? <div className='error'>{formik.errors.password}</div> : null}
            </div>


            <div class="text-center"><button type="submit" id='btn-color' class="btn btn-color px-5 mb-5 w-100">Login</button></div>
            <div id="emailHelp" class="form-text text-center mb-5 text-dark">Not Registered? 
            <a id='signup' href='/signup' class="text-dark fw-bold">Create an Account</a>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
)
}
