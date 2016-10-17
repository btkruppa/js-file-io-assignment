'use strict'

const fs = require('fs')

class Employee {
  constructor (name, title, pay) {
    this.name = name
    this.title = title
    this.pay = pay
  }

  static parseFromFilePath (filePath) {
    let contents = JSON.parse(fs.readFileSync(filePath).toString())
    return new Employee(contents.name, contents.title, contents.salary)
    //return new Employee(JSON.parse(filePath))
  }

  promote (title, pay) {
    this.title = title
    this.pay = pay
  }

}

module.exports = {
  Employee
}
