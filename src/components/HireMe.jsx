import { useState } from 'react';
import { sendEmail } from '../EmailService';

const HireMeForm = () => {
    const [formData, setFormData] = useState({
        user_name: '',
        to_name: 'Riasat Raihan Noor',
        user_email: '',
        subject: '',
        message: '',
    });

    const [isSent, setIsSent] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const success = await sendEmail(formData);

        if (success) {
            setFormData({ user_name: '', user_email: '', subject: '', message: '' });
            setIsSent(true);
        } else {
            // Handle the case where sending the email fails
        }
    };
    return (
        <div className="w-full flex flex-col px-8 md:px-80 py-20">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-10 text-center">Hire Me</h2>
            {isSent ? (
                <div className="bg-green-100 text-green-900 px-4 py-2 rounded mb-4">
                    Message sent successfully!
                </div>
            ) : null}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                        className="input input-bordered w-full "
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input
                        type="email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Enter your email address"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Subject</label>
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Enter the subject"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="input input-bordered w-full min-h-[150px]"
                        rows="40"
                        placeholder="Enter your message"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default HireMeForm;
