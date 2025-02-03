import Ionicons from '@expo/vector-icons/Ionicons';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Text, TouchableOpacity, View } from 'react-native';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import CustomDatePicker from '~/components/CustomDatePicker';
import CustomTextInput from '~/components/CustomTextInput';
import { KeyboardAvoidingScrollView } from '~/components/KeyboardAvoidingScrollView';
import { InvoiceInfo, invoiceInfoSchema } from '~/schema/invoice';
import { useStore } from '~/store/store';

const InvoiceInfoScreen = ({ }) => {
  const addInvoiceInfo = useStore(data => data.addInvoiceInfo);
  const invoice = useStore(data => data.newInvoice);
  const form = useForm<InvoiceInfo>({
    resolver: zodResolver(invoiceInfoSchema),
    defaultValues: {
      invoiceNumber: invoice?.invoiceNumber || '',
      date: invoice?.date,
      dueDate: invoice?.dueDate,
      notes: invoice?.notes || ''
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
          <View className="">
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
                  placeholder="INV-000" selectTextOnFocus={false} />
                <CustomDatePicker name="date" label="Invoice Date" />
                <CustomDatePicker
                  name="dueDate"
                  label="Invoice Due Date" />
                {/* <CustomTextInput
                  name="notes"
                  label="Notes"
                  placeholder="Some notes" multiline /> */}
              </View>
            </FormProvider>
          </View>
        </KeyboardAvoidingScrollView>
        <Button title='Next' className='' onPress={form.handleSubmit(onSubmit)} />
      </Container>
    </>
  );
};

export default InvoiceInfoScreen;
