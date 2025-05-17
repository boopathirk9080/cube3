// import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
// import Contactimg from '../assets/contact/contactimg.png'
// export default function ContactUs() {
//     return (
//         <div

//             className="min-h-screen bg bg-gradient-to-t from-[#2b6cb0] to-[#134156] py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-7xl mx-auto">
//                 <div className="text-center">
//                     <h2 className="text-2xl font-bold text-gray-100 sm:text-4xl">
//                         Contact Us
//                     </h2>
//                     <p className="mt-4 text-lg leading-6 text-gray-400">
//                         Have any questions? Reach out to us directly.
//                     </p>
//                 </div>

//                 <div className="mt-16 flex flex-col md:flex-row gap-8">
//                     {/* Contact Form */}
//                     <div className="md:w-1/2 bg-[#202938] px-[20px] py-[10px] rounded-lg ">
//                         <form className="space-y-6">

//                             <div className="space-y-2">
//                                 <label htmlFor="name" className="block text-sm font-medium text-gray-300">
//                                     Name
//                                 </label>
//                                 <input
//                                     type="text"
//                                     id="name"
//                                     className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-gray-100 placeholder-gray-400 transition-all"
//                                     placeholder="Enter your name"
//                                     required
//                                 />
//                             </div>

//                             <div className="space-y-2">
//                                 <label htmlFor="email" className="block text-sm font-medium text-gray-300">
//                                     Email
//                                 </label>
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-gray-100 placeholder-gray-400 transition-all"
//                                     placeholder="your@email.com"
//                                     required
//                                 />
//                             </div>

//                             <div className="space-y-2">
//                                 <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
//                                     Subject
//                                 </label>
//                                 <input
//                                     type="text"
//                                     id="subject"
//                                     className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-gray-100 placeholder-gray-400 transition-all"
//                                     placeholder="Enter subject"
//                                     required
//                                 />
//                             </div>

//                             <div className="space-y-2">
//                                 <label htmlFor="message" className="block text-sm font-medium text-gray-300">
//                                     Message
//                                 </label>
//                                 <textarea
//                                     id="message"
//                                     rows={4}
//                                     className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-gray-100 placeholder-gray-400 transition-all resize-y"
//                                     placeholder="Write your message..."
//                                     required
//                                 ></textarea>
//                             </div>

//                             <button
//                                 type="submit"
//                                 className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200"
//                             >
//                                 Send Message
//                             </button>
//                         </form>
//                     </div>

//                     {/* Contact Info */}
//                     <div className="  bg-gray-800 lg:ml-[50px] md:ml-[0px] sm:ml-[0px]  rounded-lg p-8">
//                         <div className="space-y-6">
//                             <div className="flex items-start">
//                                 <div className="flex-shrink-0">
//                                     <FiMapPin className="h-6 w-6 text-indigo-500" />
//                                 </div>
//                                 <div className="ml-4">
//                                     <h3 className="text-lg font-medium text-gray-100">Address</h3>
//                                     <p className="mt-1 text-gray-400">Salem, Tamilnadu</p>
//                                 </div>
//                             </div>

//                             <div className="flex items-start">
//                                 <div className="flex-shrink-0">
//                                     <FiPhone className="h-6 w-6 text-indigo-500" />
//                                 </div>
//                                 <div className="ml-4">
//                                     <h3 className="text-lg font-medium text-gray-100">Phone</h3>
//                                     <p className="mt-1 text-gray-400">+91 9080787009</p>
//                                 </div>
//                             </div>

//                             <div className="flex items-start">
//                                 <div className="flex-shrink-0">
//                                     <FiMail className="h-6 w-6 text-indigo-500" />
//                                 </div>
//                                 <div className="ml-4">
//                                     <h3 className="text-lg font-medium text-gray-100">Email</h3>
//                                     <p className="mt-1 text-gray-400">boopathi7476@gmail.com</p>
//                                 </div>
//                             </div><div >
//                                 <img className='w-[auto] h-[250px]  ' src={Contactimg} alt="" />
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// }

