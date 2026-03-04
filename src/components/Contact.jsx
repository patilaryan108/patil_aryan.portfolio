import '../styles/Contact.css'

export default function Contact() {

    return (
        <div style={{ width: "100%", backgroundColor: "white", paddingTop: "50px", paddingBottom: "80px" }}>
            <div id="contact" style={{ display: "flex", width: "100%", justifyContent: "center", margin: "0px 0px 20px 0px" }}>
                <h2 style={{ border: "5px solid black", margin: "0px", height: "fit-content", width: "fit-content", padding: "10px 25px 10px 25px", borderRadius: "25px" }} >CONTACT</h2>
            </div>

            <div style={{ display: "flex", width: "100%", justifyContent: "center", margin: "20px 0px 50px 0px" }}>
                <div style={{ textAlign: "center", maxWidth: "700px", padding: "0 20px" }}>
                    <h3 style={{ fontSize: "28px", fontWeight: "bold", margin: "0px 0px 15px 0px" }}>Let's Connect</h3>
                    <p style={{ fontSize: "18px", color: "#666", lineHeight: "1.6" }}>
                        Feel free to reach out if you want to collaborate on a project or have a job opportunity !
                    </p>
                </div>
            </div>

            <div style={{ display: "flex", width: "100%", justifyContent: "center", margin: "0px 0px 0px 0px", gap: "30px", flexWrap: "wrap", padding: "0 20px" }}>
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
        </div>
    )
}