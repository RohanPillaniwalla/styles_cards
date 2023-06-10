import {Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import ActionCard from './components/ActionCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>App</Text>
        <FlatCards />
        <ElevatedCards />
        <FancyCards />
        <FancyCards />
        <FancyCards />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
