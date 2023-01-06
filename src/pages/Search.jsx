import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Footer } from '../components'
import NavBar from '../components/NavBar'
import useFetch from '../hooks/useFetch'
import"./user.css"
export default function Search() {
    const searchQuery =useLocation().search
    const searchParams=new URLSearchParams(searchQuery)
    const search = searchParams.get("users")
    let url = `https://api.github.com/search/users?q=${search}`;
    const {state}=useFetch(url)
    const{loading,docs}=state
    if (docs?.items<1) {
      return (
        <>
          <NavBar />
          <p className='nousers'>No users found</p>
          <Footer />
        </>
      );
    
    }
  return (
    <>
    <NavBar/>
      <div className="slide">
        {docs.items &&
          docs?.items.map((user) => (
            <li key={user.login} className="user_card">
              <img src={user.avatar_url} alt="" className="usercard_img" />
              <p>{user.login}</p>
              <Link to={`/${user.login}`} className="more">
                more
              </Link>
            </li>
          ))}
      </div>
    </>
  );
}
