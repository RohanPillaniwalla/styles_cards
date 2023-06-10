import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView
        style={styles.container}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <View style={[styles.card, styles.ElevatedCard]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.ElevatedCard]}>
          <Text>me</Text>
        </View>
        <View style={[styles.card, styles.ElevatedCard]}>
          <Text>to</Text>
        </View>
        <View style={[styles.card, styles.ElevatedCard]}>
          <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.ElevatedCard]}>
          <Text>more...</Text>
        </View>
        <View style={[styles.card, styles.ElevatedCard]}>
          <Text>👍</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {padding: 8},
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  ElevatedCard: {
    backgroundColor: '#CAD5E2',
    elevation: 4,
  },
});
