import React from 'react';
import { View, Text } from 'react-native';

import { Radio } from 'components';
import { FormOption } from 'components/radio';
import { useThemedStyles } from 'hooks';

import createAuditCardStyles from './styles';

export interface AuditCardProps {
  title: string;
  description: string;
  onPress: () => void;
  options: FormOption[];
  selectedValues: string[];
}

export default function AuditCard({
  title,
  description,
  onPress,
  options,
  selectedValues,
}: AuditCardProps) {
  const styles = useThemedStyles(createAuditCardStyles);

  return (
    <View style={[styles.container]}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Radio
          options={options}
          selectedValues={selectedValues}
          type="checkbox"
          onSelectionChange={onPress}
        />
      </View>
    </View>
  );
}
