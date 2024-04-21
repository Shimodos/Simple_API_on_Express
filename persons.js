import { v4 as uuid } from 'uuid';

const data = [
  {
    id: uuid(),
    name: 'John',
    lastName: 'Dore',
  },
  {
    id: uuid(),
    name: 'Jane',
    lastName: 'Dome',
  },
  {
    id: uuid(),
    name: 'Doe',
    lastName: 'Dole',
  },
];

class PersonsService {
  constructor(data) {
    this.data = data;
  }

  getAllPersons() {
    return this.data;
  }

  // {name, lastName}
  addPerson(person) {
    this.data.push({ id: uuid(), ...person });
  }
}

export const personsService = new PersonsService(data);
