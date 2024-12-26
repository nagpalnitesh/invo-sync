import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Text, View } from 'react-native';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import CustomTextInput from '~/components/CustomTextInput';
import { KeyboardAvoidingScrollView } from '~/components/KeyboardAvoidingScrollView';

// const TextInput = styled(
//   TextInput,
//   'border border-gray-300 rounded-md px-4 py-2 text-sm mb-4 w-full'
// );

const SenderInfoScreen = ({ }) => {
  const form = useForm();
  const { handleSubmit } = form

  const [senderName, setSenderName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [taxId, setTaxId] = useState('');

  const handleNext = () => {
    // Validate inputs (e.g., check if fields are empty or invalid)
    if (!senderName || !address || !phone || !email) {
      alert('Please fill all fields');
      return;
    }
    // Pass data to the next screen or save it in global state
    // navigation.navigate('ClientInfo', {
    //   senderInfo: { senderName, address, phone, email },
    // });
  };

  const onSubmit = (data: any) => {
    console.log('good to go');
  }

  return (
    <>
      <Container>
        <KeyboardAvoidingScrollView>
          <View className="mb-5">
            <Text className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Sender Information
            </Text>
            <FormProvider {...form}>
              <View className='gap-2'>
                <CustomTextInput
                  name="senderName"
                  label="Your Name / Business Name"
                  value={senderName}
                  placeholder="Enter your name or business name"
                  onChangeText={setSenderName}
                />
                <CustomTextInput name='address' label='Address' value={address} placeholder='Enter your address' onChangeText={setAddress} multiline />
                <CustomTextInput name='phone' label='Phone Number' value={phone} placeholder='Enter your phone number' onChangeText={setPhone} />
                <CustomTextInput name='email' label='Email Address' value={email} placeholder='Enter your email address' onChangeText={setEmail} />
                <CustomTextInput name='taxId' label='Tax ID' value={taxId} placeholder='Enter your tax ID' onChangeText={setTaxId} />
              </View>
            </FormProvider>
          </View>
          <Button title='Next' className='mt-auto w-5/6 mx-auto' onPress={handleSubmit(onSubmit)} />
        </KeyboardAvoidingScrollView>
      </Container>
    </>
  );
};

export default SenderInfoScreen;
