import { create } from 'zustand';
import { BusinessEntity, Invoice, InvoiceInfo, ItemsInfo } from '~/schema/invoice';

export type InvoiceState = {
    newInvoice: Partial<Invoice>;
    addSenderInfo: (sender: BusinessEntity) => void;
    addRecipientInfo: (recipient: BusinessEntity) => void;
    addInvoiceInfo: (invoice: InvoiceInfo) => void;
    addItemsInfo: (items: ItemsInfo[]) => void;
    getSubTotal: () => number;
    getTotal: () => number;
}

export const useStore = create<InvoiceState>((set, get) => ({
    newInvoice: {},
    addSenderInfo: (sender) => set((state) => ({newInvoice: {...state.newInvoice, sender}})),
    addRecipientInfo: (recipient) => set((state) => ({newInvoice: {...state.newInvoice, recipient}})),
    addInvoiceInfo: (invoice: any) => set((state) => ({newInvoice: {...state.newInvoice, invoice}})),
    addItemsInfo: (items: any) => set((state) => ({newInvoice: {...state.newInvoice, items}})),
    getSubTotal: () => {
        const items = get().newInvoice.items || [];
        return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    },
    getTotal: () =>{
        const subTotal = get().getSubTotal();
        return subTotal ;
    }
}));