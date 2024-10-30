import { motion } from "framer-motion";
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import emailjs from 'emailjs-com';
import { Field, Label, Switch } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Contacts() {
    const [agreed, setAgreed] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phoneNumber: '',
        message: '',
    });
    const [confirmationMessage, setConfirmationMessage] = useState('');
    const [isMessageSuccess, setIsMessageSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formData,
            import.meta.env.VITE_EMAILJS_USER_ID,
        )
        .then((result) => {
            console.log(result.text);
            setConfirmationMessage('Message sent successfully!');
            setIsMessageSuccess(true);
            setFormData({
                firstName: '',
                lastName: '',
                company: '',
                email: '',
                phoneNumber: '',
                message: '',
            });
        }, (error) => {
            console.log(error.text);
            setConfirmationMessage('Failed to send message. Please try again.');
            setIsMessageSuccess(false);
        });
    };

    const handleCloseMessage = () => {
        setConfirmationMessage('');
    };

    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h1
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transition={{duration: 0.5}}
                className="my-10 text-center text-4xl"
            >
                Get In Touch!
            </motion.h1>
            <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="first-name" className="block text-sm tracking-tighter leading-6 text-white-900">
                            First name
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="firstName"
                                id="first-name"
                                value={formData.firstName}
                                onChange={handleChange}
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block text-sm tracking-tighter leading-6 text-white-900">
                            Last name
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="lastName"
                                id="last-name"
                                value={formData.lastName}
                                onChange={handleChange}
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="company" className="block text-sm tracking-tighter leading-6 text-white-900">
                            Company
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="company"
                                id="company"
                                value={formData.company}
                                onChange={handleChange}
                                autoComplete="organization"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm tracking-tighter leading-6 text-white-900">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                autoComplete="email"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="phone-number" className="block text-sm tracking-tighter leading-6 text-white-900">
                            Phone number
                        </label>
                        <div className="relative mt-2.5">
                            <input
                                type="tel"
                                name="phoneNumber"
                                id="phone-number"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                autoComplete="tel"
                                placeholder="Enter with country code"
                                className="block w-full rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm tracking-tighter leading-6 text-white-900">Message</label>
                        <div className="mt-2.5">
                            <textarea
                                name="message"
                                id="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <Field as="div" className="flex gap-x-4 sm:col-span-2">
                        <div className="flex h-6 items-center">
                            <Switch
                                checked={agreed}
                                onChange={setAgreed}
                                className={classNames(
                                    agreed ? 'bg-indigo-600' : 'bg-gray-200',
                                    'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                )}
                            >
                                <span className="sr-only">Agree to policies</span>
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        agreed ? 'translate-x-3.5' : 'translate-x-0',
                                        'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                                    )}
                                />
                            </Switch>
                        </div>
                        <Label className="block text-sm tracking-tighter leading-6 text-white-900">
                            By selecting this, you agree to send me the provided information via {' '}
                            <a href="#" className="font-semibold text-indigo-600">
                                Email
                            </a>.
                        </Label>
                    </Field>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Let's talk
                    </button>
                </div>
            </form>
            {confirmationMessage && (
                <div className={`mt-4 p-4 rounded-md ${isMessageSuccess ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    <div className="flex justify-between items-center">
                        <span>{confirmationMessage}</span>
                        <button onClick={handleCloseMessage} className="ml-2">
                            <XMarkIcon className="h-5 w-5 text-gray-500 hover:text-gray-700" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