// import { motion } from "framer-motion";
// import { useState } from "react";
// import Contactimg from "../assets/contact/contactimg.png"; // Replace with the correct path to your image

// const ContactSection = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         mobile: "",
//         eventType: "",
//         message: "",
//     });

//     const [notification, setNotification] = useState(null); // State for notifications

//     const handleChange = (e) => {
//         const { id, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [id]: value,
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (!formData.name || !formData.email || !formData.mobile || !formData.message || !formData.eventType) {
//             setNotification({ type: "error", message: "Please fill all required fields." });
//             return;
//         }

//         // Send message to WhatsApp
//         const whatsappMessage = `Hello, my name is ${formData.name}. My mobile number is ${formData.mobile}. I am interested in a *${formData.eventType}* event. Here is my message: ${formData.message}`;
//         const whatsappURL = `https://wa.me/9080787009?text=${encodeURIComponent(whatsappMessage)}`;
//         window.open(whatsappURL, "_blank");

//         setNotification({ type: "success", message: "Your message has been sent via WhatsApp!" });

//         setFormData({
//             name: "",
//             email: "",
//             mobile: "",
//             eventType: "",
//             message: "",
//         });

//         // Clear the notification after 3 seconds
//         setTimeout(() => setNotification(null), 3000);
//     };

//     return (
//         <section id="contact" className="bg-black py-20 md:py-32 relative">
//             <div className="container mx-auto px-4">
//                 <motion.div
//                     className="text-center mb-16"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     <h2 className="text-3xl md:text-4xl text-[#ffff] font-montserrat font-bold mb-4">
//                         <span className="text-[#ef4949]">Contact </span>Us
//                     </h2>
//                     <h2 className="text-2xl md:text-3xl text-[#ffff] font-montserrat font-bold mb-4">
//                         <span className="text-[#ef4949]"> </span>Salem
//                     </h2>
//                     <p className="text-[#DDDDDD] max-w-2xl mx-auto">
//                         10, 5 th Cross, Brindhavan Road, Fairlands, Salem – 636016. Tamilnadu, India. <br />

//                         163/94M, Narayana Pillai Street, Peramanur, Salem – 636007. Tamilnadu, India.


//                     </p>
//                 </motion.div>


//                 {/* Notification */}
//                 {notification && (
//                     <div
//                         className={`mb-6 p-4 rounded-lg text-center ${notification.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
//                             }`}
//                     >
//                         {notification.message}
//                     </div>
//                 )}

//                 <div className="grid md:grid-cols-2 gap-12">
//                     {/* Contact Form */}
//                     <motion.div
//                         className="bg-[#111111] p-8 rounded-xl shadow-lg border border-[#222222]"
//                         initial={{ opacity: 0, x: -50 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.6, delay: 0.2 }}
//                     >
//                         <h3 className="text-2xl font-montserrat font-bold mb-6 text-[#ef4949]">Let's Connect</h3>

//                         <form className="space-y-6" onSubmit={handleSubmit}>
//                             <motion.div
//                                 className="floating-input relative rounded-lg overflow-hidden border border-[#222222]"
//                                 whileHover={{ y: -2 }}
//                             >
//                                 <input
//                                     type="text"
//                                     id="name"
//                                     placeholder="Full Name"
//                                     className="block w-full bg-[#222222] text-[#EEEEEE] p-4 focus:outline-none"
//                                     required
//                                     value={formData.name}
//                                     onChange={handleChange}
//                                 />
//                             </motion.div>

//                             <motion.div
//                                 className="floating-input relative rounded-lg overflow-hidden border border-[#222222]"
//                                 whileHover={{ y: -2 }}
//                             >
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     placeholder="Email Address"
//                                     className="block w-full bg-[#222222] text-[#EEEEEE] p-4 focus:outline-none"
//                                     required
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                 />
//                             </motion.div>

//                             <motion.div
//                                 className="floating-input relative rounded-lg overflow-hidden border border-[#222222]"
//                                 whileHover={{ y: -2 }}
//                             >
//                                 <input
//                                     type="text"
//                                     id="mobile"
//                                     placeholder="Mobile Number"
//                                     className="block w-full bg-[#222222] text-[#EEEEEE] p-4 focus:outline-none"
//                                     required
//                                     value={formData.mobile}
//                                     onChange={handleChange}
//                                 />
//                             </motion.div>

//                             <motion.div
//                                 className="floating-input relative rounded-lg overflow-hidden border border-[#222222]"
//                                 whileHover={{ y: -2 }}
//                             >
//                                 <select
//                                     id="eventType"
//                                     className="block w-full bg-[#222222] text-[#EEEEEE] p-4 focus:outline-none appearance-none"
//                                     required
//                                     value={formData.eventType}
//                                     onChange={handleChange}
//                                 >
//                                     <option value="" disabled>
//                                         Select Event Type
//                                     </option>
//                                     <option value="Wedding">
//                                         <b>Wedding</b>
//                                     </option>
//                                     <option value="Corporate Event">
//                                         <b>Corporate Event</b>
//                                     </option>
//                                     <option value="Birthday Party">
//                                         <b>Birthday Party</b>
//                                     </option>
//                                     <option value="Concert">
//                                         <b>Concert</b>
//                                     </option>
//                                     <option value="Exhibition">
//                                         <b>Exhibition</b>
//                                     </option>
//                                     <option value="Other">
//                                         <b>Other</b>
//                                     </option>
//                                 </select>
//                             </motion.div>

//                             <motion.div
//                                 className="floating-input relative rounded-lg overflow-hidden border border-[#222222]"
//                                 whileHover={{ y: -2 }}
//                             >
//                                 <textarea
//                                     id="message"
//                                     rows={4}
//                                     placeholder="Your Message"
//                                     className="block w-full bg-[#222222] text-[#EEEEEE] p-4 focus:outline-none"
//                                     required
//                                     value={formData.message}
//                                     onChange={handleChange}
//                                 ></textarea>
//                             </motion.div>

//                             <motion.button
//                                 type="submit"
//                                 className="w-full bg-[#ef4949] hover:bg-opacity-90 text-[#EEEEEE] px-6 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 btn-glow"
//                                 whileHover={{ scale: 1.03 }}
//                                 whileTap={{ scale: 0.98 }}
//                             >
//                                 Send Message
//                             </motion.button>
//                         </form>
//                     </motion.div>

//                     {/* Contact Info Section */}
//                     <motion.div
//                         className="bg-[#202938] p-8 rounded-xl shadow-lg border border-[#222222] flex flex-col justify-between"
//                         initial={{ opacity: 0, x: 50 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.6, delay: 0.2 }}
//                     >
//                         <div className="space-y-6">
//                             <div className="flex items-start">
//                                 <div className="flex-shrink-0">
//                                     <i className="fas fa-map-marker-alt text-[#ef4949] text-xl"></i>
//                                 </div>
//                                 <div className="ml-4">
//                                     <h3 className="text-lg font-medium text-gray-100">Address</h3>
//                                     <p className="mt-1 text-gray-400">10, 5 th Cross, Brindhavan Road, Fairlands, Salem – 636016. Tamilnadu, India.
//                                         <br />
//                                         163/94M, Narayana Pillai Street, Peramanur, Salem – 636007. Tamilnadu, India.</p>
//                                 </div>
//                             </div>

//                             <div className="flex items-start">
//                                 <div className="flex-shrink-0">
//                                     <i className="fas fa-phone-alt text-[#ef4949] text-xl"></i>
//                                 </div>
//                                 <div className="ml-4">
//                                     <h3 className="text-lg font-medium text-gray-100">Phone</h3>
//                                     <p className="mt-1 text-gray-400">+91 82200 03139 | 95855 53775</p>
//                                 </div>
//                             </div>

//                             <div className="flex items-start">
//                                 <div className="flex-shrink-0">
//                                     <i className="fas fa-envelope text-[#ef4949] text-xl"></i>
//                                 </div>
//                                 <div className="ml-4">
//                                     <h3 className="text-lg font-medium text-gray-100">Email</h3>
//                                     <p className="mt-1 text-gray-400">contact.cube3events@gmail.com <br />
//                                         cube3eventssalem@gmail.com</p>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="mt-8">
//                             <img
//                                 src={Contactimg}
//                                 alt="Contact"
//                                 className="w-full h-auto rounded-lg shadow-md"
//                             />
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ContactSection;



// import { useState } from "react";
// import { FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
// import { motion } from "framer-motion";

// export default function Contact() {
//     const [formData, setFormData] = useState({
//         fullName: "",
//         email: "",
//         mobile: "",
//         eventType: "",
//         message: "",
//     });

//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);

//         // Send message to WhatsApp
//         const whatsappMessage = `Hello, my name is ${formData.fullName}. My mobile number is ${formData.mobile}. I am interested in a ${formData.eventType} event. Here is my message: ${formData.message}`;
//         const whatsappURL = `https://wa.me/9080787009?text=${encodeURIComponent(whatsappMessage)}`;
//         window.open(whatsappURL, "_blank");

//         setFormData({
//             fullName: "",
//             email: "",
//             mobile: "",
//             eventType: "",
//             message: "",
//         });
//         setIsSubmitting(false);
//     };

//     return (
//         <>
//             {/* Hero Section */}
//             <section className="lg:py-32 pb-10 md:py-32 px-4 sm:px-6 lg:px-8 w-full bg-white">
//                 <motion.div
//                     className="text-center"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     <h2 className="text-3xl md:text-4xl text-black font-montserrat font-bold mb-4">
//                         <span className="text-[#ef4949]">Contact</span> Us
//                     </h2>
//                     <p className="text-black max-w-2xl mx-auto">
//                         We handle every aspect of your event with precision and creativity,
//                         ensuring a seamless experience from start to finish.
//                     </p>
//                 </motion.div>
//             </section>

//             {/* Contact Form and Info Section */}
//             <section className="pb-12  md:pb-16 bg-white">
//                 <div className="container mx-auto px-4 md:px-6">
//                     <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

//                         {/* Contact Information Side */}
//                         <div className="lg:col-span-5 order-2 lg:order-1">
//                             <div className="bg-white rounded-xl p-8 h-full shadow-lg border border-gray-200">
//                                 <h2 className="text-2xl font-bold mb-6 text-black">Contact Information</h2>

//                                 {/* WhatsApp Button */}
//                                 <a
//                                     href="https://wa.me/9080787009"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="flex items-center justify-center md:justify-start mb-8 bg-[#25D366] text-white py-3 px-6 rounded-lg shadow-md hover:bg-[#128C7E] transition-colors w-full md:w-auto"
//                                 >
//                                     <FaWhatsapp className="text-xl mr-2" />
//                                     <span>Connect on WhatsApp</span>
//                                 </a>

//                                 {/* Address */}
//                                 <div className="mb-8">
//                                     <div className="flex items-start">
//                                         <div className="bg-[#ef4949] bg-opacity-10 rounded-full p-3 mr-4">
//                                             <FaMapMarkerAlt className="text-[#ef4949] text-xl" />
//                                         </div>
//                                         <div>
//                                             <h3 className="font-bold text-lg mb-1 text-black">Address</h3>
//                                             <p className="text-black">
//                                                 <b>Salem</b><br />
//                                                 10, 5th Cross, Brindhavan Road, Fairlands, Salem – 636016.<br />
//                                                 163/94M, Narayana Pillai Street, Peramanur, Salem – 636007.<br />
//                                                 Tamilnadu, India.
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Phone */}
//                                 <div className="mb-8">
//                                     <div className="flex items-start">
//                                         <div className="bg-[#ef4949] bg-opacity-10 rounded-full p-3 mr-4">
//                                             <FaPhoneAlt className="text-[#ef4949] text-xl" />
//                                         </div>
//                                         <div>
//                                             <h3 className="font-bold text-lg mb-1 text-black">Phone</h3>
//                                             <p className="text-black">
//                                                 <a href="tel:+919080787009" className="hover:text-[#ef4949] transition-colors">
//                                                     +91 9080787009
//                                                 </a>
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Email */}
//                                 <div className="mb-8">
//                                     <div className="flex items-start">
//                                         <div className="bg-[#ef4949] bg-opacity-10 rounded-full p-3 mr-4">
//                                             <FaEnvelope className="text-[#ef4949] text-xl" />
//                                         </div>
//                                         <div>
//                                             <h3 className="font-bold text-lg mb-1 text-black">Email</h3>
//                                             <p className="text-black">
//                                                 <a href="mailto:contact.cube3events@gmail.com" className="hover:text-[#ef4949] transition-colors">
//                                                     contact.cube3events@gmail.com
//                                                 </a><br />
//                                                 <a href="mailto:cube3eventssalem@gmail.com" className="hover:text-[#ef4949] transition-colors">
//                                                     cube3eventssalem@gmail.com
//                                                 </a>
//                                             </p>
//                                         </div>


