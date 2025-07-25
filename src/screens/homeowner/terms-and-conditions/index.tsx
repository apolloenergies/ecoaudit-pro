import { DrawerScreenProps } from '@react-navigation/drawer';
import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, Text, Image, FlatList } from 'react-native';

import { BottomButton, Radio } from 'components';
import { IMAGES } from 'config';
import { useThemedStyles, useDisabledButtonColor } from 'hooks';
import { HomeOwnerStackParamList } from 'navigation/HomeOwnerNavigator';
import { MainDrawerParamList } from 'navigation/MainDrawerNavigator';

import createTermsAndConditionsStyles from './styles';
import agreementData from './terms-and-conditions.json';

type StackProps = StackScreenProps<HomeOwnerStackParamList, 'AuditSelection'>;

type DrawerProps = DrawerScreenProps<MainDrawerParamList, 'HomeOwner'>;

type TermsAndConditionsScreenProps = CompositeScreenProps<StackProps, DrawerProps>;

type TermsAndConditionsJSON =
  | { type: 'section'; title: string; padding?: boolean }
  | { type: 'text'; text: string; padding?: boolean }
  | { type: 'bullets'; bullets: string[] };

export default function TermsAndConditionsScreen({ navigation }: TermsAndConditionsScreenProps) {
  const styles = useThemedStyles(createTermsAndConditionsStyles);
  const [accepted, setAccepted] = useState(false);
  const buttonIconColor = useDisabledButtonColor(!accepted);
  const agreementSections: TermsAndConditionsJSON[] = agreementData as TermsAndConditionsJSON[];

  const handleAccept = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={agreementSections}
        keyExtractor={(_item, index) => `section-${index}`}
        ListFooterComponent={
          <View style={styles.footerContainer}>
            <Radio
              onSelectionChange={() => setAccepted(!accepted)}
              options={[
                { label: 'I accept the terms and conditions', value: 'accept', id: 'accept' },
              ]}
              type="checkbox"
              selectedValues={accepted ? ['accept'] : []}
            />
          </View>
        }
        ListHeaderComponent={
          <>
            <Image source={IMAGES.SPLASH_IMAGES.LOGO_AE} style={styles.logo} />
            <Text style={styles.title}>Agreement</Text>
          </>
        }
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => {
          if (item.type === 'section') {
            return (
              <Text style={[styles.sectionTitle, item.padding && styles.sectionPadding]}>
                {item.title}
              </Text>
            );
          }
          if (item.type === 'text') {
            return (
              <Text style={[styles.sectionContent, item.padding && styles.sectionPadding]}>
                {item.text}
              </Text>
            );
          }
          if (item.type === 'bullets') {
            return (
              <View style={styles.sectionPadding}>
                {item.bullets.map((bullet, index) => (
                  <Text key={`bullet-${index}`} style={styles.sectionContent}>
                    <Text style={styles.sectionTitle}>•</Text> {bullet}
                  </Text>
                ))}
              </View>
            );
          }
          return null;
        }}
        showsVerticalScrollIndicator={false}
      />

      <BottomButton
        title="Agree & Continue"
        onPress={handleAccept}
        disabled={!accepted}
        rightIcon={{
          family: 'AntDesign',
          name: 'arrowright',
          size: 24,
          color: buttonIconColor,
        }}
      />
    </View>
  );
}
