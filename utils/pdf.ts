import * as FileSystem from 'expo-file-system';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { Invoice } from '~/schema/invoice';


const generateInvoiceHTML = (invoiceData: Invoice) => {

  const {invoice, items, sender, recipient} = invoiceData

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Tax Invoice</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            max-width: 800px;
            margin: 0 auto;
            border: 2px solid black; /* Added outer border */
            padding: 20px; /* Added padding to prevent content touching border */
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 10px;
        }
        
        th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
        }
        
        .header {
            text-align: center;
            margin-bottom: 20px;
        }
        
        .company-name {
            font-weight: bold;
            font-size: 1.2em;
            margin: 10px 0;
        }
        
        .address {
            margin-bottom: 10px;
        }
        
        .gstin {
            text-align: left;
            padding: 5px;
        }
        
        .amount-in-words {
            font-style: italic;
            margin: 10px 0;
        }
        
        .bank-details {
            text-align: center;
            margin: 20px 0;
        }
        
        .terms {
            margin-top: 20px;
        }
        
        .signature-box {
            border: 1px solid black;
            padding: 20px;
            margin-top: 20px;
            height: 60px;
        }
    </style>
</head>
<body>
    <div class="gstin">GSTIN: 06AALCP6712A1ZP</div>
    
    <div class="header">
        <h2>TAX INVOICE</h2>
        <div class="company-name">M/S. PIXXMO ONLINE SERVICES PVT. LTD.</div>
        <div class="address">977, SECTOR-1, NEAR MAIN SECTOR-1 MARKET, ROHTAK – 124001 (HARYANA)</div>
        <div>email: contact@pixxmo.com</div>
    </div>

    <table>
        <tr>
            <td>
                Invoice No.: ${invoice.invoiceNumber}<br>
                Dated: ${invoice.date}<br>
                Place of Supply: Haryana (06)<br>
                Reverse Charge: N<br>
                Vehicle Owner:<br>
                Vehicle No.: BY CART<br>
                Station:
            </td>
            <td>
                E-Way Bill No.:<br>
                TIME: 01:10 PM<br>
                CASH/CREDIT: CREDIT
            </td>
        </tr>
    </table>

    <table>
        <tr>
            <td>
                <strong>Billed to:</strong><br>
                ${recipient.senderName}<br>
                ${recipient.phone}<br>
                ${recipient.address}<br>
                ${recipient.email}<br>
                GSTIN / UIN: ${recipient.taxId}<br>
                PAN: PAN NUMBER
            </td>
            <td>
                <strong>Shipped To:</strong><br>
                ${recipient.senderName}<br>
                ${recipient.phone}<br>
                ${recipient.address}<br>
                ${recipient.email}<br>
                GSTIN / UIN: ${recipient.taxId}<br>
                PAN: PAN NUMBER
            </td>
        </tr>
    </table>

    <table>
        <tr>
            <th>S.N</th>
            <th>Description of Goods</th>
            <th>HSN/SAC Code</th>
            <th>Qty.</th>
            <th>Unit</th>
            <th>Price</th>
            <th>Amount(₹)</th>
        </tr>
        <tr>
            <td>1.</td>
            <td>Sewerage Frame</td>
            <td>7216</td>
            <td>66.55</td>
            <td>Kgs.</td>
            <td>150.00</td>
            <td>9,982.50</td>
        </tr>
        <tr>
            <td colspan="6">Add: CGST @ 9.00%</td>
            <td>898.42</td>
        </tr>
        <tr>
            <td colspan="6">Add: SGST @ 9.00%</td>
            <td>898.42</td>
        </tr>
        <tr>
            <td colspan="3">Grand Total</td>
            <td>66.55</td>
            <td>Kgs.</td>
            <td></td>
            <td>₹11,779.34</td>
        </tr>
    </table>

    <table>
        <tr>
            <th>Tax Rate</th>
            <th>Taxable Amt.</th>
            <th>CGST Amt.</th>
            <th>SGST Amt.</th>
            <th>Total Tax</th>
        </tr>
        <tr>
            <td>18%</td>
            <td>9,982.50</td>
            <td>898.42</td>
            <td>898.42</td>
            <td>1,796.85</td>
        </tr>
    </table>

    <div class="amount-in-words">
       TOTAL AMOUNT IN WORDS
    </div>

    <div class="bank-details">
        <strong>BANK DETAIL</strong><br>
        BANK NAME<br>
        BANK BRANCH<br>
        BANK ACCOUNT NO<br>
        IFSC - BANK IFSC CODE
    </div>

    <table>
        <tr>
            <td>
                <div class="terms">
                    <strong>Terms & Conditions</strong><br>
                    E. & O.E.<br>
                    1. Goods once sold will not be taken back.<br>
                    2. Interest @ 18%p.a. will be charged if the payment is not made with in the stipulated time.<br>
                    3. Subject to 'Haryana' Jurisdiction only.
                </div>
            </td>
            <td>
                <div>
                    <strong>Receiver's Signature:</strong>
                    <div class="signature-box"></div>
                    <div style="text-align: center;">
                        for M/S PIXXMO ONLINE SERVICES PVT. LTD.<br><br>
                        Authorised Signatory
                    </div>
                </div>
            </td>
        </tr>
    </table>
</body>
</html>`

  return html
}

  export const generateInvoicePDF = async (invoice: Invoice) => {
    try {

    const date = new Date().toISOString().split('T')[0];

        // On iOS/android prints the given html. On web prints the HTML from the current page.
    const { uri } = await Print.printToFileAsync({ html: generateInvoiceHTML(invoice) });

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