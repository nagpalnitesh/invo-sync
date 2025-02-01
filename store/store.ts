import { create } from 'zustand';
import { BusinessEntity, Invoice, InvoiceInfo, ItemsInfo } from '~/schema/invoice';

export type InvoiceState = {
    newInvoice: Partial<Invoice> | null;
    startNewInvoice: () => void;
    resetNewInvoice: () => void;
    addSenderInfo: (sender: BusinessEntity) => void;
    addRecipientInfo: (recipient: BusinessEntity) => void;
    addInvoiceInfo: (invoiceInfo: InvoiceInfo) => void;
    addItemsInfo: (items: ItemsInfo[]) => void;
    getSubTotal: () => number;
    getTotal: () => number;
}

// {
//     items: [],
//         date: new Date().toISOString().split('T')[0],
//             dueDate: new Date(new Date().setDate(new Date().getDate() + 14)).toISOString().split('T')[0],
//                 notes: 'Invoice notes here'
// }

export const useStore = create<InvoiceState>((set, get) => ({
    newInvoice: null,
    startNewInvoice: () => set(() => ({
        newInvoice: {
            items: [{
                name: '',
                description: '',
                quantity: 1,
                price: null,
            }],
            date: new Date(),
            dueDate: new Date(new Date().setDate(new Date().getDate() + 15)),
        },
    })),
    resetNewInvoice: () => set(() => ({ newInvoice: null })),
    addSenderInfo: (sender) => set((state) => ({ newInvoice: { ...state.newInvoice, sender } })),
    addRecipientInfo: (recipient) => set((state) => ({ newInvoice: { ...state.newInvoice, recipient } })),
    addInvoiceInfo: (invoiceInfo) => set((state) => ({ newInvoice: { ...state.newInvoice, ...invoiceInfo } })),
    addItemsInfo: (items: any) => set((state) => ({ newInvoice: { ...state.newInvoice, items } })),
    getSubTotal: () => {
        const items = (get().newInvoice?.items || []) as { name: string; description: string; quantity: number; price: number; }[];
        return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    },
    getTotal: () => {
        const subTotal = get().getSubTotal();
        return subTotal;
    }
}));