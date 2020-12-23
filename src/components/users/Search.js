import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
    
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        
        if(text === '')
        {
            alertContext.setAlert('Please Enter Something', 'light');
            //this is an alert showing that input is empty
        }else
        {
            
            githubContext.searchUsers(text);
            setText('');
        }
       
    }
    const onChange = (e) => 
    {
        setText(e.target.value);
         // getting value from input field 
    }
        return (
            <div>
               <form onSubmit={onSubmit} className="form">
                   <input 
                   type="text" 
                   name="text" 
                   placeholder="Search Users...."
                   value={text}
                   onChange={onChange} />

                   <input type="submit" value="Search" className="btn btn-dark btn-block"/>
               </form> 
               
               {githubContext.users.length > 0  && (
                <button 
                    className= "btn btn-light btn-block" 
                    onClick={githubContext.clearUsers}>
                    Clear</button>
               )} 
               
            </div>
        )
    }


//Search.propTypes = {
  //  setAlert: PropTypes.func.isRequired
//}; 
    // it is not necessary to mention each datatype of functions but you can use for big projects
   // it tells only the datatype of objects that you use in project - array,number etc

export default Search;