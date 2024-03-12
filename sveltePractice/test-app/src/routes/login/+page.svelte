<div class="form">

    <div id="login">
      <h1>Welcome Back!</h1>
      <form action="/" method="post">
        <div class="field-wrap">
          <input type="email" required placeholder="Email" />
        </div>
        <div class="field-wrap">
          <input type="password" required placeholder="Password" />
        </div>
        <p class="forgot"><a href="https://www.web-leb.com/code">Forgot Password?</a></p>
        <button class="button button-block">Login</button>
      </form>
    </div>
  </div>

<style>
  @import url(https://fonts.googleapis.com/css?family=Poppins:300);
 *, *:before, *:after {
	 box-sizing: border-box;
}
 body {
  height: 100vh;
	 background: #01939c;
   overflow-y: hidden!important;
	 font-family: 'Poppins', sans-serif;
}
 a {
	 text-decoration: none;
	 color: #01939c;
	 transition: 0.5s ease;
}
 a:hover {
	 color: #179b77;
}
 .form {
	 background: #12141d;
	 padding: 40px;
	 max-width: 600px;
	 margin: 40px auto;
	 border-radius: 15px;
	 box-shadow: 0 4px 10px 4px rgba(19, 35, 47, .3);
}
 h1 {
	 text-align: center;
	 color: #fff;
	 font-weight: 300;
	 margin: 0 0 40px;
}
 input, textarea {
	 font-size: 17px;
	 display: block;
	 width: 100%;
	 height: 100%;
	 padding: 5px 10px;
	 background: none;
	 background-image: none;
	 border: 1px solid #01939c;
	 color: #fff;
	 border-radius: 6px;
	 transition: border-color 0.25s ease, box-shadow 0.25s ease;
}
 textarea {
	 border: 2px solid #01939c;
	 resize: vertical;
}
 .field-wrap {
	 position: relative;
	 margin-bottom: 40px;
}

 .button {
	 border: 0;
	 outline: none;
	 border-radius: 15px;
	 padding: 15px 0;
	 font-size: 20px;
	 font-weight: 400;
	 letter-spacing: 0.1em;
	 background: #01939c;
   cursor: pointer;
	 color: #fff;
	 transition: all 0.5s ease;
	 -webkit-appearance: none;
}
 .button:hover, .button:focus {
	 background: #025c61;
}
 .button-block {
	 display: block;
	 width: 100%;
}
 .forgot {
	 margin-top: -20px;
	 text-align: right;
}
 

</style>
