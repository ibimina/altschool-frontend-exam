import React from 'react'
import { useParams } from 'react-router-dom'
import UserRepo from '../components/UserRepo';
import useFetch from '../hooks/useFetch';
import "./user.css"
export default function User() {
    const {user} = useParams()
      const url = `https://api.github.com/users/${user}`;
      const {state} = useFetch(url)
      const{docs,loading}=state
  return (
    <div>
      <div className="user_bio">
        <img src={docs.avatar_url} alt="" className="user_img" />
        <div className="bio">
          Bio: {docs.bio}
          <a
            href={docs.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="user_link"
          >
            View github profile
          </a>
          <p>Username: {docs.login}</p>
          <p>Company: {docs.company}</p>
          <p>
            Website: <span className="small">{docs.blog}</span>
          </p>
        </div>
      </div>
      <div className="bio_flex">
        <p className="bio_box green">Followers: {docs.followers}</p>
        <p className="bio_box red">Following: {docs.following}</p>
        <p className="bio_box pink">Public Repos: {docs.public_repos}</p>
      </div>
      <UserRepo url={docs.login} />
    </div>
  );
}
