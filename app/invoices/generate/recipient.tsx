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
  const recipient = useStore(data => data.newInvoice?.recipient);
  const form = useForm<BusinessEntity>({
    resolver: zodResolver(businessInfoSchema),
    defaultValues: {
      senderName: recipient?.senderName || 'a',
      address: recipient?.address || 'b',
      phone: recipient?.phone || 'c',
      email: recipient?.email || 'd@e.com',
      taxId: recipient?.taxId || 'f'
    }
  });
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
                <Ionicons name="chevron-back-circle-outline" size={28} color="#071739" className='' />
              </TouchableOpacity>
              {/* <Button title='Back' className='mt-5 w-1/6 mx-auto' onPress={() => router.back()} /> */}
              <Text className="text-3xl font-bold text-dark text-center">
                Recipient Information
              </Text>
              <Ionicons name="chevron-back-circle-outline" size={28} color="#071739" className='opacity-0' />
            </View>
            <FormProvider {...form}>
              <View className=''>
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
        <Button title='Next' className='' onPress={handleSubmit(onSubmit)} />
      </Container>
    </>
  );
};

export default RecipientInfoScreen;
