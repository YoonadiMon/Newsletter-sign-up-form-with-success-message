let email;

function changePage() {
  // let pageContent = page.innerHTML;
  // console.log(pageContent);
  const page = document.querySelector('#wrapper');
  page.innerHTML = `
  <article id="thanksCard"><div id="img"><img src="assets/images/icon-list.svg" alt="icon-list"></div><h1>Thanks for subscribing!</h1><p>A confirmation email has been sent to <b>${email}</b>. Please open it and click the button inside to confirm your subscription.</p><button>Dismiss message</button></article>
  `
}

function validateEmail(checkEmail) {
  var re = /\S+@\S+\.\S+/;
  return re.test(checkEmail);
}


function checkValid() {
  const inputEl = document.querySelector('#emailInput');
  email = inputEl.value;
  if (!email || !validateEmail(email)) {
    let labelArea = document.querySelector('#EmailText');
    console.log(labelArea.innerHTML);
    labelArea.innerHTML += `<span id="invalidEmail">Valid email required</span>`;
    console.log('empty or wrong email format');
    inputEl.classList.add("errorInput");
  }
  else {
    console.log('not empty');
    changePage();
  }
}