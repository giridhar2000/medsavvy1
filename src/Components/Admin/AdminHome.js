import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AdminHome extends Component {
  render() {
    return (
      <div>
        AdminHome
        <Link to='/addmed'>
            <button type="submit" id='btn-color' class="btn btn-color px-5 mb-5 w-100">Add Medicine</button>
        </Link>
        <Link to='/viewmed'>
            <button type="submit" id='btn-color' class="btn btn-color px-5 mb-5 w-100">View Medicine</button>
        </Link>
        <Link to='/delmed'>
            <button type="submit" id='btn-color' class="btn btn-color px-5 mb-5 w-100">Delete Medicine</button>
        </Link>
        <Link to='/salesmed'>
            <button type="submit" id='btn-color' class="btn btn-color px-5 mb-5 w-100">Sales Medicine</button>
        </Link>
      </div>
    )
  }
}
