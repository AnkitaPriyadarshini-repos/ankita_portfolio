import React, { useState } from 'react';

const ContactSection = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-bold mb-5 relative inline-block">
          Contact Me
          <div className="absolute -bottom-2 left-0 w-10 h-1.5 bg-[#ffdb70] rounded-full" />
        </h2>
        
        <div className="mt-8 glass-card p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-wider">Full Name</label>
                <input 
                  required
                  name="name"
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-[#2b2b2c] border border-[#383838] rounded-xl px-4 py-3 text-sm text-white focus:border-[#ffdb70] outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-wider">Email Address</label>
                <input 
                  required
                  name="email"
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-[#2b2b2c] border border-[#383838] rounded-xl px-4 py-3 text-sm text-white focus:border-[#ffdb70] outline-none transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-white/40 uppercase tracking-wider">Message</label>
              <textarea 
                required
                name="message"
                rows={5}
                placeholder="How can I help you?"
                className="w-full bg-[#2b2b2c] border border-[#383838] rounded-xl px-4 py-3 text-sm text-white focus:border-[#ffdb70] outline-none transition-colors resize-none"
              />
            </div>
            
            <button 
              disabled={status === 'sending'}
              type="submit"
              className="px-8 py-3 bg-gradient-to-br from-[#ffdb70] to-[#ffbb33] text-[#121212] rounded-xl font-bold text-sm shadow-[0_4px_20px_rgba(255,219,112,0.1)] hover:scale-[1.02] transition-all active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-emerald-400 text-sm font-medium">Message sent successfully! I'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm font-medium">Something went wrong. Please try again later.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
