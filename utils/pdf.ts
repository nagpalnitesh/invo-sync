import * as FileSystem from 'expo-file-system';
import * as Print from 'expo-print';
import { Invoice } from '~/schema/invoice';

const generateInvoiceHTML = (invoiceData: Invoice, subTotal: number, total: number) => {

    const { items, sender, recipient } = invoiceData

    const formatIndianCurrency = (amount: number) => {
        return new Intl.NumberFormat("en-IN", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(amount);
    };

    const html = `
    <!DOCTYPE html>
<html>
<head>
    <title>Tax Invoice</title>
</head>
<body style="font-family: Arial, sans-serif; max-width: 800px;">
    <div style="padding: 10px;">
        ${sender.taxId && `<div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
            <div>Tax ID: ${sender.taxId}</div>
        </div>`}

        <div style="text-align: center; margin-bottom: 20px;">
            <h2 style="margin: 5px;">TAX INVOICE</h2>
            <div style="font-weight: bold;">M/S. ${sender.senderName}</div>
            <div>${sender.address}</div>
            <div>email: ${sender.email}</div>
        </div>

        <div
        style="
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        "
      >
        <div style="width: 48%">
          <table>
            <tr>
              <td>Invoice No.</td>
              <td>: ${invoiceData.invoiceNumber}</td>
            </tr>
          </table>
        </div>
        <div style="width: 48%">
          <table style="float: right">
            <tr>
              <td>Dated</td>
              <td>: ${invoiceData.date.toLocaleDateString()}</td>
            </tr>
          </table>
        </div>
      </div>

        <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
            <div style="width: 48%; border: 1px solid black; padding: 10px;">
                <div style="font-weight: bold;">Billed to:</div>
                <div>${recipient.senderName}</div>
                <div>${recipient.address}</div>
                <div style="margin-top: 10px;">
                    <div>Mobile No: ${recipient.phone}</div>
                    <div>Tax ID: ${recipient.taxId}</div>
                </div>
            </div>
            <div style="width: 48%; border: 1px solid black; padding: 10px;">
                <div style="font-weight: bold;">Shipped To:</div>
                <div>${recipient.senderName}</div>
                <div>${recipient.address}</div>
                <div style="margin-top: 10px;">
                    <div>Mobile No: ${recipient.phone}</div>
                    <div>Tax ID: ${recipient.taxId}</div>
                </div>
            </div>
        </div>

           <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <thead>
                <tr style="border: 1px solid black;">
                    <th style="border: 1px solid black; padding: 5px;">S.N</th>
                    <th style="border: 1px solid black; padding: 5px; text-align: left;">Description</th>
                    <th style="border: 1px solid black; padding: 5px;">Qty.</th>
                    <th style="border: 1px solid black; padding: 5px; text-align: right;">Price (₹)</th>
                    <th style="border: 1px solid black; padding: 5px; text-align: right;">Amount (₹)</th>
                </tr>
            </thead>
            <tbody>
                ${items && items.map((item: { name: string; quantity: number; price: number }, index: number) =>
        `<tr style="border: 1px solid black;">
                        <td style="border: 1px solid black; padding: 5px; text-align: center;">${index + 1}</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: left;">${item.name}</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: center;">${item.quantity}</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: right;">₹ ${formatIndianCurrency(item.price)}</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: right;">₹ ${formatIndianCurrency(item.quantity * item.price)}</td>
                    </tr>`).join('')}
            </tbody>
        </table>

        
      <div
        style="
          text-align: right;
          margin-bottom: 20px;
          display: flex;
          justify-content: end;
          align-items: end;
          align-content: end;
          gap: 10px;
          flex-direction: row;
        "
      >
        <div style="font-weight: bold">Sub Total:</div>
        <div>₹ ${formatIndianCurrency(subTotal)}</div>
      </div>
      <div
        style="
          text-align: right;
          margin-bottom: 20px;
          display: flex;
          justify-content: end;
          align-items: end;
          align-content: end;
          gap: 10px;
          flex-direction: row;
        "
      >
        <div style="font-weight: bold">Total:</div>
        <div>₹ ${(formatIndianCurrency(total))}</div>
      </div>

        <!--<div style="margin-bottom: 20px;">
            <table style="width: 100%; border-collapse: collapse;">
                <tr style="border: 1px solid black;">
                    <th style="border: 1px solid black; padding: 5px;">Tax Rate</th>
                    <th style="border: 1px solid black; padding: 5px;">Taxable Amt.</th>
                    <th style="border: 1px solid black; padding: 5px;">CGST Amt.</th>
                    <th style="border: 1px solid black; padding: 5px;">SGST Amt.</th>
                    <th style="border: 1px solid black; padding: 5px;">Total Tax</th>
                </tr>
                <tr style="border: 1px solid black;">
                    <td style="border: 1px solid black; padding: 5px;">18%</td>
                    <td style="border: 1px solid black; padding: 5px;">9,982.50</td>
                    <td style="border: 1px solid black; padding: 5px;">898.42</td>
                    <td style="border: 1px solid black; padding: 5px;">898.42</td>
                    <td style="border: 1px solid black; padding: 5px;">1,796.85</td>
                </tr>
            </table>
        </div>-->

        <!--<div style="margin-bottom: 20px;">
            <div style="font-weight: bold;">Eleven Thousand Seven Hundred Seventy Nine Rupees and Thirty Four Paisa Only</div>
        </div>-->

        <div style="display: flex; justify-content: space-between;">
            <div style="width: 48%;">
                <div style="font-weight: bold;">Notes</div>
                <div>${invoiceData.notes}</div>
            </div>
            <div style="width: 48%; text-align: right;">
                <div style="margin-top: 50px;">for M/S ${sender.senderName}</div>
                <div style="margin-top: 30px;">Authorised Signatory</div>
            </div>
        </div>
    </div>
</body>
</html>`

    return html
}

export const generateInvoicePDF = async (invoiceData: Invoice, subTotal: number, total: number) => {
    try {
        // On iOS/android prints the given html. On web prints the HTML from the current page.
        const { uri } = await Print.printToFileAsync({ html: generateInvoiceHTML(invoiceData, subTotal, total) });

        const permanentUri = FileSystem.documentDirectory + `invoice-${invoiceData.invoiceNumber}.pdf`;

        // move to documents directory
        await FileSystem.moveAsync({
            from: uri,
            to: permanentUri,
        })

        return permanentUri
    } catch (error) {
        console.log('There is an error: ', error);
    }
};