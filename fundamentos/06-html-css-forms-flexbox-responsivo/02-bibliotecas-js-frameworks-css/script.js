// Biblioteca Data
let picker = new Pikaday({
  field: document.getElementById('travel-date'),
  format: 'DD/MM/YYYY',
  firstDay: 0,
  minDate: new Date(),
  onSelect: function() {
    console.log(this.getMoment().format('Do MMMM YYYY'));
  }
});

// Biblioteca validação das informações
const validation = new JustValidate('#form', {
  errorFieldCssClass: 'is-invalid',
  errorFieldStyle: {
    border: '1px solid red',
  },
  errorLabelCssClass: 'is-label-invalid',
  errorLabelStyle: {
    color: 'red',
    textDecoration: 'underlined',
  }
});

validation
  .addField('#name-surname', [
    {
      rule: 'minLength',
      value: 10,
    },
    {
      rule: 'maxLength',
      value: 40,
    },
    {
      rule: 'required',
      errorMessage: 'Field is required',
    },
  ])
  .addField('#email', [
    {
      rule: 'minLength',
      value: 10,
    },
    {
      rule: 'maxLength',
      value: 50,
    },
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
    {
      rule: 'required',
      errorMessage: 'Field is required',
    },
  ])
  .addField('#why-text', [
    {
      rule: 'minLength',
      value: 5,
    },
    {
      rule: 'maxLength',
      value: 500,
    },
    {
      rule: 'required',
      errorMessage: 'Field is required',
    },
  ])
  .addField('#info-agreement', [
    {
      rule: 'required',
    },
  ]);
