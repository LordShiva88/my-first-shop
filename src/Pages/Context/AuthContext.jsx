import { useState } from "react";
import { createContext } from "react";
import PropTypes from 'prop-types';

export const MyAuthContext = createContext()


const AuthContext = ({children}) => {

  const [getText, setText] = useState('')

  const sortBySearch = (text) =>{
    setText(text)
  }

 

  const passData = {
    sortBySearch,
    getText,
  }


  return(
    <MyAuthContext.Provider value={passData}>
      {children}
    </MyAuthContext.Provider>
  )
  
};
AuthContext.propTypes = {
  children: PropTypes.node.isRequired
};

export default AuthContext;