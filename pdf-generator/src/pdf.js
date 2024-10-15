// // pdf.js
// import jsPDF from 'jspdf';

// // Helper function to add new page if required
// const checkPageEnd = (doc, currentY, margin) => {
//     if (currentY > 270) {
//         doc.addPage(); // Add new page
//         return margin; // Reset Y position to the margin for the new page
//     }
//     return currentY;
// };

// // Function to generate the PDF
// export const generatePDF = (data) => {
//     const { name, email, phone, education, experience, skills, image } = data;
//     const doc = new jsPDF();
//     const margin = 10; // Margin for the PDF
//     let currentY = margin; // Starting Y position

//     // Add Name
//     doc.setFontSize(22);
//     doc.text(name, margin, currentY);
//     currentY += 15; // Space after name

//     // Add Contact Information
//     doc.setFontSize(12);
//     doc.text(`Email: ${email}`, margin, currentY);
//     currentY += 7;
//     doc.text(`Phone: ${phone}`, margin, currentY);
//     currentY += 15;

//     // Add Image
//     if (image) {
//         doc.addImage(image, 'JPEG', margin, currentY, 50, 50);
//         currentY += 60;
//     }

//     // Add Education Section
//     doc.setFontSize(20);
//     doc.text('Education', margin, currentY);
//     doc.line(margin, currentY + 2, 40, currentY + 2); // Underline heading
//     currentY += 10;
//     doc.setFontSize(12);
//     doc.text(education, margin, currentY);
//     currentY += 20;
//     currentY = checkPageEnd(doc, currentY, margin); // Check if page break is needed

//     // Add Experience Section
//     doc.setFontSize(20);
//     doc.text('Experience', margin, currentY);
//     // doc.line(margin, currentY + 2, 60, currentY + 2); // Underline heading
//     const textWidth = doc.getTextWidth('Experience');
//     doc.line(margin, currentY + 2, margin + textWidth, currentY + 2);
//     currentY += 10;
//     doc.setFontSize(12);
//     doc.text(experience, margin, currentY);
//     currentY += 20;
//     currentY = checkPageEnd(doc, currentY, margin); // Check if page break is needed

//     // Add Skills Section
//     doc.setFontSize(20);
//     doc.text('Skills', margin, currentY);
//     doc.line(margin, currentY + 2, 40, currentY + 2); // Underline heading
//     currentY += 10;
//     doc.setFontSize(12);

//     // Split skills into an array and add each skill as a bullet point
//     const skillsArray = skills.split(',').map(skill => skill.trim());
//     skillsArray.forEach(skill => {
//         currentY = checkPageEnd(doc, currentY, margin); // Check for page break
//         doc.text(`• ${skill}`, margin, currentY);
//         currentY += 10;
//     });

//     // Save the PDF
//     doc.save('resume.pdf');
// };

    
import jsPDF from 'jspdf';

// Helper function to check page overflow and add a new page if necessary
const checkPageEnd = (doc, currentY, margin) => {
    if (currentY > 270) {
        doc.addPage(); // Add new page
        return margin; // Reset Y position to the margin for the new page
    }
    return currentY;
};

// Function to generate the PDF with a template
export const generatePDF = (data) => {
    const { name, email, phone, education, experience, skills, image } = data;
    const doc = new jsPDF();
    const margin = 10; // Left margin
    let currentY = margin; // Starting Y position

    // === TEMPLATE DESIGN: HEADER AND FOOTER ===
    
    // Add Header
    doc.setFillColor(0, 122, 204); // Set a blue color for the header
    doc.rect(0, 0, 210, 20, 'F'); // Create a rectangle for the header (full page width)
    doc.setTextColor(255, 255, 255); // Set text color to white
    doc.setFontSize(18);
    doc.text('CV', margin, 14); // Add title in the header

    // Add Footer
    doc.setFillColor(0, 122, 204); // Set a blue color for the footer
    doc.rect(0, 280, 210, 20, 'F'); // Create a rectangle for the footer (full page width)
    doc.setTextColor(255, 255, 255); // White text for the footer
    doc.setFontSize(10);
    doc.text('Generated with jsPDF - Madhu Mahato', margin, 290); // Footer text
    
    // === PERSONAL INFO SECTION ===
    currentY = 30; // Adjust starting Y after header

    // Add Name
    doc.setTextColor(0, 0, 0); // Set text color to black
    doc.setFontSize(22);
    doc.text(name, margin, currentY);
    currentY += 15; // Space after name

    // Add Contact Information
    doc.setFontSize(12);
    doc.text(`Email: ${email}`, margin, currentY);
    currentY += 7;
    doc.text(`Phone: ${phone}`, margin, currentY);
    currentY += 15;

    // Add Image
    if (image) {
        doc.addImage(image, 'JPEG', 150, currentY - 25, 40, 40); // Adjust image position and size
        currentY += 50; // Space after the image
    }

    // === SECTION: EDUCATION ===
    currentY = checkPageEnd(doc, currentY, margin);
    doc.setFillColor(200, 200, 200); // Light grey background for section heading
    doc.rect(margin, currentY - 5, 190, 10, 'F'); // Section background
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0); // Black text for heading
    doc.text('Education', margin, currentY);
    currentY += 10;
    
    // Add Education Details
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0); // Reset to black text
    doc.text(education, margin, currentY);
    currentY += 20;

    // === SECTION: EXPERIENCE ===
    currentY = checkPageEnd(doc, currentY, margin);
    doc.setFillColor(200, 200, 200); // Light grey background for section heading
    doc.rect(margin, currentY - 5, 190, 10, 'F'); // Section background
    doc.setFontSize(14);
    doc.text('Experience', margin, currentY);
    currentY += 10;

    // Add Experience Details
    doc.setFontSize(12);
    doc.text(experience, margin, currentY);
    currentY += 20;

    // === SECTION: SKILLS ===
    currentY = checkPageEnd(doc, currentY, margin);
    doc.setFillColor(200, 200, 200); // Light grey background for section heading
    doc.rect(margin, currentY - 5, 190, 10, 'F'); // Section background
    doc.setFontSize(14);
    doc.text('Skills', margin, currentY);
    currentY += 10;

    // Add Skills as Bullet Points
    const skillsArray = skills.split(',').map(skill => skill.trim());
    skillsArray.forEach(skill => {
        currentY = checkPageEnd(doc, currentY, margin);
        doc.setFontSize(12);
        doc.text(`• ${skill}`, margin, currentY);
        currentY += 10;
    });

    // === SAVE PDF ===
    doc.save('resume.pdf');
};

