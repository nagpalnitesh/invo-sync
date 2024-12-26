import { forwardRef } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

type ButtonVariant = 'primary' | 'secondary' | 'link';

type ButtonProps = {
  title: string;
  variant?: ButtonVariant;
} & TouchableOpacityProps;

const variantStyles = {
  primary: {
    button: 'items-center bg-blue-500 rounded-[28px] p-4 shadow',
    buttonText: 'text-white text-lg font-semibold text-center',
  },
  secondary: {
    button: 'items-center border-2 border-blue-500 rounded-[28px] p-4 shadow',
    buttonText: 'text-blue-500 text-lg font-semibold text-center',
  },
  link: {
    button: 'items-center p-4',
    buttonText: 'text-blue-500 text-xl font-bold text-center uppercase',
  }
}

export const Button = forwardRef<View, ButtonProps>(({ title, variant = 'primary', ...touchableProps }, ref) => {
  return (
    <TouchableOpacity
      ref={ref}
      {...touchableProps}
      className={`${variantStyles[variant].button} ${touchableProps.className}`}>
      <Text className={variantStyles[variant].buttonText}>{title}</Text>
    </TouchableOpacity>
  );
});