// import React, { useState } from 'react';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import './App.css'; // Import the CSS file

// const PDFGenerator = () => {
//     // State for form fields
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');
//     const [education, setEducation] = useState('');
//     const [experience, setExperience] = useState('');
//     const [skills, setSkills] = useState('');
//     const [image, setImage] = useState(null);

//     const handleImageUpload = (e) => {
//         setImage(URL.createObjectURL(e.target.files[0]));
//     };

//     const generatePDF = () => {
//         const doc = new jsPDF();
//         const margin = 10; // Margin for the PDF
//         let currentY = margin; // Starting Y position

//         doc.setFontSize(22);
//         doc.text(name, margin, currentY);
//         currentY += 10; // Move down for the next line
    
//         // Add Contact Information
//         doc.setFontSize(12);
//         doc.text(`Email: ${email}`, margin, currentY);
//         currentY += 7; // Move down for the next line
//         doc.text(`Phone: ${phone}`, margin, currentY);
//         currentY += 10; // Move down for the next line
    
//         // Add Image
//         if (image) {
//             doc.addImage(image, 'JPEG', margin, currentY, 50, 50); // Adjust image size and position as needed
//             currentY += 60; // Move down after the image
//         }
    
//         // Add Education with underline
//         currentY += 15; // Generous space before heading
//         doc.setFontSize(14);
//         doc.text('Education', margin, currentY);
//         currentY += 5; // Space between heading and underline
//         doc.line(margin, currentY, 40, currentY); // Underline the heading
//         currentY += 10; // Move down for the content
//         doc.setFontSize(12);
//         doc.text(education, margin, currentY);
//         currentY += 20; // Generous space after education
    
//         // Check if the current position is getting close to the bottom of the page
//         if (currentY > 250) {
//             doc.addPage(); // Add a new page if we exceed the height
//             currentY = margin; // Reset Y position for new page
//         }
    
//         // Add Experience with underline
//         currentY += 15; // Generous space before heading
//         doc.setFontSize(14);
//         doc.text('Experience', margin, currentY);
//         currentY += 5; // Space between heading and underline
//         doc.line(margin, currentY, 60, currentY); // Underline the heading
//         currentY += 10; // Move down for the content
//         doc.setFontSize(12);
//         doc.text(experience, margin, currentY);
//         currentY += 20; // Generous space after experience
    
//         // Check if we need another page after experience
//         if (currentY > 250) {
//             doc.addPage(); // Add a new page
//             currentY = margin; // Reset Y position for new page
//         }
    
//         // Add Skills with underline
//         currentY += 15; // Generous space before heading
//         doc.setFontSize(14);
//         doc.text('Skills', margin, currentY);
//         currentY += 5; // Space between heading and underline
//         doc.line(margin, currentY, 40, currentY); // Underline the heading
//         currentY += 10; // Move down for the content
//         doc.setFontSize(12);
    
//         // Split skills into an array and add each skill as a bullet point
//         const skillsArray = skills.split(',').map(skill => skill.trim());
//         skillsArray.forEach((skill, index) => {
//             if (currentY > 250) {
//                 doc.addPage(); // Add a new page if we exceed the height
//                 currentY = margin; // Reset Y position for new page
//             }
//             doc.text(`• ${skill}`, margin, currentY); // Add bullet point for each skill
//             currentY += 10; // Move down for the next bullet point
//         });
    
//         // Save the PDF
//         doc.save('resume.pdf');
//     };

//     return (
//         <div className="container">
//             <h1>Resume PDF Generator</h1>
//             <form>
//                 <div className="form-group">
//                     <label htmlFor="name">Name:</label>
//                     <input
//                         type="text"
//                         id="name"
//                         placeholder="Enter your name"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         required
//                     />

//                     <label htmlFor="email">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         placeholder="Enter your email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />

//                     <label htmlFor="phone">Phone:</label>
//                     <input
//                         type="text"
//                         id="phone"
//                         placeholder="Enter your phone number"
//                         value={phone}
//                         onChange={(e) => setPhone(e.target.value)}
//                         required
//                     />

//                     <label htmlFor="education">Education:</label>
//                     <textarea
//                         id="education"
//                         placeholder="Your education details"
//                         value={education}
//                         onChange={(e) => setEducation(e.target.value)}
//                         required
//                     />

//                     <label htmlFor="experience">Experience:</label>
//                     <textarea
//                         id="experience"
//                         placeholder="Your experience details"
//                         value={experience}
//                         onChange={(e) => setExperience(e.target.value)}
//                         required
//                     />

//                     <label htmlFor="skills">Skills (comma-separated):</label>
//                     <input
//                         type="text"
//                         id="skills"
//                         placeholder="Your skills"
//                         value={skills}
//                         onChange={(e) => setSkills(e.target.value)}
//                         required
//                     />

//                     <label htmlFor="photo">Profile Photo:</label>
//                     <input
//                         type="file"
//                         id="photo"
//                         accept="image/*"
//                         onChange={handleImageUpload}
//                     />

//                     <button type="button" onClick={generatePDF}>Generate PDF</button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default PDFGenerator;




// PDFGenerator.js
import React, { useState } from 'react';
import { generatePDF } from './pdf';
import './App.css'; 

const PDFGenerator = () => {
    // State for form fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [education, setEducation] = useState('');
    const [experience, setExperience] = useState('');
    const [skills, setSkills] = useState('');
    const [image, setImage] = useState(null);

    const handleImageUpload = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    };

    const handleGeneratePDF = () => {
        const formData = {
            name,
            email,
            phone,
            education,
            experience,
            skills,
            image
        };
        generatePDF(formData); // Call the PDF generator function and pass the data
    };

    return (
        <div className="container">
            <h1>Resume PDF Generator</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="text"
                        id="phone"
                        placeholder="Enter your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />

                    <label htmlFor="education">Education:</label>
                    <textarea
                        id="education"
                        placeholder="Your education details"
                        value={education}
                        onChange={(e) => setEducation(e.target.value)}
                        required
                    />

                    <label htmlFor="experience">Experience:</label>
                    <textarea
                        id="experience"
                        placeholder="Your experience details"
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        required
                    />

                    <label htmlFor="skills">Skills (comma-separated):</label>
                    <input
                        type="text"
                        id="skills"
                        placeholder="Your skills"
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                        required
                    />

                    <label htmlFor="photo">Profile Photo:</label>
                    <input
                        type="file"
                        id="photo"
                        accept="image/*"
                        onChange={handleImageUpload}
                    />

                    <button type="button" onClick={handleGeneratePDF}>Generate PDF</button>
                </div>
            </form>
        </div>
    );
};

export default PDFGenerator;
