import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';

import { useThemedStyles } from 'hooks';
import { COLORS } from 'theme';

import createRadioStyles from './styles';

export interface FormOption {
  id: string;
  label: string;
  description?: string;
  value: any;
}

export interface FormSelectProps {
  options: FormOption[];
  type: 'radio' | 'checkbox' | 'switch';
  multiSelect?: boolean;
  selectedValues?: any[];
  onSelectionChange: (values: any[]) => void;
  title?: string;
  disabled?: boolean;
}

export default function FormSelect({
  options,
  type = 'checkbox',
  multiSelect = false,
  selectedValues = [],
  onSelectionChange,
  disabled = false,
}: FormSelectProps) {
  const styles = useThemedStyles(createRadioStyles);

  const handleOptionPress = (option: FormOption) => {
    if (disabled) return;

    let newValues: any[];

    if (multiSelect) {
      if (selectedValues.includes(option.value)) {
        newValues = selectedValues.filter((value) => value !== option.value);
      } else {
        newValues = [...selectedValues, option.value];
      }
    } else {
      newValues = [option.value];
    }

    onSelectionChange(newValues);
  };

  const isSelected = (option: FormOption) => {
    return selectedValues.includes(option.value);
  };

  const renderIcon = (option: FormOption) => {
    const selected = isSelected(option);

    switch (type) {
      case 'radio':
        return (
          <View style={[styles.radioButton, selected && styles.radioButtonSelected]}>
            {selected && <View style={styles.radioButtonInner} />}
          </View>
        );

      case 'checkbox':
        return (
          <View style={[styles.checkbox, selected && styles.checkboxSelected]}>
            {selected && <Ionicons name="checkmark" size={16} color="white" />}
          </View>
        );

      case 'switch':
        return (
          <Switch
            trackColor={{ false: styles.checkbox.backgroundColor, true: COLORS.cleanBlue }}
            thumbColor={COLORS.white}
            ios_backgroundColor={styles.checkbox.backgroundColor}
            value={isSelected(option)}
            onValueChange={() => handleOptionPress(option)}
          />
        );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.optionItem,
              isSelected(option) && styles.optionItemSelected,
              disabled && styles.optionItemDisabled,
            ]}
            onPress={() => handleOptionPress(option)}
            disabled={disabled}
            activeOpacity={0.7}
          >
            <View style={styles.optionContent}>
              <View style={styles.optionText}>
                <Text style={[styles.optionLabel]}>{option.label}</Text>
                {option.description && (
                  <Text style={[styles.optionDescription]}>{option.description}</Text>
                )}
              </View>
              {renderIcon(option)}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
