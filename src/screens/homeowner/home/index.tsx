import AntDesign from '@expo/vector-icons/AntDesign';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from 'components';
import { CONSTANTS, IMAGES } from 'config';
import { useThemedStyles } from 'hooks';
import { HomeOwnerStackParamList } from 'navigation/HomeOwnerNavigator';
import { MainDrawerParamList } from 'navigation/MainDrawerNavigator';

import createHomeScreenStyles from './styles';
import HomeBackground from '../components/homeBackground';
import PropertyTypeModal from './components/propertyTypeModal';

type StackProps = StackScreenProps<HomeOwnerStackParamList, 'Home'>;

type DrawerProps = DrawerScreenProps<MainDrawerParamList, 'HomeOwner'>;

type HomeScreenProps = CompositeScreenProps<StackProps, DrawerProps>;

const HomeScreen = ({}: HomeScreenProps) => {
  const styles = useThemedStyles(createHomeScreenStyles);
  const insets = useSafeAreaInsets();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <HomeBackground>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Welcome</Text>
          <Text style={styles.titleText}>Ruben</Text>
        </View>
        <Text style={styles.descriptionText}>
          Start your energy audit from the comfort of your home and reduce your energy expenses with
          expert insights
        </Text>
        <Image source={IMAGES.HOME_IMAGES.HOME_EMPTY} style={styles.image} />
      </View>
      <View style={[styles.buttonContainer, { paddingBottom: insets.bottom }]}>
        <Button
          title="Start Energy Audit"
          onPress={() => setModalVisible(true)}
          rightIcon={<AntDesign name="plus" size={CONSTANTS.ICONS.ICON_SIZE} color="white" />}
        />
      </View>
      <PropertyTypeModal
        onClose={() => setModalVisible(false)}
        onContinue={() => setModalVisible(false)}
        visible={modalVisible}
      />
    </HomeBackground>
  );
};

export default HomeScreen;
