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
    const { name, email, mobile, query } = form;

    // 🛑 Basic validation
    if (!name || !email || !mobile || !query) {
      alert("Please fill all fields");
      return;
    }

    const message = `✨ New Contact Request ✨
Name: ${name}
Email: ${email}
Mobile: ${mobile}
Query: ${query}`;

    // ✅ YOUR FIXED NUMBER (India format)
    const phoneNumber = "918904666504";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1>Whatsapp Contact ✨</h1>

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
          placeholder="Mobile Number"
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