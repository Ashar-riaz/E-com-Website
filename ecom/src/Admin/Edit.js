import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarAdmin from './NavbarAdmin';

export default function Edit(props) {
  // const [data, setData] = useState()
  // useEffect(async () => {
  //   let result = await fetch("http://127.0.0.1:8000/api/products/" + props.match.params.id)
  //   result = await result.json();
  //   setData(result);
  // }
  //   , [])
  return (
    <div>
      <NavbarAdmin />
      <h1>Edit Product</h1>
      <form className='container'>
        <div class="mb-3">
          <label for="title" class="form-label">Title</label>
          <input type="text" class="form-control" id="title" />
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <input type="text" class="form-control" id="description" />
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Image</label>
          <input type="file" class="form-control" id="description" />
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">Price</label>
          <input type="number" class="form-control" id="price" />
        </div>
        <div class="mb-3">
          <label for="compare_price" class="form-label">Compare Price</label>
          <input type="number" class="form-control" id="compare_price" />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
