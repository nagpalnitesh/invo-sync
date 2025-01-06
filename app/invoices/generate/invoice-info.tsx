import Ionicons from '@expo/vector-icons/Ionicons';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Text, TouchableOpacity, View } from 'react-native';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import CustomTextInput from '~/components/CustomTextInput';
import { KeyboardAvoidingScrollView } from '~/components/KeyboardAvoidingScrollView';
import { InvoiceInfo, invoiceInfoSchema } from '~/schema/invoice';
import { useStore } from '~/store/store';

const InvoiceInfoScreen = ({ }) => {
  const addInvoiceInfo = useStore(data => data.addInvoiceInfo);
  const form = useForm<InvoiceInfo>({
    resolver: zodResolver(invoiceInfoSchema),
    defaultValues: {
      invoiceNumber: 'INV-123',
      date: new Date().toISOString().split('T')[0],
      dueDate: new Date(new Date().setDate(new Date().getDate() + 14)).toISOString().split('T')[0],
      notes: 'Invoice notes here'
    }
  });

  const onSubmit = (data: any) => {
    router.push('/invoices/generate/items');
    addInvoiceInfo(data);
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
                Invoice Info
              </Text>
              <Ionicons name="chevron-back-circle-outline" size={28} color="#071739" className='opacity-0' />
            </View>
            <FormProvider {...form}>
              <View className='gap-2'>
                <CustomTextInput
                  name="invoiceNumber"
                  label="Invoice Number"
                  placeholder="INV-123" editable={false} selectTextOnFocus={false} />
                <CustomTextInput
                  name="date"
                  label="Date"
                  placeholder="2023-01-01" />
                <CustomTextInput
                  name="dueDate"
                  label="Due Date"
                  placeholder="2023-01-01" />
                <CustomTextInput
                  name="notes"
                  label="Notes"
                  placeholder="Some notes" multiline />
              </View>
            </FormProvider>
          </View>
        </KeyboardAvoidingScrollView>
        <Button title='Next' className='mt-auto w-5/6 mx-auto' onPress={form.handleSubmit(onSubmit)} />
      </Container>
    </>
  );
};

export default InvoiceInfoScreen;
