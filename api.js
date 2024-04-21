import { initApi } from './initApi';
import { personsService } from './persons';

const api = initApi();

api.get('/health', (_, res) => {
  res.send('API is running');
});

api.get('/persons', (_, res) => {
  res.send(personsService.getAllPersons());
});

api.post('/persons', (req, res) => {
  const person = req.body;
  personsService.addPerson(person);

  res.send(personsService.getAllPersons());
});
