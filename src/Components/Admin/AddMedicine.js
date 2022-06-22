import React from 'react'
import { useFormik } from 'formik'

export default function AddMedicine() {
  const initialValues =  {
    Medname: '',
    Medtype: '',
    Medbcode: '',
    Price: '',
    Edate: '',
    Medquantity: ''
  }

  const onSubmit = values => {
    alert(JSON.stringify(values, null, 2));
  }

  const validate = values => {
    const errors = {}
    if (!values.Medname) {
      errors.Medname = 'Medname required';
    }

    if (!values.Medtype) {
      errors.Medtype = 'Medtype required';
    } 
    if (!values.Medbcode) {
      errors.Medbcode = 'Medbcode required';
    } 
  
    if (!values.Price) {
      errors.Price = 'Price required';
    } 

    if (!values.Edate) {
      errors.Edate = 'Edate required';
    } 

    if (!values.Medquantity) {
      errors.Medquantity = 'Medquantity required';
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
          <h2 style={{color: '#2dafa9'}}>Add Medicine</h2>
      </div>

      <div class="mb-3">
        <input type="text" class="form-control" id="Medname" name="Medname" placeholder="Medicine Name" onChange={formik.handleChange}
          value={formik.values.Medname}></input>
          {formik.errors.Medname ? <div className='error'>{formik.errors.Medname}</div> : null}
      </div>
      <div class="mb-3">
        <input type="text" class="form-control" id="Medtype" name="Medtype" placeholder="Medicine Type" onChange={formik.handleChange}
          value={formik.values.Medtype}></input>
          {formik.errors.Medtype ? <div className='error'>{formik.errors.Medtype}</div> : null}
      </div>
      <div class="mb-3">
        <input type="text" class="form-control" id="Medbcode" name="Medbcode" placeholder="Medicine Batch Code" onChange={formik.handleChange}
          value={formik.values.Medbcode}></input>
          {formik.errors.Medbcode ? <div className='error'>{formik.errors.Medbcode}</div> : null}
      </div>
      <div class="mb-3">
        <input type="number" class="form-control" id="Price" name="Price" placeholder="Price" onChange={formik.handleChange}
          value={formik.values.Price}></input>
          {formik.errors.Price ? <div className='error'>{formik.errors.Price}</div> : null}
      </div>
      <div class="mb-3">
        <input type="text" class="form-control" id="Edate" name="Edate" placeholder="Expiry Date" onChange={formik.handleChange}
          value={formik.values.Edate}></input>
          {formik.errors.Edate ? <div className='error'>{formik.errors.Edate}</div> : null}
      </div>
      <div class="mb-3">
        <input type="number" class="form-control" id="Medquantity" name="Medquantity" placeholder="Medicine Quantity" onChange={formik.handleChange}
          value={formik.values.Medquantity}></input>
          {formik.errors.Medquantity ? <div className='error'>{formik.errors.Medquantity}</div> : null}
      </div>
      <div class="text-center"><button type="submit" id='btn-color' class="btn btn-color px-5 mb-5 w-100">Add</button></div>
      <div class="text-center"><button type="cancel" id='btn-color' class="btn btn-color px-5 mb-5 w-100">Cancel</button></div>


    </form>
  </div>

</div>
</div>
</div>
  )
}


