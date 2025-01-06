import { forwardRef } from 'react';
import { Platform, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

type ButtonVariant = 'primary' | 'secondary' | 'link';

type ButtonProps = {
  title: string;
  variant?: ButtonVariant;
} & TouchableOpacityProps;

const variantStyles = {
  primary: {
    button: 'items-center bg-dark rounded-[28px] p-4 shadow',
    buttonText: 'text-light text-lg font-semibold text-center',
  },
  secondary: {
    button: 'items-center border-2 border-dark rounded-[28px] p-4 shadow',
    buttonText: 'text-dark text-lg font-semibold text-center',
  },
  link: {
    button: 'items-center p-4',
    buttonText: 'text-dark text-xl font-bold text-center uppercase',
  }
}

export const Button = forwardRef<View, ButtonProps>(({ title, variant = 'primary', ...touchableProps }, ref) => {
  return (
    <TouchableOpacity
      ref={ref}
      {...touchableProps}
      className={`${variantStyles[variant].button} ${touchableProps.className} ${Platform.OS === 'android' ? 'mb-5' : ''}`}>
      <Text className={variantStyles[variant].buttonText}>{title}</Text>
    </TouchableOpacity>
  );
});