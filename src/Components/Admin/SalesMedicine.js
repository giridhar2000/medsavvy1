import React, { Component } from 'react'

export default class SalesMedicine extends Component {
  render() {
    return (
        <div className='container'>
        <div  class="row customer">
        <div class="col-md-6 offset-md-3">
          <div class="card my-5">
  
            <form class="card-body cardbody-color p-lg-5">
  
              <div style={{marginBottom: '5vh'}} class="text-center">
                  <h2 style={{color: '#2dafa9'}}>Sales Medicine</h2>
              </div>

              <div class="mb-3">
                <input type="text" class="form-control" id="Medname" placeholder="Start Date" required></input>
              </div>

              <div class="mb-3">
                <input type="text" class="form-control" id="Medbcode" placeholder="End Date" required></input>
              </div>

              <div class="text-center"><button type="submit" id='btn-color' class="btn btn-color px-5 mb-5 w-100">Submit</button></div>
              <div class="text-center"><button type='cancel' id='btn-color' class="btn btn-color px-5 mb-5 w-100">Cancel</button></div>

            </form>
          </div>
        </div>

      </div>
      <table>
        
      </table>
      </div>
    )
  }
}
