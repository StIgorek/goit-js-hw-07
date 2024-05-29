
const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget;
  console.log(email);
  console.log(password);
  if (email.value === "" || password.value === "") {
    return alert('Заповніть, будь ласка, всі поля форми');
  }
  console.log('Email: ${email.value}, Password: ${password.value}');

  const formData = new FormData(event.currentTarget);
  console.log(formData);
  formData.forEach((value, name) => {
    formData[name] = value;
  });

  event.currentTarget.reset();
};


