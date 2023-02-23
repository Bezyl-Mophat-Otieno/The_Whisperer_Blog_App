import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { Link } from 'react-router-dom';
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searching, setSearching] = useState(false)
  const onFieldChange = (e) => {
    setSearchTerm(e.target.value)
    setSearching(true)
  }
  return (
    // Controlled component
    <div className='col-12 col-md-4 ms-5 mt-5'>
      <form class="d-flex  ">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
          onChange={onFieldChange} value={searchTerm} />
        <Link to={``} ><button class="btn btn-outline-success" type="submit" >
          <FontAwesomeIcon icon={faSearch} /> </button></Link>
      </form>
    </div>
  )
}

export default SearchBar
