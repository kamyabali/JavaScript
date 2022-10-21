function validation () {
  let fname = document.form1.fname.value
  if (fname == '') {
    alert('enter your first name')
  } else if (!isNaN(fname)) {
    alert('enter alphabet')
  }

  let Male = document.form1.gen[0].checked
  let Female = document.form1.gen[1].checked

  if (Male == false && Female == false) {
    alert('select a gender')
    return false
  }

  let chek1 = document.form1.c1.checked
  let chek2 = document.form1.c2.checked
  let chek3 = document.form1.c3.checked
  if (chek1 == false && chek2 == false && chek3 == false) {
    alert('select hobbies')
    return false
  }

  let city = document.form1.City.value

  if (city == -1) {
    alert('select a city')
    return
  }
  false

  let pass = document.form1.pass.value
  let cpass = document.form1.cpass.value

  if (pass == '') {
    alert('enter password')
    return false
  } else if (
    ';/(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-?;,./{}|":<>[]\\\' ~_]).{8,}/'
  ) {
    alert(
      'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character'
    )
    return false
  }
  if (pass != cpass) {
    alert('password and confrim password does not match')
  }

  let Email = document.form1.Email.value
  if (Email == '') {
    alert('enter Email')
    return false
  }
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)) {
    return true
  } else {
    alert('you have entered an invalid  email address')
    return false
  }

  let mobileno = document.form1.mobileno.value

  if (mobileno == '') {
    alert('enter a mobile no')
    return false
  } else if (isNaN(mobileno)) {
    alert('enter digits')
    return false
  } else if (mno.length < 10) {
    alert('enter 10 digits')
    return false
  } else if (mno.length > 10) {
    alert('enter 10 digits')  
    return false
  } 
}
