class Person {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    return `Hello My name is ${this.name}`;
  }
}

module.exports = Person;

// Pode exportar vários modulos com objeto {}
