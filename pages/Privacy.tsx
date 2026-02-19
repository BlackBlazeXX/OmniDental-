
import React from 'react';
import { SEO } from '../components/SEO';

const Privacy: React.FC = () => {
    return (
        <div className="pt-40 pb-20 bg-white">
            <SEO
                title="Privacy Policy | OralCare"
                description="Our commitment to protecting your personal and medical data."
            />
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-serif mb-8 text-primary">Privacy Policy</h1>
                <p className="text-sm text-textPrimary/40 mb-12">Last Updated: February 2026</p>

                <div className="prose prose-lg text-textPrimary/70">
                    <h3 className="text-xl font-serif text-textPrimary mt-8 mb-4">1. Information We Collect</h3>
                    <p className="mb-4">We collect information you provide directly to us when you book an appointment, including your name, phone number, and treatment preferences.</p>

                    <h3 className="text-xl font-serif text-textPrimary mt-8 mb-4">2. How We Use Information</h3>
                    <p className="mb-4">We use your information to:
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li>Schedule and confirm your appointments.</li>
                            <li>Send appointment reminders via SMS or WhatsApp.</li>
                            <li>Improve our clinic services and website experience.</li>
                        </ul>
                    </p>

                    <h3 className="text-xl font-serif text-textPrimary mt-8 mb-4">3. Data Protection</h3>
                    <p className="mb-4">We implement security measures to maintain the safety of your personal information. Your medical records are kept strictly confidential in accordance with Indian Medical Council regulations.</p>

                    <h3 className="text-xl font-serif text-textPrimary mt-8 mb-4">4. Contact Us</h3>
                    <p className="mb-4">If you have any questions about this privacy policy, please contact us at hello@oralcare.com.</p>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
