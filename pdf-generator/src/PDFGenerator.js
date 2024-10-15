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
