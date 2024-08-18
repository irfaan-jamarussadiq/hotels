import './SignIn.css'

function SignIn() {
  return (
    <div className='SignIn'>
      <h1>Sign In</h1>
      <form className='sign-in-form'>
        <div className='form-field'>
          <label className='form-label' htmlFor='email'>Email</label>
          <input className='form-input' id='email' type='email' placeholder='john.smith@example.com' />
        </div>
        <div className='form-field'>
          <label className='form-label' htmlFor='password'>Password</label>
          <input className='form-input' id='password' type='password' />
        </div>
        <button className='sign-in-btn'>Sign in</button>
      </form>
    </div>
  )
}

export default SignIn