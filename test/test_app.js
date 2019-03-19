var chai = require('chai'),
    expect = chai.expect,
    App = require('../app.js');

app = new App();
describe('Inicialización', function() {
  it('debería tener una propiedad', function() {
    expect(app).to.have.property('name');
  })

  it('debería no estar vacía', function() {
    expect(app.name).to.not.be.empty;
  })

  it('debería ser igual a la definida', function() {
    expect(app.name).to.equal("TFG Libre ETSIIT-UGR");
  })


})

