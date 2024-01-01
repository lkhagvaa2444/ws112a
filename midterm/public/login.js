const Ui = {}

Ui.id = function(path) {
  return document.getElementById(path)
}

Ui.one = function(path) {
  return document.querySelector(path)
}

Ui.show = function (html) {
  Ui.id('main').innerHTML = html
}

Ui.goto = function (hash) {
  window.location.hash = hash
}

window.onhashchange = async function () {
    var tokens = window.location.hash.split('/')
    switch (tokens[0]) {
        case '#signup':
            await sign()
            break
        case '#login':
            await login()
            break
    }
}

window.onload = function () {
    window.onhashchange()
  }

  async function login() {
    Ui.show(`
    <!DOCTYPE html>
    <html>
        <head>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap" rel="stylesheet">
            <style>         
                body {
                  background-color: #f2f2f2;
                  font-family: 'Poppins', sans-serif;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  height: 100vh;
                  margin: 0;
                }
                
                .container {
                  background-color: #fff;
                  border-radius: 8px;
                  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                  overflow: hidden;
                  width: 350px;
                }
                
                .title {
                  background-color: #3498db;
                  color: #fff;
                  font-size: 24px;
                  font-weight: bold;
                  padding: 20px;
                  text-align: center;
                }
                
                .form_wrap {
                  padding: 20px;
                }
                
                input[type="text"], input[type="password"] {
                  border: 2px solid #3498db;
                  border-radius: 8px;
                  height: 40px;
                  width: 100%;
                  color: #333;
                  font-size: 16px;
                  margin-bottom: 15px;
                  padding: 10px;
                  box-sizing: border-box;
                }
                
                label {
                  color: #555;
                  font-size: 14px;
                  margin-bottom: 5px;
                  display: block;
                }
                
                .btn {
                  background-color: #3498db;
                  color: #fff;
                  font-weight: bold;
                  border: none;
                  border-radius: 8px;
                  cursor: pointer;
                  transition: background-color 0.15s;
                  height: 40px;
                  width: 100%;
                  font-size: 16px;
                }
                
                .btn:hover {
                  background-color: #2c3e50;
                }
                
                .link {
                  text-align: center;
                  margin-top: 15px;
                  font-size: 14px;
                  color: #555;
                }
                
                .link a {
                  color: #3498db;
                  text-decoration: none;
                  font-weight: bold;
                }
              </style>
        </head>
        <body>
            <div class="container">
                <div class="title">
                    Login
                </div>
                <div class="form_wrap">
                    <label for="user">Username</label>
                    <input type="text" name="user" id="user" required/>
                    
                    <label for="password">Password</label>
                    <input type="password" id="password" required/>

                    <input type="button" class="btn" value="Sign in" id="btn" onclick="serverLogin()">
                </div>
                <div class="link">
                    Don't have an account? <a href='#signup'>Sign up</a>
                </div>
            </div>
        </body>
    </html>
    `);
}

async function sign() {
    Ui.show(`
    <!DOCTYPE html>
    <html>
        <head>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap" rel="stylesheet">
            <style>         
                body {
                  background-color: #f2f2f2;
                  font-family: 'Poppins', sans-serif;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  height: 100vh;
                  margin: 0;
                }
                
                .container {
                  background-color: #fff;
                  border-radius: 8px;
                  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                  overflow: hidden;
                  width: 350px;
                }
                
                .title {
                  background-color: #e74c3c;
                  color: #fff;
                  font-size: 24px;
                  font-weight: bold;
                  padding: 20px;
                  text-align: center;
                }
                
                .form_wrap {
                  padding: 20px;
                }
                
                input[type="email"], input[type="text"], input[type="password"] {
                  border: 2px solid #e74c3c;
                  border-radius: 8px;
                  height: 40px;
                  width: 100%;
                  color: #333;
                  font-size: 16px;
                  margin-bottom: 15px;
                  padding: 10px;
                  box-sizing: border-box;
                }
                
                label {
                  color: #555;
                  font-size: 14px;
                  margin-bottom: 5px;
                  display: block;
                }
                
                .btn {
                  background-color: #e74c3c;
                  color: #fff;
                  font-weight: bold;
                  border: none;
                  border-radius: 8px;
                  cursor: pointer;
                  transition: background-color 0.15s;
                  height: 40px;
                  width: 100%;
                  font-size: 16px;
                }
                
                .btn:hover {
                  background-color: #c0392b;
                }
                
                .link {
                  text-align: center;
                  margin-top: 15px;
                  font-size: 14px;
                  color: #555;
                }
                
                .link a {
                  color: #e74c3c;
                  text-decoration: none;
                  font-weight: bold;
                }
              </style>
        </head>
        <body>
            <div class="container">
                <div class="title">
                    Sign up
                </div>
                <div class="form_wrap">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" required/>
                    
                    <label for="user">Username</label>
                    <input type="text" name="user" id="user" required/>
                    
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" required/>

                    <input type="button" class="btn" value="Sign up" id="btn" onclick="serverSignup()">
                </div>
                <div class="link">
                    Already have an account? <a href='#login'>Sign in</a>
                </div>
            </div>
        </body>
    </html>
    `);
}

async function serverLogin() {
      let user = Ui.id('user').value
      let password = Ui.id('password').value
      let r = await Server.post('/login', {user, password})
      console.log('serverLogin: r=', r)
      if (r.status == Status.OK) {
        localStorage.setItem('user', user)
        window.location.assign("index.html")
      } else
        alert('Login failed: Please enter the correct account password!')
}

async function serverSignup() {
      let user = Ui.id('user').value
      let password = Ui.id('password').value
      let email = Ui.id('email').value
      let r = await Server.post('/signup', {user, password, email})
      console.log('serverLogin: r=', r)
        if (r.status == Status.OK) {
          alert('Registration successful, start logging in!')
          Ui.goto('#login')
        } else {
          alert('Registration failed, please choose another username!')
        }
}

      const Server = {}

      Server.get = async function(path) {
        let r = await window.fetch(path, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        return {status:r.status, obj:await r.json()}
      }
      
      Server.post = async function(path, params) {
        let r = await window.fetch(path, {
          body: JSON.stringify(params),
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        return {status:r.status, obj:await r.json()}
      }    
    const Status = {
      OK:200,
      Fail:400,
      Unauthorized:401,
      Forbidden:403,
      NotFound:404,
  }


  

  
