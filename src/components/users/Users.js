import React, { useContext } from 'react';
import UsersItem from './UsersItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = () =>  {
   const githubContext = useContext(GithubContext);
   
   const { loading, users } = githubContext; 
   if(loading)
   {
    return <Spinner/>
   }
   else
   {
        return (
            <div style={userStyle}>
                {users.map(user => (
                    <UsersItem key={user.id} user={user}>  </UsersItem>
                ))}   
            </div>
    )
   }
}


const userStyle ={
    display: 'grid',
    gridTemplateColumns:'repeat(3, 1fr)',
    gridGap: '1rem'
}
export default Users;
