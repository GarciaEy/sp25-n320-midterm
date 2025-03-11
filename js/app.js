import { jsPDF } from "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.0.0/jspdf.es.js";

let myDoc = new jsPDF();

let cart = [];

function addCart(itemName, price) {
  let cart = document.getElementById("#cart");
  cart.push({ itemName, price });
}

class InvoicePDFGenerator {
  constructor(invoice) {
    this.invoice = invoice;
    this.pdf = new jsPDF();
  }

  generate() {
    this.pdf.text("Invoice", 10, 10);
    this.pdf.text(`Date: ${this.invoice.date}`, 10, 20);
    this.pdf.text(`Total: $${this.invoice.total}`, 10, 30);
    this.pdf.save("mydoc.pdf");

    pdf.text("Company: Sallys Shellies", 10, y);
    const customerName = document.getElementById("custName").value;
    const customerEmail = document.getElementById("email").value;
    pdf.text(`Customer: ${customerName}`, 10, y);
    y += 10;
    pdf.text(`Email: ${customerEmail}`, 10, y);
    y += 20;
  }

  downloadPdf() {
    this.pdfDoc.save("mydoc.pdf");
  }
  viewPdf() {
    this.pdfDoc.output("mydoc.pdf");
  }
}
document.querySelector("#download").onclick = downloadPdf;

document.querySelector("#view").onclick = viewPdf;

document.querySelector("#cart").onclick = addCart;

//man idk no matter what i try it wont work lolll
