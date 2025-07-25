import { DrawerScreenProps } from '@react-navigation/drawer';
import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

import { BottomButton, Button, Icon } from 'components';
import { useDisabledButtonColor, useThemedStyles } from 'hooks';
import { HomeOwnerStackParamList } from 'navigation/HomeOwnerNavigator';
import { MainDrawerParamList } from 'navigation/MainDrawerNavigator';

import createAuditSelectionStyles from './styles';
import HomeBackground from '../components/homeBackground';
import AuditCard from './components/auditCard';

type StackProps = StackScreenProps<HomeOwnerStackParamList, 'AuditSelection'>;

type DrawerProps = DrawerScreenProps<MainDrawerParamList, 'HomeOwner'>;

type AuditSelectionScreenProps = CompositeScreenProps<StackProps, DrawerProps>;

export default function AuditSelectionScreen({ navigation, route }: AuditSelectionScreenProps) {
  const styles = useThemedStyles(createAuditSelectionStyles);
  const [selectedValueEnergyAudit, setSelectedValueEnergyAudit] = useState<string[]>([]);
  const [selectedValueRetroCore, setSelectedValueRetroCore] = useState<string[]>([]);
  const isAValueSelected = !(selectedValueEnergyAudit.length || selectedValueRetroCore.length);
  const buttonIconColor = useDisabledButtonColor(isAValueSelected);

  return (
    <HomeBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <AuditCard
          title="Energy Audit"
          description="Our Energy Audit is a detailed assessment of your property’s energy use. We identify where energy is being wasted and recommend upgrades, equipment, and installation approaches to improve efficiency and reduce costs. You receive a comprehensive report"
          onPress={() => setSelectedValueEnergyAudit(['energy_audit'])}
          options={[
            {
              label: 'Energy Audit - $499.00 USD',
              value: 'energy_audit',
              id: 'energy_audit',
              description: 'Your smart property upgrade advisor.',
            },
          ]}
          selectedValues={selectedValueEnergyAudit}
        />
        <AuditCard
          title="RetroCore"
          description="RetroCore goes beyond the audit. It’s a hands-on advisory service where we guide you through every step of your energy-saving upgrades. We coordinate with installers, ensure the right equipment is used, and supervise installation to make sure changes are done correctly and lead to real savings. Think of it as turning recommendations into results."
          onPress={() => setSelectedValueRetroCore(['retro_core'])}
          options={[
            {
              label: 'RetroCore - $499.00 USD',
              value: 'retro_core',
              id: 'retro_core',
              description: 'Your smart property upgrade advisor.',
            },
          ]}
          selectedValues={selectedValueRetroCore}
        />
      </ScrollView>
      <BottomButton
        title="Continue"
        onPress={() => {
          navigation.navigate('TermsAndConditions');
        }}
        rightIcon={{ family: 'AntDesign', name: 'arrowright', size: 24, color: buttonIconColor }}
        disabled={isAValueSelected}
      />
    </HomeBackground>
  );
}
