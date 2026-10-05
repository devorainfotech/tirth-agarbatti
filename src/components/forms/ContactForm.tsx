'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { FadeUp } from '@/components/ui/AnimateIn';

interface FormState {
  name: string;
  phone: string;
  email: string;
  company: string;
  city: string;
  enquiryType: string;
  message: string;
}

const initialState: FormState = {
  name: '',
  phone: '',
  email: '',
  company: '',
  city: '',
  enquiryType: '',
  message: '',
};

const enquiryTypes = [
  { value: '', label: 'Select Enquiry Type' },
  { value: 'product', label: 'Product Enquiry' },
  { value: 'wholesale', label: 'Wholesale Enquiry' },
  { value: 'retail', label: 'Retail / Distribution' },
  { value: 'general', label: 'General Enquiry' },
];

interface ContactFormProps {
  compact?: boolean;
}

export default function ContactForm({ compact = false }: ContactFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^[+\d\s-]{7,15}$/.test(form.phone.trim())) newErrors.phone = 'Enter a valid phone number';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) newErrors.email = 'Enter a valid email';
    if (!form.enquiryType) newErrors.enquiryType = 'Please select an enquiry type';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');

    // Placeholder: Replace with actual form submission logic (API route, email service, etc.)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      // In production: POST to /api/contact or a form service
      setStatus('success');
      setForm(initialState);
    } catch {
      setStatus('error');
    }
  };

  const fieldClass = (name: keyof FormState) =>
    `w-full px-4 ${compact ? 'py-2' : 'py-3'} font-body text-sm border bg-white transition-colors duration-200 focus:outline-none
    ${errors[name] ? 'border-red-400 focus:border-red-500' : 'border-[rgba(184,146,58,0.3)] focus:border-[var(--color-gold)]'}`;

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <CheckCircle size={48} style={{ color: 'var(--color-gold)' }} />
        <h3 className="font-display text-3xl" style={{ color: 'var(--color-charcoal)', fontWeight: 400 }}>
          Enquiry Received
        </h3>
        <p className="font-body" style={{ color: 'var(--color-charcoal-light)' }}>
          Thank you for reaching out. We&apos;ll get back to you shortly.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 font-body text-[0.75rem] tracking-[0.12em] uppercase underline"
          style={{ color: 'var(--color-burgundy)' }}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact enquiry form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Name */}
        <div>
          <label htmlFor="contact-name" className="label-sm block mb-1.5" style={{ color: 'var(--color-charcoal-mid)' }}>
            Name *
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={fieldClass('name')}
            placeholder="Your full name"
            autoComplete="name"
          />
          {errors.name && <p className="mt-1 text-xs text-red-500 font-body">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="contact-phone" className="label-sm block mb-1.5" style={{ color: 'var(--color-charcoal-mid)' }}>
            Phone *
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className={fieldClass('phone')}
            placeholder="+91 XXXXX XXXXX"
            autoComplete="tel"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500 font-body">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" className="label-sm block mb-1.5" style={{ color: 'var(--color-charcoal-mid)' }}>
            Email *
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={fieldClass('email')}
            placeholder="your@email.com"
            autoComplete="email"
          />
          {errors.email && <p className="mt-1 text-xs text-red-500 font-body">{errors.email}</p>}
        </div>

        {!compact && (
          <div>
            <label htmlFor="contact-company" className="label-sm block mb-1.5" style={{ color: 'var(--color-charcoal-mid)' }}>
              Company Name
            </label>
            <input
              id="contact-company"
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              className={fieldClass('company')}
              placeholder="Company (optional)"
              autoComplete="organization"
            />
          </div>
        )}

        {!compact && (
          <div>
            <label htmlFor="contact-city" className="label-sm block mb-1.5" style={{ color: 'var(--color-charcoal-mid)' }}>
              City
            </label>
            <input
              id="contact-city"
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              className={fieldClass('city')}
              placeholder="Your city"
              autoComplete="address-level2"
            />
          </div>
        )}

        {/* Enquiry Type */}
        <div>
          <label htmlFor="contact-enquiry-type" className="label-sm block mb-1.5" style={{ color: 'var(--color-charcoal-mid)' }}>
            Enquiry Type *
          </label>
          <select
            id="contact-enquiry-type"
            name="enquiryType"
            value={form.enquiryType}
            onChange={handleChange}
            className={fieldClass('enquiryType')}
          >
            {enquiryTypes.map((t) => (
              <option key={t.value} value={t.value} disabled={t.value === ''}>
                {t.label}
              </option>
            ))}
          </select>
          {errors.enquiryType && <p className="mt-1 text-xs text-red-500 font-body">{errors.enquiryType}</p>}
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className="label-sm block mb-1.5" style={{ color: 'var(--color-charcoal-mid)' }}>
            Message *
          </label>
          <textarea
            id="contact-message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={compact ? 3 : 5}
            className={`${fieldClass('message')} resize-y`}
            placeholder="Tell us about your enquiry..."
          />
          {errors.message && <p className="mt-1 text-xs text-red-500 font-body">{errors.message}</p>}
        </div>
      </div>

      {/* Error state */}
      {status === 'error' && (
        <div className="mt-4 flex items-center gap-2 text-red-500 text-sm font-body">
          <AlertCircle size={16} />
          Something went wrong. Please try again.
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className={`${compact ? 'mt-4 px-6 py-3' : 'mt-6 px-8 py-4'} inline-flex items-center gap-3 font-body text-[0.75rem] tracking-[0.14em] uppercase
          transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed group
          text-white bg-[var(--color-burgundy)] hover:bg-[var(--color-burgundy-dark)]`}
      >
        {status === 'submitting' ? 'Sending...' : 'Send Enquiry'}
        {status !== 'submitting' && (
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </button>
    </form>
  );
}
