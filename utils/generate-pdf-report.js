import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const generateReportPDF = async (reportData, elementId) => {
    const input = document.getElementById(elementId);
    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

    // Open the generated PDF in a new tab
    const pdfBlob = pdf.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl);

    // Uncomment the following line if you want to download the PDF automatically
    // pdf.save(`${reportData.patient.username}_report.pdf`);
};

export default generateReportPDF;
