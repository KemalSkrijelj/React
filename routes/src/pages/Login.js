import { Avatar, Box, Button, Checkbox, CssBaseline, FormControlLabel, Grid, TextField, Typography,Paper } from '@mui/material';

import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const Login = () => {


  const hardCodedUser = {
      username:'admin',
      password:'admin'
  }

  const [userInput, setUserInput] = useState({
      username:'',
      password:''
  })

  const handleSubmit = () => {
      // Treba nam kad kliknemo da se uloguje!
      // NPR NEKI API POZIV ???
      console.log(userInput,"ovo je state!");

  }

  const handleChangeInput = (name,event) => {
      setUserInput({
          ...userInput,
          [name]:event.target.value
      })
  }

  return (
    <Grid sx={{display:'flex' 
    ,justifyContent:'center'
    ,alignItems:'center'
    }} container component="main" >
    <CssBaseline />
    <Grid
      item
      xs={12}
      sm={8}
      md={5}
      component={Paper}
      elevation={1}
      square
    >
      <div >
        <Avatar >
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form  noValidate>
          <TextField
        //   onChange={(event)=>handelAccount("username",event)}
            onChange={(event)=>{handleChangeInput('username',event)}}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
            autoComplete='off'
            initialvalue=''
          />

          <TextField
        //   onChange={(event)=>handelAccount("password",event)}
            initialvalue=''
            autoComplete='off'
            onChange={(event)=>{handleChangeInput('password',event)}}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            // autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            // type="submit"
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            // onClick = {handelLogin}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            {/* <Copyright /> */}
          </Box>
        </form>
      </div>
    </Grid>
  </Grid>
  )
}