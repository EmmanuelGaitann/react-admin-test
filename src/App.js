import React, { useState, useEffect } from 'react';
import { Admin, Resource, AppBar, Layout } from 'react-admin';
import { Button, Box } from '@mui/material';
import dataProvider from './config/dataProvider';
import authProvider from './config/authProvider';
import { lightTheme, darkTheme } from './config/theme';
import PostList from './Components/posts/PostList';
import PostEdit from './Components/posts/PostEdit';
import PostCreate from './Components/posts/PostCreate';
import PostShow from './Components/posts/PostShow';

import UserList from './Components/users/UserList';
import UserEdit from './Components/users/UserEdit';
import UserCreate from './Components/users/UserCreate';
import UserShow from './Components/users/UserShow';

import Dashboard from './dashboard/dashboard';


const CustomAppBar = ({ darkMode, toggleDarkMode, ...props }) => (
  <AppBar {...props}>
    <Box sx={{ flexGrow: 1 }} /> 
    <Button
      onClick={toggleDarkMode}
      color="inherit"
      sx={{ marginRight: 2 }}
    >
      {darkMode ? '🌞 Mode Clair' : '🌙 Mode Sombre'}
    </Button>
  </AppBar>
);

const CustomLayout = (props) => (
  <Layout
    {...props}
    appBar={(appBarProps) => (
      <CustomAppBar {...appBarProps} darkMode={props.darkMode} toggleDarkMode={props.toggleDarkMode} />
    )}
  />
);

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const [key, setKey] = useState(0);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    setKey((prev) => prev + 1);
  };

  return (
    <Admin
      key={key} 
      theme={darkMode ? darkTheme : lightTheme}
      dataProvider={dataProvider}
      authProvider={authProvider}
      dashboard={Dashboard}
      layout={(props) => <CustomLayout {...props} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
    >
      <Resource 
        name="posts" 
        list={PostList} 
        edit={PostEdit} 
        create={PostCreate} 
        show={PostShow} 
      />
      <Resource 
        name="users" 
        list={UserList} 
        edit={UserEdit} 
        create={UserCreate} 
        show={UserShow} 
      />
    </Admin>
  );
};

export default App;
