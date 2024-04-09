const button = document.querySelector('button');

function getAge() {
  const data = new Date();
  const year = data.getFullYear();
  const inputYear = document.querySelector('#txtyear');
  return year - inputYear.value;
}

function getGender() {
  const sex = document.getElementsByName('radsex');
  return sex[0].checked ? 'Masculino' : 'Feminino';
}

function getImage(age, gender) {
  const stage = age < 10 ? 'baby' : age <= 20 ? 'young' : age < 50 ? 'adult' : 'old';
  const src = `images/${stage}-${gender.charAt(0).toLowerCase()}.png`;
  const img = document.createElement('img');
  img.setAttribute('src', src);
  img.setAttribute('id', 'photo');
  return img;
}

function displayResult() {
  const age = getAge();
  const gender = getGender();
  const res = document.querySelector('#res');
  const img = getImage(age, gender);
  res.innerHTML = `Detectamos ${gender} com ${age} anos.`;
  res.appendChild(img);
}

function verification() {
  const inputYear = document.querySelector('#txtyear');
  if (inputYear.value == 0 || isNaN(inputYear.value)) {
    alert('[ERROR] Verifique os dados e tente novamente!');
  } else {
    displayResult();
  }
}

button.addEventListener('click', verification);