// <br />

//                                     </div>

//                                 </div>
//                                  <div className="mb-8">
//                                     <div className="flex items-start">
//                                         <div className="bg-[#ef4949] bg-opacity-10 rounded-full p-3 mr-4">
//                                             <FaMapMarkerAlt className="text-[#ef4949] text-xl" />
//                                         </div>
//                                         <div className="flex-1">
//                                             <h3 className="font-bold text-lg mb-2 text-black">Our Location</h3>
//                                             <div className="rounded-lg overflow-hidden shadow-sm">
//                                                 <iframe 
//                                                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d690.7162231050424!2d78.13723009195954!3d11.674486586565644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1ec8cefe40b%3A0xd08a94f36dd50431!2sCube3%20Events!5e0!3m2!1sen!2sin!4v1747020833413!5m2!1sen!2sin" 
//                                                     width="100%"
//                                                     height="250"
//                                                     style={{ border: 0 }}
//                                                     allowFullScreen
//                                                     loading="lazy"
//                                                     referrerPolicy="no-referrer-when-downgrade"
//                                                     className="w-full"
//                                                 ></iframe>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>

//                         {/* Contact Form Side */}
//                         <div className="lg:col-span-7 order-1 lg:order-2">
//                             <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
//                                 <h2 className="text-2xl font-bold mb-6 text-black">Send Us a Message</h2>

