import React from "react";
import { Box, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {hardCodedUser} from '../dumyDB/index';
const SuccesLogin = () => {

   let navigateToStart = useNavigate()
  const backToStart = () => {
   let path = '/';
   navigateToStart(path)  
  }
  
  let navigateToNav = useNavigate()
  const goToNav = () => {
    let path = '/nav';
    navigateToNav(path)
  }
  return( 
      <Grid sx={{display:'flex' 
      ,justifyContent:'center'
      ,alignItems:'center'}}>

      <Box >
        <h1>Succesfull login :)))</h1>
        <h2>THIS PAGE WILL BE COMING SOON!</h2>
        <Button
                    // type="submit"
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={backToStart}
           >
          BACK TO START PAGE
        </Button>
        <h1>username:{hardCodedUser.username}</h1> 
        <h1>password:{hardCodedUser.password}</h1>
        <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={goToNav}>
          CLICK TO SEE NAVBAR
        </Button>
        
      </Box>
      
      </Grid>
  )
}

export default SuccesLogin;
