import React, { useState } from "react";
import { motion } from "framer-motion"; // শুধু motion ইম্পোর্ট করা হয়েছে
import useAxios from "../hook/useAxios";
import Loading from "./Loading";
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub, 
  FaTwitter,
  FaFacebook,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle
} from "react-icons/fa";

const Contact = () => {
  const { sendRequest, loading, error, data } = useAxios();
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    subject: "", 
    message: "" 
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendRequest("/contact", "POST", form);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/hossain-robin-408a21339",
      color: "text-blue-600 hover:bg-blue-600"
    },
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/robinhossen",
      color: "text-gray-700 hover:bg-gray-700"
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      url: "https://twitter.com/robinhossen",
      color: "text-blue-400 hover:bg-blue-400"
    },
    {
      name: "Facebook",
      icon: FaFacebook,
      url: "https://facebook.com/robinhossen",
      color: "text-blue-600 hover:bg-blue-600"
    }
  ];

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email Address",
      value: "robinhossen8428@gmail.com",
      link: "mailto:robinhossen8428@gmail.com",
      color: "text-red-500 bg-red-50 border-red-200"
    },
    {
      icon: FaPhone,
      label: "Phone Number",
      value: "+880 1866-610742",
      link: "tel:+8801866610742",
      color: "text-green-500 bg-green-50 border-green-200"
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Comilla, Chattogram, Bangladesh",
      link: "https://maps.google.com/?q=Comilla,Chattogram,Bangladesh",
      color: "text-purple-500 bg-purple-50 border-purple-200"
    }
  ];

  return (
    <section id="contact" className="w-full bg-gradient-to-br from-gray-50 to-blue-50/30 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Let's discuss your project and bring your ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Contact Information */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Introduction */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200/50">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Let's Work Together
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm always interested in new opportunities and exciting projects. 
                Whether you need a full-stack application, a responsive website, 
                or technical consultation, I'd love to hear from you.
              </p>
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                <p className="text-blue-700 font-medium">
                  💡 Typically reply within 2-4 hours
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className={`flex items-center gap-4 p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${item.color}`}
                  >
                    <div className="flex-shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-grow">
                      <p className="font-semibold text-gray-800">{item.label}</p>
                      <p className="text-gray-600">{item.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200/50"
            >
              <h4 className="text-xl font-bold text-gray-800 mb-6 text-center">
                Follow Me On
              </h4>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center transition-all duration-300 hover:text-white hover:shadow-lg ${social.color}`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200/50"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Send Me a Message
            </h3>
            <p className="text-gray-600 mb-8">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 outline-none"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 outline-none"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project, timeline, and requirements..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <Loading />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {/* Status Messages - AnimatePresence ছাড়া সরল version */}
              <div>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700"
                  >
                    <FaExclamationCircle className="w-5 h-5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Error sending message</p>
                      <p className="text-sm">{error.message}</p>
                    </div>
                  </motion.div>
                )}

                {data && !loading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700"
                  >
                    <FaCheckCircle className="w-5 h-5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Message sent successfully!</p>
                      <p className="text-sm">I'll get back to you within 2-4 hours.</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </form>

            {/* Privacy Note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="text-center text-gray-500 text-sm mt-6"
            >
              Your information is secure. I respect your privacy and will never share your details.
            </motion.p>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's schedule a call to discuss your requirements and how I can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:robinhossen8428@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Schedule a Call
              </motion.a>
              <motion.a
                href="tel:+8801866610742"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call Now
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;