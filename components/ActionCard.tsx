import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  const url =
    'https://www.tutorialspoint.com/top-must-know-features-of-javascript#:~:text=Features%20of%20Javascript%201%20Scripting%20Javascript%20executes%20the,...%208%20Supports%20Functional%20Programming%20...%20More%20items';

  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>Learn JavaScript By Doing</Text>
        </View>
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/R.f7d27ab80dec12dd2d330af6f1dcca6a?rik=364sTmTHvduVdA&riu=http%3a%2f%2fapprand.com%2fwp-naughtycontent%2fuploads%2f2015%2f08%2fmaxresdefault.jpg&ehk=qVcESZMWgXeonsmHPCMdP20DHUyww%2b28IIZMMJvg9sc%3d&risl=&pid=ImgRaw&r=0',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={2}>
            JavaScript is an on demand programming language with vast
            application. With the knoweldge of JavaScript you can make websites,
            reusable components for any website, give dynamics to websites. This
            is not all. you can even make games and even mobile applications
            using JavaScript. To spice things up, you can also do macgine
            leanring using JavaScript now. So what's the wait, start today
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => {
              openWebsite(url);
            }}>
            <Text style={styles.websiteLink}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 360,
    marginVertical: 12,
    marginHorizontal: 18,
    borderRadius: 6,
  },
  cardElevated: {
    backgroundColor: '#758283',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  cardImage: {
    height: 180,
  },
  bodyContainer: {padding: 8},
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  websiteLink: {
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    elevation: 5,
    borderRadius: 6,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#000',
    shadowOpacity: 0.5,
  },
});