//                                 <form onSubmit={handleSubmit} className="space-y-6">
//                                     <div>
//                                         <label className="block font-medium mb-2 text-black">Your Name</label>
//                                         <input
//                                             type="text"
//                                             name="fullName"
//                                             value={formData.fullName}
//                                             onChange={handleChange}
//                                             placeholder="John Doe"
//                                             className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ef4949]"
//                                             required
//                                         />
//                                     </div>
//                                     <div>
//                                         <label className="block font-medium mb-2 text-black">Your Email</label>
//                                         <input
//                                             type="email"
//                                             name="email"
//                                             value={formData.email}
//                                             onChange={handleChange}
//                                             placeholder="example@email.com"
//                                             className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ef4949]"
//                                             required
//                                         />
//                                     </div>
//                                     <div>
//                                         <label className="block font-medium mb-2 text-black">Mobile</label>
//                                         <input
//                                             type="text"
//                                             name="mobile"
//                                             value={formData.mobile}
//                                             onChange={handleChange}
//                                             placeholder="123-456-7890"
//                                             className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ef4949]"
//                                             required
//                                         />
//                                     </div>
//                                     <div>
//                                         <label className="block font-medium mb-2 text-black">Event Type</label>
//                                         <select
//                                             name="eventType"
//                                             value={formData.eventType}
//                                             onChange={handleChange}
//                                             className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ef4949] text-black"
//                                             required
//                                         >
//                                             <option value="" disabled>Select Event Type</option>
//                                             <option value="Wedding">Wedding</option>
//                                             <option value="Corporate Event">Corporate Event</option>
//                                             <option value="Birthday Party">Birthday Party</option>
//                                             <option value="Concert">Concert</option>
//                                             <option value="Exhibition">Exhibition</option>
//                                             <option value="Other">Other</option>
//                                         </select>
//                                     </div>
//                                     <div>
//                                         <label className="block font-medium mb-2 text-black">Message</label>
//                                         <textarea
//                                             name="message"
//                                             value={formData.message}
//                                             onChange={handleChange}
//                                             placeholder="Write your message here..."
//                                             className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ef4949] text-black"
//                                             rows="5"
//                                             required
//                                         ></textarea>
//                                     </div>
//                                     <button
//                                         type="submit"
//                                         className="w-full bg-[#ef4949] text-white py-3 rounded-lg hover:bg-[#d93b3b] transition-colors font-medium"
//                                         disabled={isSubmitting}
//                                     >
//                                         {isSubmitting ? "Sending..." : "Send Message"}
//                                     </button>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }


