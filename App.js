import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import  { NavigationContainer } from '@react-navigation/native';
import NotesScreens from './Sources/screens/NotesScreens';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import {NotesProvider} from './Sources/Context/NotesContext';
import CreateNotes from './Sources/screens/CreateNotes';
import ShowNotes from  './Sources/screens/ShowNotes';
import EditNotes from './Sources/screens/EditNotes';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="notes"
          component={NotesScreens}
          options= {{
            headerTitleAlign:"center",
            title:'Notes!'
          }}
        />
        <Stack.Screen 
          name="create"
          component={CreateNotes}
          options= {{
            headerTitleAlign:"center",
            title:'Create A Note!'
          }}
        />
        <Stack.Screen 
          name="show"
          component={ShowNotes}
          options= {{
            headerTitleAlign:"center",
            title:'View Notes Here!'
          }}
        />
        <Stack.Screen 
          name="edit"
          component={EditNotes}
          options= {{
            headerTitleAlign:"center",
            title:'Update/Edit your Notes here!'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <NotesProvider value={10}>
      <App />
    </NotesProvider>
  );
}
