import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import Contactimg from '../assets/contactimg.png'
export default function ContactUs() {
    return (
        <div className="min-h-screen bg bg-gradient-to-t from-[#2b6cb0] to-[#134156] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-100 sm:text-4xl">
                        Contact Us
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-gray-400">
                        Have any questions? Reach out to us directly.
                    </p>
                </div>

                <div className="mt-16 flex flex-col md:flex-row gap-8">
                    {/* Contact Form */}
                    <div className="md:w-1/2 bg-[#202938] px-[20px] py-[10px] rounded-lg ">
                        <form className="space-y-6">

                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-gray-100 placeholder-gray-400 transition-all"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-gray-100 placeholder-gray-400 transition-all"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-gray-100 placeholder-gray-400 transition-all"
                                    placeholder="Enter subject"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-gray-100 placeholder-gray-400 transition-all resize-y"
                                    placeholder="Write your message..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="  bg-gray-800 lg:ml-[50px] md:ml-[0px] sm:ml-[0px]  rounded-lg p-8">
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <FiMapPin className="h-6 w-6 text-indigo-500" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-100">Address</h3>
                                    <p className="mt-1 text-gray-400">Salem, Tamilnadu</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <FiPhone className="h-6 w-6 text-indigo-500" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-100">Phone</h3>
                                    <p className="mt-1 text-gray-400">+91 9080787009</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <FiMail className="h-6 w-6 text-indigo-500" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-100">Email</h3>
                                    <p className="mt-1 text-gray-400">boopathi7476@gmail.com</p>
                                </div>
                            </div><div >
                                <img className='w-[auto] h-[250px]  ' src={Contactimg} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}