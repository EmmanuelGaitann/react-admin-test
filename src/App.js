import React from 'react';
import { Admin, Resource } from 'react-admin';
import { ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server'; // Changer cette ligne pour un export par défaut

const dataProvider = jsonServerProvider('http://localhost:5000');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" />
    <Resource name="posts" />
  </Admin>
);

export default App;
