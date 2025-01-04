import * as FileSystem from 'expo-file-system';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
const html = `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
    <style>
      body {
        font-family: Arial, sans-serif;
        font-size: 14px;
      }
      table {
        border-collapse: collapse;
        width: 100%;
      }
      th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
      }
      th {
        background-color: #f0f0f0;
      }
    </style>
  </head>
  <body>
    <h1>Invoice</h1>
    <p>Invoice Number: #12345</p>
    <p>Date: ${new Date().toISOString().split('T')[0]}</p>
    <table>
      <tr>
        <th>Item</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Total</th>
      </tr>
      <tr>
        <td>Item 1</td>
        <td>2</td>
        <td>$10.00</td>
        <td>$20.00</td>
      </tr>
      <tr>
        <td>Item 2</td>
        <td>3</td>
        <td>$20.00</td>
        <td>$60.00</td>
      </tr>
      <tr>
        <td colspan="3">Subtotal:</td>
        <td>$80.00</td>
      </tr>
      <tr>
        <td colspan="3">Tax (8%):</td>
        <td>$6.40</td>
      </tr>
      <tr>
        <td colspan="3">Total:</td>
        <td>$86.40</td>
      </tr>
    </table>
  </body>
</html>
`;

  export const generateInvoicePDF = async () => {
    try {

    const date = new Date().toISOString().split('T')[0];

        // On iOS/android prints the given html. On web prints the HTML from the current page.
    const { uri } = await Print.printToFileAsync({ html });

    const permanentUri= FileSystem.documentDirectory + `${date}-invoice.pdf`;

    // move to documents directory
    await FileSystem.moveAsync({
        from: uri,
        to: permanentUri,
    })

    await shareAsync(permanentUri, { UTI: '.pdf', mimeType: 'application/pdf' });
} catch (error) {
    console.log('There is an error: ', error);
    }
  };