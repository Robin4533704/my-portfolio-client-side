import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  FaExclamationCircle,
  FaClock
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
      console.error("Submission Error:", err);
    }
  };

  const socialLinks = [
    { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/robinhossen4533", color: "hover:bg-blue-600" },
    { name: "GitHub", icon: FaGithub, url: "https://github.com/robinhossen", color: "hover:bg-gray-800" },
    { name: "Twitter", icon: FaTwitter, url: "https://twitter.com/robinhossen", color: "hover:bg-blue-400" },
    { name: "Facebook", icon: FaFacebook, url: "https://facebook.com/robinhossen", color: "hover:bg-blue-700" }
  ];

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email Address",
      value: "robinhossen8428@gmail.com",
      link: "mailto:robinhossen8428@gmail.com",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      iconColor: "text-red-500"
    },
    {
      icon: FaPhone,
      label: "Phone Number",
      value: "+880 1969-453361",
      link: "tel:+8801969453361",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      iconColor: "text-green-500"
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Cumilla, Chattogram, Bangladesh",
      link: "https://maps.google.com/?q=Cumilla,Bangladesh",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      iconColor: "text-purple-500"
    }
  ];

  return (
    <section id="contact" className="w-full bg-gray-50 dark:bg-gray-900 py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities.
          </p>
          <div className="mt-4 w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Left Side: Contact Info (2/5) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-[2rem] p-8 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-5 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all group"
                  >
                    <div className={`w-12 h-12 rounded-xl ${item.bgColor} ${item.iconColor} flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform`}>
                      <item.icon />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{item.label}</p>
                      <p className="text-gray-700 dark:text-gray-200 font-medium break-all">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Response Time Badge */}
              <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800 flex items-center gap-3">
                <FaClock className="text-blue-600 animate-pulse" />
                <p className="text-sm text-blue-700 dark:text-blue-300 font-medium">
                  Average response time: 2-4 hours
                </p>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="bg-white dark:bg-gray-800 rounded-[2rem] p-8 shadow-sm border border-gray-100 dark:border-gray-700 text-center">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Social Profiles</h4>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    className={`w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 transition-all ${social.color} hover:text-white shadow-sm`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form (3/5) */}
          <div className="lg:col-span-3">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-800 rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="example@mail.com"
                      className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can I help you?"
                    className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-200 dark:shadow-none transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {loading ? (
                    <><Loading /> <span>Sending...</span></>
                  ) : (
                    <><FaPaperPlane /> <span>Send Message</span></>
                  )}
                </button>

                {/* Status Notifications */}
                <AnimatePresence>
                  {error && (
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl text-red-600 dark:text-red-400 flex items-center gap-3">
                      <FaExclamationCircle className="shrink-0" />
                      <p className="text-sm font-medium">{error.message || "Failed to send message. Try again."}</p>
                    </motion.div>
                  )}
                  
                  {data && !loading && (
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl text-green-600 dark:text-green-400 flex items-center gap-3">
                      <FaCheckCircle className="shrink-0" size={20} />
                      <div>
                        <p className="font-bold">Message Sent!</p>
                        <p className="text-xs">Thank you, I'll get back to you shortly.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </div>

        {/* CTA Bottom Section */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Let's build something amazing together!</h3>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto text-lg">
              Currently available for freelance work and full-time positions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:robinhossen8428@gmail.com" className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-colors">
                Start a Project
              </a>
              <a href="tel:+8801969453361" className="bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-2xl font-bold transition-all">
                Call Now
              </a>
            </div>
          </div>
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full -ml-32 -mb-32"></div>
        {/* </motion.div>  */}
      </div>
    </section>
  );
};

export default Contact;