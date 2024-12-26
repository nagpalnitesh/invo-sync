import Ionicons from '@expo/vector-icons/Ionicons';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Text, TouchableOpacity, View } from 'react-native';
import { z } from 'zod';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import CustomTextInput from '~/components/CustomTextInput';
import { KeyboardAvoidingScrollView } from '~/components/KeyboardAvoidingScrollView';

const senderInfoSchema = z.object({
  senderName: z.string({ required_error: 'Name is required' }).min(1, 'Name is required'),
  address: z.string({ required_error: 'Address is required' }).min(1, 'Address is required'),
  phone: z.string({ required_error: 'Phone number is required' }).min(1, 'Phone number is required'),
  email: z.string({ required_error: 'Email address is required' }).email('Invalid email address').min(1, 'Email address is required'),
  taxId: z.string().optional(),
});

type SenderInfo = z.infer<typeof senderInfoSchema>

const SenderInfoScreen = ({ }) => {
  const form = useForm<SenderInfo>({ resolver: zodResolver(senderInfoSchema), defaultValues: { senderName: 'Client Name', address: '123 Main Street', phone: '+91 987654321', email: 'nitesh@100x.dev', taxId: '1234567890' } });
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
    router.push('/invoices/generate/invoice-info');
  }

  return (
    <>
      <Container>
        <KeyboardAvoidingScrollView>
          <View className="mb-5">
            <View className="flex flex-row justify-between items-center mb-5">
              <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name="chevron-back-circle-outline" size={28} color="black" className='' />
              </TouchableOpacity>
              {/* <Button title='Back' className='mt-5 w-1/6 mx-auto' onPress={() => router.back()} /> */}
              <Text className="text-3xl font-bold text-gray-900 text-center">
                Recipient Information
              </Text>
              <Ionicons name="chevron-back-circle-outline" size={28} color="black" className='opacity-0' />
            </View>
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
