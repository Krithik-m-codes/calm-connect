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
      className={`rounded-[2rem] p-8 lg:p-10 border border-soul-sage/15 ${className}`}
      style={{
        backgroundColor: "var(--color-soul-cream)",
        filter: "drop-shadow(0 20px 60px rgba(45, 74, 53, 0.06))",
      }}
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        <div className="lg:w-1/3 space-y-3 text-center lg:text-left">
          <h3 className="font-soul text-3xl lg:text-4xl text-bg-deep">
            Let's Connect for Your Best Care
          </h3>
          <p className="text-base font-science" style={{ color: "#6b6b6b" }}>
            Take the first step towards your best healing. Request a free
            consultation today.
          </p>
        </div>

        <div className="w-full lg:w-2/3">
          {status === "success" ? (
            <div className="bg-soul-sage/15 text-bg-deep p-6 rounded-2xl text-center font-medium h-full flex items-center justify-center font-bridge">
              Thank you! We'll be in touch soon with the best next steps.
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
                  className="w-full px-5 py-4 rounded-xl border border-soul-sage/20 focus:outline-none focus:ring-2 focus:ring-soul-sage/40 transition-all duration-500 placeholder:opacity-50 font-science"
                  style={{
                    backgroundColor: "white",
                    color: "var(--color-bg-deep)",
                  }}
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
                  className="w-full px-5 py-4 rounded-xl border border-soul-sage/20 focus:outline-none focus:ring-2 focus:ring-soul-sage/40 transition-all duration-500 placeholder:opacity-50 font-science"
                  style={{
                    backgroundColor: "white",
                    color: "var(--color-bg-deep)",
                  }}
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
                  placeholder="How can I best help you today?"
                  className="w-full px-5 py-4 rounded-xl border border-soul-sage/20 focus:outline-none focus:ring-2 focus:ring-soul-sage/40 transition-all duration-500 resize-none placeholder:opacity-50 font-science"
                  style={{
                    backgroundColor: "white",
                    color: "var(--color-bg-deep)",
                  }}
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
