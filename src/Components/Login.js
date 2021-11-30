import React from 'react'

function Login() {
    return (
<div> 
<div class="wrapper fadeInDown">
  <div id="formContent">
   

   
    <div class="fadeIn first">
      <img src="./images/logo.png" id="icon" alt="User Icon" />
      {/* <h1>Aroking</h1> */}
    </div>

    
    <form>
      <input type="text" id="login" class="fadeIn second" name="login" placeholder="username"/>
      <input type="text" id="password" class="fadeIn third" name="login" placeholder="password"/>
      <input type="submit" class="fadeIn fourth" value="Log In"/>
    </form>


  </div>
</div>
</div>
    )
}

export default Login
