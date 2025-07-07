import React from 'react';
import { View, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import { useThemedStyles } from 'hooks';

import createInputPinStyles from './styles';

export interface InputPinProps {
  value: string;
  onChange: (code: string) => void;
  cellCount?: number;
  containerStyle?: StyleProp<ViewStyle>;
  cellStyle?: StyleProp<ViewStyle>;
  focusCellStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const DEFAULT_CELL_COUNT = 6;

export default function InputPin({
  value,
  onChange,
  cellCount = DEFAULT_CELL_COUNT,
  containerStyle,
  cellStyle,
  focusCellStyle,
  textStyle,
}: InputPinProps) {
  const ref = useBlurOnFulfill({ value, cellCount });
  const [cellProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue: onChange,
  });

  const styles = useThemedStyles(createInputPinStyles);

  return (
    <CodeField
      ref={ref}
      {...cellProps}
      value={value}
      onChangeText={onChange}
      cellCount={cellCount}
      rootStyle={[styles.container, containerStyle]}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({ index, symbol, isFocused }) => (
        <View
          key={index}
          onLayout={getCellOnLayoutHandler(index)}
          style={[
            styles.cell,
            cellStyle,
            isFocused && styles.focusCell,
            isFocused && focusCellStyle,
          ]}
        >
          {symbol ? (
            <Text style={[styles.text, textStyle]}>{symbol}</Text>
          ) : isFocused ? (
            <Cursor />
          ) : null}
        </View>
      )}
    />
  );
}
