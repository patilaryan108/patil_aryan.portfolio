import '../styles/Contact.css'
import { useState } from 'react'
import Footer from './Footer'
import emailjs from '@emailjs/browser'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    // Initialize EmailJS with environment variables
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        const templateParams = {
            email: formData.email,
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message
        }

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            templateParams
        )
            .then((response) => {
                console.log('Email sent successfully:', response)
                setSubmitted(true)
                setFormData({ name: '', email: '', phone: '', message: '' })
                setLoading(false)
                // Reset success message after 3 seconds
                setTimeout(() => setSubmitted(false), 3000)
            })
            .catch((error) => {
                console.error('Failed to send email:', error)
                setLoading(false)
                alert(`Failed to send message: ${error.text || error.message || 'Unknown error'}. Please check your EmailJS credentials.`)
            })
    }

    return (
        <>
            <div id="contact" style={{ display: "flex", width: "100%", justifyContent: "center", margin: "0px 0px 20px 0px" }}>
                <h2 style={{ border: "5px solid black", margin: "0px", height: "fit-content", width: "fit-content", padding: "10px 25px 10px 25px", marginTop: "50px", borderRadius: "25px" }} >CONTACT</h2>
            </div>

            <div style={{ display: "flex", width: "100%", justifyContent: "center", margin: "20px 0px 30px 0px" }}>
                <div style={{ textAlign: "center", maxWidth: "700px", padding: "0 20px" }}>
                    <h3 style={{ fontSize: "28px", fontWeight: "bold", margin: "0px 0px 15px 0px" }}>Let's Connect</h3>
                    <p style={{ fontSize: "18px", color: "#666", lineHeight: "1.6" }}>
                        Feel free to reach out if you want to collaborate on a project or have a job opportunity !
                    </p>
                </div>
            </div>

            <div style={{ display: "flex", width: "100%", justifyContent: "center", margin: "30px 0px 30px 0px", gap: "30px", flexWrap: "wrap", padding: "0 20px" }}>
                <div style={{
                    textAlign: "center",
                    background: "rgba(0, 0, 0, 0.15)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    padding: "30px 40px",
                    borderRadius: "16px",
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                    minWidth: "280px",
                    transition: "all 0.3s ease-in-out",
                    cursor: "pointer"
                }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px) scale(1.02)";
                        e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.4)";
                        e.currentTarget.style.background = "rgba(0, 0, 0, 0.25)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0) scale(1)";
                        e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.3)";
                        e.currentTarget.style.background = "rgba(0, 0, 0, 0.15)";
                    }}>
                    <p style={{ fontSize: "25px", fontWeight: "bold", margin: "0px 0px 10px 0px" }}> Email</p>
                    <a href="mailto:aspatil1081@gmail.com" style={{ fontSize: "18px", color: "#333", textDecoration: "none", display: "block", marginTop: "8px" }}>aspatil1081@gmail.com</a>
                </div>
                <div style={{
                    textAlign: "center",
                    background: "rgba(0, 0, 0, 0.15)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    padding: "30px 40px",
                    borderRadius: "16px",
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                    minWidth: "280px",
                    transition: "all 0.3s ease-in-out",
                    cursor: "pointer"
                }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px) scale(1.02)";
                        e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.4)";
                        e.currentTarget.style.background = "rgba(0, 0, 0, 0.25)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0) scale(1)";
                        e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.3)";
                        e.currentTarget.style.background = "rgba(0, 0, 0, 0.15)";
                    }}>
                    <p style={{ fontSize: "25px", fontWeight: "bold", margin: "0px 0px 10px 0px" }}> Phone</p>
                    <a href="tel:+918767338699" style={{ fontSize: "18px", color: "#333", textDecoration: "none", display: "block", marginTop: "8px" }}>+91 8767338699</a>
                </div>
                <div style={{
                    textAlign: "center",
                    background: "rgba(0, 0, 0, 0.15)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    padding: "30px 40px",
                    borderRadius: "16px",
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                    minWidth: "280px",
                    transition: "all 0.3s ease-in-out",
                    cursor: "pointer"
                }}
                    onClick={() => {
                        window.open('https://drive.google.com/file/d/1UP0dvAdvCFzfvQA8IanKeahxqQtWBdyH/view?usp=drive_link', '_blank');
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px) scale(1.02)";
                        e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.4)";
                        e.currentTarget.style.background = "rgba(0, 0, 0, 0.25)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0) scale(1)";
                        e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.3)";
                        e.currentTarget.style.background = "rgba(0, 0, 0, 0.15)";
                    }}>
                    <p style={{ fontSize: "25px", fontWeight: "bold", margin: "0px 0px 10px 0px" }}> Resume</p>
                    <p style={{ fontSize: "18px", color: "#333", margin: "0px", marginTop: "8px" }}>View CV</p>
                </div>
            </div>

            <div className="contact-form-container">
                {submitted && (
                    <div className="success-message">
                        ✓ Message sent successfully! I'll get back to you soon.
                    </div>
                )}
            </div>
            <div className="contact-form-container">
                <div className="contact-card">
                    <h3>Send a Message</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="ENTER YOUR NAME*"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="ENTER YOUR EMAIL*"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="PHONE NUMBER"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="YOUR MESSAGE*"
                                rows="8"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn" disabled={loading}>
                            {loading ? 'SENDING...' : 'SEND'}
                        </button>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
} 