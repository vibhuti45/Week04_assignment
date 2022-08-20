import React from 'react'

export default function Form() {
  return (

<form className='container'>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Name </label>
    <input type="txt" className="form-control2" id="exampleInputPassword1" placeholder="Name"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Room no.</label>
    <input type="txt" className="form-control3" id="exampleInputPassword1" placeholder="Room no."/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Phone No.</label>
    <input type="txt" className="form-control4" id="exampleInputPassword1" placeholder="Phone No."/>
  </div>
  
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn-btn-primary">Submit</button>
</form>
)
}

