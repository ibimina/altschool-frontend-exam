import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import"./user.css"
export default function Search() {
    const searchQuery =useLocation().search
    const searchParams=new URLSearchParams(searchQuery)
    const search = searchParams.get("users")
    let url = `https://api.github.com/search/users?q=${search}`;
    const {state}=useFetch(url)
    const{loading,docs}=state
  return (
    <div className='slide'>
      {docs.items &&
        docs?.items.map((user) => (
          <li key={user.login} className="user_card">
            <img src={user.avatar_url} alt=""  className='usercard_img'/>
            <p>{user.login}</p>    
            <Link to={`/${user.login}`} className="more">more</Link>
          </li>
        ))}
    </div>
  );
}
