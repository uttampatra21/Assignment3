const signUp = `
<form action="">
            <h2>Sign Up</h2>
            <div class="name">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div class="details">
              <div class="sec">
                <input type="email" name="" id="" placeholder="Email" />
                <input type="password" name="" id="" placeholder="Password" />
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Confirm Password"
                />
              </div>
              <div class="personal">
                <div class="age">
                  <label for="">Age</label>
                  <input type="number" />
                </div>

                <div class="gender">
                  <div class="male">
                    <label for="">Male</label>
                    <input type="checkbox" name="Male" id="" />
                  </div>
                  <div class="female">
                    <label for="">Female</label
                    ><input type="checkbox" name="Female" id="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="agree">
              <input type="checkbox" name="" id="" /> Agree to term and
              conditions.
            </div>
            <div class="submit">
              <input type="submit" value="Sign Up" />
            </div>

            <div class="sign-in">
              <p>
                Already have an account?
                <span
                  id="signIn"
                  onclick="signIn()"
                  style="text-decoration: underline"
                  >Login here</span
                >
              </p>
            </div>
          </form>
`;

const logIn = `
<form action="">
            <h2>Log In</h2>
           
            <div class="details">
              <div class="sec">
                <input type="email" name="" id="" placeholder="Email" />
                <input type="password" name="" id="" placeholder="Password" />
                
              </div>
              

                
              
            </div>
            
            <div class="submit">
              <input type="submit" value="Sign In" />
            </div>

            <div class="sign-in">
              <p>
                Didn't have an account?
                <span
                  id="signIn"
                  onclick="signUpNow()"
                  style="text-decoration: underline"
                  >Sign Up</span
                >
              </p>
            </div>
          </form>
`;
const signUpHtml = (document.getElementById("signUp").innerHTML = signUp);
const signIn = () => {
  document.getElementById("signUp").innerHTML = logIn;
};
const signUpNow = () => {
  document.getElementById("signUp").innerHTML = signUp;
};
