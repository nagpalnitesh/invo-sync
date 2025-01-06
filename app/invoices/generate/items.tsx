import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import React from 'react';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import { Text, TouchableOpacity, View } from 'react-native';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import CustomTextInput from '~/components/CustomTextInput';
import { KeyboardAvoidingScrollView } from '~/components/KeyboardAvoidingScrollView';
import { ItemsInfo, itemsSchema } from '~/schema/invoice';
import { useStore } from '~/store/store';

const ItemsInfoScreen = ({ }) => {
  const addItemsInfo = useStore(data => data.addItemsInfo);
  const form = useForm<ItemsInfo>({
    resolver: zodResolver(itemsSchema), defaultValues: {
      items: [
        {
          name: 'Example',
          description: 'Example description',
          quantity: 1,
          price: 100.10,
        },
        {
          name: 'Example 2',
          description: 'Example description 2',
          quantity: 2,
          price: 200.5,
        }
      ]
    }
  });
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'items',
  })

  const onSubmit = (data: any) => {
    router.push('/invoices/generate/summary');
    addItemsInfo(data.items);
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
                Items
              </Text>
              <Ionicons name="chevron-back-circle-outline" size={28} color="#071739" className='opacity-0' />
            </View>
            <FormProvider {...form}>
              {fields.map((field, index) => (
                <View key={field.id} className='gap-2 mb-2 p-4 rounded-lg bg-light'>
                  <CustomTextInput name={`items.${index}.name`} label='Name' placeholder='Enter name' />
                  <CustomTextInput name={`items.${index}.description`} label='Description' placeholder='Enter description' multiline />
                  <View className='flex-row items-center gap-2'>
                    <View className='flex-1 '>
                      <CustomTextInput name={`items.${index}.quantity`} label='Quantity' placeholder='Enter quantity' keyboardType='numeric' onChangeText={(text) =>
                        form.setValue(`items.${index}.quantity`, parseInt(text) || 0)
                      } />
                    </View>
                    <View className='flex-1'>
                      <CustomTextInput name={`items.${index}.price`} label='Price' placeholder='Enter price' keyboardType='numeric' />
                    </View>
                  </View>
                  <View className='flex-row items-center justify-between mb-5'>
                    <View className='flex-row gap-4'>
                      <Text className='font-bold text-lg'>Total:</Text>
                      <Text className='font-bold text-lg'>$ {((!isNaN(form.watch(`items.${index}.price`)) ? form.watch(`items.${index}.price`) : 0) * (!isNaN(form.watch(`items.${index}.quantity`)) ? form.watch(`items.${index}.quantity`) : 0)).toFixed(2)}</Text>
                    </View>
                    <TouchableOpacity onPress={() => remove(index)}>
                      <AntDesign name="minuscircleo" size={24} color="red" />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
              <Button title='Add Item' variant='link' className='mt-5 w-5/6 mx-auto' onPress={() => append({ name: '', description: '', quantity: 0, price: 0 })} />
            </FormProvider>
          </View>
        </KeyboardAvoidingScrollView>
        <Button title='Next' className='mt-5 w-5/6 mx-auto' onPress={form.handleSubmit(onSubmit)} />
      </Container>
    </>
  );
};

export default ItemsInfoScreen;
