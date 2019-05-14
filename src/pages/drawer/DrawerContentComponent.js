import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';

const DrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={{ container: { flex: 1 } }}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <View style={{ height: 120, backgroundColor: '#00ffff' }}>
        <Text>Header</Text>
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

export default DrawerContentComponent;
