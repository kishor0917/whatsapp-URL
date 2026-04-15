import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    query: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = () => {
    let { name, email, mobile, query } = form;

    // Validation
    if (!name || !email || !mobile || !query) {
      alert("Please fill all fields");
      return;
    }

    // Clean number (remove spaces, +, etc.)
    let cleanedNumber = mobile.replace(/\D/g, "");

    // Auto add India country code if 10 digits
    if (cleanedNumber.length === 10) {
      cleanedNumber = "91" + cleanedNumber;
    }

    // Final check
    if (cleanedNumber.length < 12) {
      alert("Enter valid mobile number with country code");
      return;
    }

    const message = `✨ New Contact Request ✨
Name: ${name}
Email: ${email}
Mobile: ${mobile}
Query: ${query}`;

    const url = `https://wa.me/${cleanedNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1>Luxury Contact ✨</h1>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
        />

        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number "
          onChange={handleChange}
        />

        <textarea
          name="query"
          placeholder="Your Query..."
          onChange={handleChange}
        ></textarea>

        <button onClick={sendToWhatsApp}>
          Send via WhatsApp 🚀
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;