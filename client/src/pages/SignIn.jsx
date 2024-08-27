import './SignIn.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

function SignIn() {
  return (
    <div className='SignIn'>
      <h1>Sign In</h1>
      <form className='sign-in-form'>
        <Grid container direction={"column"} spacing={2}>
          <Grid item>
            <TextField id='outlined-basic-email' fullWidth label='Email' variant='outlined' />
          </Grid>
          <Grid item>
            <TextField id='outlined-basic-password' fullWidth type='password' label='Password' variant='outlined' />
          </Grid>
          <Grid item>
            <Button variant="contained">Sign in</Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default SignIn