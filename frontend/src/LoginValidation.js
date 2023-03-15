function Validation(values) {
  let error = {};

  // just check the youtube on 20:37 -https://www.youtube.com/watch?v=F53MPHqOmYI
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const password_pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (values.email === "") {
    error.email = "Name should not be empty"
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email did not match"
  } else {
    error.email = ""
  }

  
  if (values.password === "") {
    error.password = "Password should not be empty"
  } else if (!password_pattern.test(values.password)) {
    error.password = "Password did not match"
  } else {
    error.password = '';
  }

  return error
}

console.log( "inside validtion: " + Validation)
export default Validation