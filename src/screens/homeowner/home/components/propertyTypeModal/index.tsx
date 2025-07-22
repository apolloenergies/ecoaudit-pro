import { Ionicons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ActionSheet, { SheetManager, ActionSheetRef } from 'react-native-actions-sheet';

import { Button, Radio } from 'components';
import { FormOption } from 'components/radio';
import { CONSTANTS } from 'config';
import { useThemedStyles } from 'hooks';
import { COLORS } from 'theme';

import createPropertyTypeModalStyles from './styles';

const PROPERTY_TYPES: FormOption[] = [
  { id: '1', label: 'Homeowner', value: 'homeowner' },
  { id: '2', label: 'Apartment', value: 'apartment' },
  { id: '3', label: 'Commercial', value: 'commercial' },
];

type PropertyTypeModalProps = {
  visible: boolean;
  onClose: () => void;
  onContinue: (propertyType: string[]) => void;
};

const SHEET_ID = 'propertyTypeSheet';

export default function PropertyTypeModal({
  visible,
  onClose,
  onContinue,
}: PropertyTypeModalProps) {
  const styles = useThemedStyles(createPropertyTypeModalStyles);
  const [selected, setSelected] = useState<string[]>([]);
  const sheetRef = useRef<ActionSheetRef>(null);

  useEffect(() => {
    if (visible) {
      SheetManager.show(SHEET_ID);
    } else {
      SheetManager.hide(SHEET_ID);
    }
  }, [visible]);

  const handleClose = () => {
    SheetManager.hide(SHEET_ID);
    onClose();
  };

  const handleContinue = () => {
    SheetManager.hide(SHEET_ID);
    onContinue(selected);
  };

  return (
    <ActionSheet
      ref={sheetRef}
      id={SHEET_ID}
      containerStyle={styles.modalCard}
      indicatorStyle={styles.grabber}
      onClose={handleClose}
      overlayColor={COLORS.black}
      defaultOverlayOpacity={0.5}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Property Type</Text>
        <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
          <Ionicons name="close" size={43} color={COLORS.black} />
        </TouchableOpacity>
      </View>

      <View style={styles.optionRow}>
        <Radio
          options={PROPERTY_TYPES}
          selectedValues={selected}
          onSelectionChange={setSelected}
          type="radio"
        />

        <Button
          onPress={handleContinue}
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
    </ActionSheet>
  );
}
