import { TextInputProps, TextInput, View, Text } from 'react-native';

import { useThemedStyles } from 'hooks';

import createInputLabelStyles from './styles';

type InputLabelProps = {
  label: string;
  leftIcon?: any;
} & TextInputProps;

export default function InputLabel({ label, leftIcon, ...rest }: InputLabelProps) {
  const styles = useThemedStyles(createInputLabelStyles);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...rest} style={styles.input} />
    </View>
  );
}
