import Ionicons from '@expo/vector-icons/Ionicons';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Text, TouchableOpacity, View } from 'react-native';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import CustomTextInput from '~/components/CustomTextInput';
import { KeyboardAvoidingScrollView } from '~/components/KeyboardAvoidingScrollView';
import { BusinessEntity, businessInfoSchema } from '~/schema/invoice';
import { useStore } from '~/store/store';

const RecipientInfoScreen = ({ }) => {

  const addRecipientInfo = useStore(data => data.addRecipientInfo);
  const form = useForm<BusinessEntity>({ resolver: zodResolver(businessInfoSchema), defaultValues: { senderName: 'Client Name', address: '123 Main Street', phone: '+91 987654321', email: 'nitesh@100x.dev', taxId: '1234567890' } });
  const { handleSubmit } = form

  const [senderName, setSenderName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [taxId, setTaxId] = useState('');

  const onSubmit = (data: any) => {
    router.push('/invoices/generate/invoice-info');
    addRecipientInfo(data);
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
        </KeyboardAvoidingScrollView>
        <Button title='Next' className='mt-auto w-5/6 mx-auto' onPress={handleSubmit(onSubmit)} />
      </Container>
    </>
  );
};

export default RecipientInfoScreen;
