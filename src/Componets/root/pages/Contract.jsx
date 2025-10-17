// Contact.jsx
import React, { useState } from "react";
import useAxios from "../hook/useAxios";

const Contact = () => {
  const { sendRequest, loading, error, data } = useAxios();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendRequest("/api/contact", "POST", form);
      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      alert("Something went wrong!");
    }
  };

  return (
    <section id="contact" className="w-full bg-gray-100 py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          Contact Me
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            rows={6}
            required
            className="textarea textarea-bordered w-full"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {error && <p className="text-red-500 mt-2">{error.message}</p>}
          {data && <p className="text-green-500 mt-2">Message sent successfully!</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
