import { z } from 'zod';

export const businessInfoSchema = z.object({
  senderName: z.string({ required_error: 'Name is required' }).min(1, 'Name is required'),
  address: z.string({ required_error: 'Address is required' }).min(1, 'Address is required'),
  phone: z.string({ required_error: 'Phone number is required' }).min(1, 'Phone number is required'),
  email: z.string({ required_error: 'Email address is required' }).email('Invalid email address').min(1, 'Email address is required'),
  taxId: z.string().optional(),
});

export type BusinessEntity = z.infer<typeof businessInfoSchema>

export const invoiceInfoSchema = z.object({
  invoiceNumber: z
  .string({ required_error: 'Invoice number is required' })
  .min(1, 'Invoice number is required'),
  date: z.date({
    required_error: 'Please select a date',
    invalid_type_error: 'That is not a valid date',
  }),
  dueDate: z.date({
    required_error: 'Please select a date',
    invalid_type_error: 'That is not a valid date',
  }).optional(),
  notes: z.string().optional(),
});

export type InvoiceInfo = z.infer<typeof invoiceInfoSchema>


export const itemsInfoSchema = z.object({
  name: z.string({ required_error: 'Name is required' }).min(1, 'Name is required'),
  description: z.string({ required_error: 'Description is required' }).min(1, 'Description is required').optional(),
  quantity: z.number({ required_error: 'Quantity is required' }).min(1, 'Quantity is required'),
  price: z.number({ required_error: 'Price is required' }).min(1, 'Price is required'),
});

export type InvoiceItem = z.infer<typeof itemsInfoSchema>

export const itemsSchema = z.object({
  items: itemsInfoSchema.array(),
});

export type ItemsInfo = z.infer<typeof itemsSchema>


export type Invoice = InvoiceInfo & {
  sender: BusinessEntity;
  recipient: BusinessEntity;
  items: ItemsInfo;
}
