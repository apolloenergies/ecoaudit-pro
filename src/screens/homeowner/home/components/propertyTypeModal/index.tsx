import { Ionicons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';

import { Button, Radio } from 'components';
import { FormOption } from 'components/radio';
import { CONSTANTS } from 'config';
import { useThemedStyles } from 'hooks';
import { COLORS } from 'theme';

import createRadioStyles from './styles';

const PROPERTY_TYPES: FormOption[] = [
  {
    id: '1',
    label: 'Homeowner',
    value: 'homeowner',
  },
  {
    id: '2',
    label: 'Apartment',
    value: 'apartment',
  },
  {
    id: '3',
    label: 'Commercial',
    value: 'commercial',
  },
];

type PropertyTypeModalProps = {
  visible: boolean;
  onClose: () => void;
  onContinue: (propertyType: string[]) => void;
};

export default function PropertyTypeModal({
  visible,
  onClose,
  onContinue,
}: PropertyTypeModalProps) {
  const [selected, setSelected] = useState<string[]>([]);
  const styles = useThemedStyles(createRadioStyles);

  return (
    <Modal animationType="fade" transparent visible={visible} onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modalCard}>
          <View style={styles.grabber} />

          <View style={styles.header}>
            <Text style={styles.title}>Property Type</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Ionicons name="close" size={43} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.optionRow}>
            <Radio
              options={PROPERTY_TYPES}
              selectedValues={selected}
              onSelectionChange={(value: string[]) => setSelected(value)}
              type="switch"
            />

            <Button
              onPress={() => null}
              disabled={selected.length === 0}
              title="Continue"
              rightIcon={
                <Feather
                  name="arrow-right"
                  size={CONSTANTS.ICONS.ICON_SIZE}
                  color={selected.length === 0 ? styles.continueIcon.color : COLORS.white}
                />
              }
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
