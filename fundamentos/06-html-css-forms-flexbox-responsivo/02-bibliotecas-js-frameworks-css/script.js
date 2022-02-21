let picker = new Pikaday({
  field: document.getElementById('travel-date'),
  format: 'DD/MM/YYYY',
  firstDay: 0,
  minDate: new Date(),
  onSelect: function() {
    console.log(this.getMoment().format('Do MMMM YYYY'));
  }
});
