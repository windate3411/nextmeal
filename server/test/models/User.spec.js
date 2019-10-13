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

const db = require('../../models')
const UserModel = require('../../models/user')

describe('# UserModel Model', () => {

  before(done => {
    done()
  })

  const User = UserModel(sequelize, dataTypes)
  const user = new User()
  checkModelName(User)('User')

  context('properties', () => {
    ;[
      'name', 'email', 'password'
    ].forEach(checkPropertyExists(user))
  });
  context('action', () => {
    let data = null

    it('create', (done) => {
      db.User.create({}).then((user) => {
        data = user
        done()
      })
    })
    it('read', (done) => {
      db.User.findByPk(data.id).then((user) => {
        expect(data.id).to.be.equal(user.id)
        done()
      })
    })
    it('update', (done) => {
      db.User.update({}, { where: { id: data.id } }).then(() => {
        db.User.findByPk(data.id).then((user) => {
          expect(data.updatedAt).to.be.not.equal(user.updatedAt)
          done()
        })
      })
    })
    it('delete', (done) => {
      db.User.destroy({ where: { id: data.id } }).then(() => {
        db.User.findByPk(data.id).then((user) => {
          expect(user).to.be.equal(null)
          done()
        })
      })
    })
  })

})