import { useEffect, useState } from "react";
import { FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { RiBuilding3Fill } from "react-icons/ri";
import { RiBuilding2Fill } from "react-icons/ri";
import Aos from "aos";
export default function Contact() {
     useEffect(() => {
            Aos.init({
                duration: 800,
                once: true,
                offset: 100
            });
            
            return () => Aos.refresh();
        }, []);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        mobile: "",
        eventType: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Send message to WhatsApp
        const whatsappMessage = `Hello, my name is ${formData.fullName}. My mobile number is ${formData.mobile}. I am interested in a ${formData.eventType} event. Here is my message: ${formData.message}`;
        const whatsappURL = `https://wa.me/9080787009?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, "_blank");

        setFormData({
            fullName: "",
            email: "",
            mobile: "",
            eventType: "",
            message: "",
        });
        setIsSubmitting(false);
    };

    return (
        <div className="bg-[#e8e8e849]">
            {/* Hero Section */}
            <section className="lg:pb-16 pb-10 pt-8 md:pb-32   px-4 sm:px-6 lg:px-8 w-full ">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl text-black font-montserrat font-bold mb-4">
                        Begin Your  <span className="text-[#ef4949]"> Exceptional</span> Event
                    </h2>
                    <p className="text-black max-w-2xl mx-auto">
                        We handle every aspect of your event with precision and creativity,
                        ensuring a seamless experience from start to finish.
                    </p>
                </motion.div>
            </section>

            {/* Contact Form and Info Section */}
            <section className="pb-12 md:pb-16 ">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                        {/* Contact Information Side */}
                        <div className="lg:col-span-5 order-2 lg:order-1">
                            <div className="bg-white rounded-xl pt-8 pl-8 pr-8  h-full shadow-lg border border-gray-200">
                                <h2 className="text-2xl font-bold mb-6 text-black">Contact Information</h2>

                                {/* WhatsApp Button */}
                                {/* <a
                                    href="https://wa.me/9080787009?text=Hi%20Cube%20Events,%20I%20want%20to%20discuss%20about%20an%20event"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center md:justify-start mb-8 bg-[#25D366] text-white py-3 px-6 rounded-lg shadow-md hover:bg-[#128C7E] transition-colors w-full md:w-auto"
                                >
                                    <FaWhatsapp className="text-xl mr-2" />
                                    <span>Connect on WhatsApp</span>
                                </a> */}

                                {/* Address */}
                                <div className="mb-8">
                                    <div className="flex items-start">
                                        <div className="bg-[#e5e5e5] bg-opacity-10 rounded p-3 mr-4">
                                            <RiBuilding2Fill className="text-[#ef4949] text-xl" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1 text-black">Address</h3>
                                            <b>Salem</b><br />
                                            <p className="text-black"> 10, 5th Cross, Brindhavan Road, Fairlands, Salem – 636016. </p>
                                            <br /> <p>  163/94M, Narayana Pillai Street, Peramanur, Salem – 636007.<br />
                                                Tamilnadu, India.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="mb-8">
                                    <div className="flex items-start">
                                        <div className="bg-[#e5e5e5] bg-opacity-10 rounded p-3 mr-4">
                                            <FaPhoneAlt className="text-[#ef4949] text-xl" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1 text-black">Phone</h3>
                                            <p className="text-black">
                                                <a href="tel:+919080787009" className="hover:text-[#ef4949] transition-colors">
                                                    +91 9080787009
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="mb-8">
                                    <div className="flex items-start">
                                        <div className="bg-[#e5e5e5] bg-opacity-10 rounded p-3 mr-4">
                                            <FaEnvelope className="text-[#ef4949] text-xl" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1 text-black">Email</h3>
                                            <p className="text-black">
                                                <a href="mailto:contact.cube3events@gmail.com" className="hover:text-[#ef4949] transition-colors">
                                                    contact.cube3events@gmail.com
                                                </a><br />

                                            </p>
                                            <br />  <p><a href="mailto:cube3eventssalem@gmail.com" className="hover:text-[#ef4949] transition-colors">
                                                cube3eventssalem@gmail.com
                                            </a></p>
                                        </div>
                                    </div>
                                </div>

                                {/* Map Section */}
                                <div className="mb-8">
                                    <div className="flex items-start">
                                        <div className="bg-[#e5e5e5] bg-opacity-10 rounded p-3 mr-4">
                                            <FaMapMarkerAlt className="text-[#ef4949] text-xl" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-lg mb-2 text-black">Location</h3>
                                            <br />
                                            <div className="rounded-lg overflow-hidden shadow-sm">
                                                <iframe
                                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d690.7162231050424!2d78.13723009195954!3d11.674486586565644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1ec8cefe40b%3A0xd08a94f36dd50431!2sCube3%20Events!5e0!3m2!1sen!2sin!4v1747020833413!5m2!1sen!2sin"
                                                    width="100%"
                                                    height="250"
                                                    style={{ border: 0 }}
                                                    allowFullScreen
                                                    loading="lazy"
                                                    referrerPolicy="no-referrer-when-downgrade"
                                                    className="w-full"
                                                ></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Side */}
                        <div className="lg:col-span-7 order-1 lg:order-2">
                            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                                <h2 className="text-2xl font-bold mb-6 text-black">Send Us a Message</h2>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block font-medium mb-2 text-black">Your Name</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ef4949]"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-medium mb-2 text-black">Your Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="example@email.com"
                                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ef4949]"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-medium mb-2 text-black">Mobile</label>
                                        <input
                                            type="text"
                                            name="mobile"
                                            value={formData.mobile}
                                            onChange={handleChange}
                                            placeholder="123-456-7890"
                                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ef4949]"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-medium mb-2 text-black">Event Type</label>
                                        <select
                                            name="eventType"
                                            value={formData.eventType}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ef4949] text-black"
                                            required
                                        >
                                            <option value="" disabled>Select Event Type</option>
                                            <option value="Wedding">Wedding</option>
                                            <option value="Corporate Event">Corporate Event</option>
                                            <option value="Birthday Party">Birthday Party</option>
                                            <option value="Concert">Concert</option>
                                            <option value="Exhibition">Exhibition</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block font-medium mb-2 text-black">Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Write your message here..."
                                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ef4949] text-black"
                                            rows="7"
                                            required
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-[#25D366] text-white py-3 rounded-lg hover:bg-[#21a451] cursor-pointer transition-colors font-medium"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}