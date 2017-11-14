var car = {
  make: "Tesla",
  model: "model s",
  electric: true,
  year: 2017,
  features: ['adaptive lighting', 'full-led', 'self-driving', 68000, 250],
  driver: function(name) {
    console.log(name + " will be driving the car today");
  }
}

car.driver("momo");
