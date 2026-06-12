import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';
import { portfolioData } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useParallax';
import TextReveal from './TextReveal';

const Contact = () => {
  const { personal } = portfolioData;
  const { toast } = useToast();
  const [formRef, formVisible] = useScrollReveal();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      toast({ title: "Message Sent!", description: "Thank you for reaching out. I'll get back to you soon." });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-teal-200/20 dark:bg-teal-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <TextReveal
            tag="h2"
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 justify-center"
            delay={0}
            stagger={0.09}
            duration={0.85}
          >
            Get In Touch
          </TextReveal>
          <div className="w-20 h-1 bg-teal-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Have a project in mind? Let's work together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            {[
              { icon: Mail, label: 'Email', content: <a href={`mailto:${personal.email}`} className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors break-all">{personal.email}</a> },
              { icon: Phone, label: 'Phone', content: <a href={`tel:${personal.phone}`} className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">{personal.phone}</a> },
              { icon: MapPin, label: 'Location', content: <p className="text-gray-600 dark:text-gray-400">Andhra Pradesh, India</p> },
            ].map(({ icon: Icon, label, content }) => (
              <div key={label} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{label}</h3>
                    {content}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            ref={formRef}
            className="lg:col-span-2"
            style={{
              opacity: formVisible ? 1 : 0,
              transform: formVisible ? 'translateX(0)' : 'translateX(32px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className={errors.name ? 'border-red-500' : ''} />
                  {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" className={errors.email ? 'border-red-500' : ''} />
                  {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject *</Label>
                <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="What's this about?" className={errors.subject ? 'border-red-500' : ''} />
                {errors.subject && <p className="text-sm text-red-500">{errors.subject}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project or inquiry..." rows={6} className={errors.message ? 'border-red-500' : ''} />
                {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 px-8 py-6 text-base">
                {isSubmitting ? 'Sending...' : <><span>Send Message</span><Send className="ml-2 h-5 w-5" /></>}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
