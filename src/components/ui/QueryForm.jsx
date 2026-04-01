import { useState } from "react";
import Button from "./Button";

export default function QueryForm({ className = "" }) {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      // Reset after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <div
      className={`bg-white rounded-4xl p-8 lg:p-10 shadow-[0_20px_60px_rgba(24,45,41,0.06)] border border-brand-dark/5 ${className}`}
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        <div className="lg:w-1/3 space-y-3 text-center lg:text-left">
          <h3 className="font-heading text-3xl lg:text-4xl text-brand-dark">
            Let's Connect
          </h3>
          <p className="text-base text-brand-muted">
            Take the first step towards healing. Request a free consultation
            today.
          </p>
        </div>

        <div className="w-full lg:w-2/3">
          {status === "success" ? (
            <div className="bg-brand-mint/30 text-brand-dark p-6 rounded-2xl text-center font-medium h-full flex items-center justify-center">
              Thank you! We'll be in touch soon.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-5 py-4 rounded-xl bg-brand-sand/30 border border-brand-dark/10 focus:outline-none focus:ring-2 focus:ring-brand-coral/50 transition-all text-brand-dark placeholder:text-brand-muted/70"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email / Phone
                </label>
                <input
                  type="text"
                  id="email"
                  required
                  placeholder="Email or Phone Number"
                  className="w-full px-5 py-4 rounded-xl bg-brand-sand/30 border border-brand-dark/10 focus:outline-none focus:ring-2 focus:ring-brand-coral/50 transition-all text-brand-dark placeholder:text-brand-muted/70"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="sr-only">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  required
                  rows={2}
                  placeholder="How can I help you today?"
                  className="w-full px-5 py-4 rounded-xl bg-brand-sand/30 border border-brand-dark/10 focus:outline-none focus:ring-2 focus:ring-brand-coral/50 transition-all text-brand-dark placeholder:text-brand-muted/70 resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2 mt-2">
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full py-4 text-base lg:text-lg justify-center"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Sending..." : "Send Request"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
