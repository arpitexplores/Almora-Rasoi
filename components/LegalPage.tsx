import React, { useEffect } from 'react';
import { ArrowLeft, Shield, FileText, RefreshCcw } from 'lucide-react';
import { View } from '../types';

interface LegalPageProps {
  type: View;
  onBack: () => void;
}

const LegalPage: React.FC<LegalPageProps> = ({ type, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  const content = {
    privacy: {
      title: 'Privacy Policy',
      icon: <Shield className="text-red-600" size={48} />,
      lastUpdated: 'October 24, 2023',
      body: `At Almora Rasoi, we value your privacy. This policy outlines how we collect and use your data. 
      We collect personal information such as name, address, and phone number only when you place an order. 
      This data is used solely for order fulfillment and improving our services. We do not sell your data to third parties.`
    },
    terms: {
      title: 'Terms of Service',
      icon: <FileText className="text-red-600" size={48} />,
      lastUpdated: 'October 24, 2023',
      body: `By using our website, you agree to comply with our terms. All content on this site is the property of Almora Rasoi. 
      Prices are subject to change without notice. We reserve the right to refuse service to anyone for any reason at any time.`
    },
    refund: {
      title: 'Refund Policy',
      icon: <RefreshCcw className="text-red-600" size={48} />,
      lastUpdated: 'October 24, 2023',
      body: `Due to the perishable nature of our products, we typically do not offer refunds. 
      However, if you receive a damaged or incorrect order, please contact us within 2 hours of delivery. 
      We will investigate and provide a replacement or credit at our discretion.`
    }
  };

  const page = content[type as keyof typeof content] || content.privacy;

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <a 
          href="/"
          onClick={(e) => { e.preventDefault(); onBack(); }}
          className="group flex items-center gap-2 text-slate-500 hover:text-red-600 font-bold transition-colors mb-12 inline-flex"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </a>

        <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-xl shadow-slate-200/50 border border-slate-100">
          <div className="mb-10">
            {page.icon}
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-6 mb-2 uppercase tracking-tight">
              {page.title}
            </h1>
            <p className="text-slate-400 font-medium text-sm tracking-widest uppercase">
              Last Updated: {page.lastUpdated}
            </p>
          </div>

          <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed">
            <p className="whitespace-pre-line">{page.body}</p>
            <h3 className="text-slate-900 font-bold mt-8 mb-4">Contact Information</h3>
            <p>
              If you have any questions about this {page.title}, please contact us at:
              <br />
              <strong>Email:</strong> support@almorarasoi.com
              <br />
              <strong>Phone:</strong> +91 96543 25380
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;