import { Pressable, Text } from 'react-native';
import { colors, styles } from '../../config/theme/appTheme';

interface Props {
  label: string;
  color?: string;
  doubleSize?: boolean;
  textBlack?: boolean;
  onPress: () => void;
}

export const CalculatorButton = ( {
  label,
  color = colors.darkGray,
  doubleSize = false,
  textBlack = false,
  onPress
}: Props ) => {
  return (
    <Pressable
      onPress={ () => onPress() }
      style={ ( { pressed } ) => ( {
        ...styles.button,
        backgroundColor: color,
        width: ( doubleSize ) ? 185 : 80,
        opacity: ( pressed ) ? 0.8 : 1
      } ) }>
      <Text style={ {
        ...styles.buttonText,
        color: ( textBlack ) ? 'black' : 'white',
      } }>{ label }</Text>
    </Pressable>
  );
};