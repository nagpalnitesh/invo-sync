import * as FileSystem from 'expo-file-system';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
const html = `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <body style="text-align: center;">
    <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
      Hello Expo!
    </h1>
    <img
      src="https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
      style="width: 90vw;" />
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