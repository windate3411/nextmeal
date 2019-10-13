process.env.NODE_ENV = 'test'


var chai = require('chai');
var sinon = require('sinon');
chai.use(require('sinon-chai'));
const { expect } = require('chai')

// describe('User model', function (done) {
//   it("it is a simple add function", function () {
//     expect(1).to.be.equal(1)
//   })
// })

const {
  sequelize,
  dataTypes,
  checkModelName,
  checkUniqueIndex,
  checkPropertyExists
} = require('sequelize-test-helpers')

describe('test unit', function () {
  it('it should return 1', function () {
    expect(1).to.be.equal(1)
  })
})