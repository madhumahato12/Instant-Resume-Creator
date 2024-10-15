import jsPDF from 'jspdf';

const checkPageEnd = (doc, currentY, margin) => {
    if (currentY > 270) {
        doc.addPage(); 
        return margin; 
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
    currentY = 30; 

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
    doc.setFillColor(200, 200, 200); 
    doc.rect(margin, currentY - 5, 190, 10, 'F'); 
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

