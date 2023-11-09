import React from 'react';
import { Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({ navigation }) => {
  const onDone = () => {
    // Handle what should happen after onboarding is done
    navigation.navigate('App'); // for example, navigate to your main app screen
  };

  const pages = [
    {
      backgroundColor: '#056559',
      image: <Image source={require('./assets/1.jpg')} />,
      title: 'Welcome to Your App',
      subtitle: 'This is a cool onboarding screen.',
    },
    {
      backgroundColor: '#056559',
      image: <Image source={require('./assets/1.jpg')} />,
      title: 'Welcome to Your App',
      subtitle: 'This is a cool onboarding screen.',
    },
    {
      backgroundColor: '#01875f',
      image: <Image source={require('./assets/2.jpg')} />,
      title: 'Another Awesome Feature',
      subtitle: 'Describe it here and make users excited.',
    },
    {
      backgroundColor: '#01875f',
      image: <Image source={require('./assets/2.jpg')} />,
      title: 'Another Awesome Feature',
      subtitle: 'Describe it here and make users excited.',
    },
    // Add more pages as needed
  ];

  return (
    <Onboarding
      onDone={onDone}
      pages={pages}
      // You can customize further with props, check the documentation for options
    />
  );
};

export default OnboardingScreen;
