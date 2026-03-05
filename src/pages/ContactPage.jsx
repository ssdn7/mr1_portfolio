import React from "react";
import { FaLinkedinIn, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

function ContactPage() {
  const socials = [
    {
      href: "https://www.linkedin.com/in/khe-seangleng-6943b83b2/",
      label: "LinkedIn",
      color: "bg-indigo-600 hover:bg-indigo-700",
      icon: <FaLinkedinIn size={22} />,
    },
    {
      href: "https://t.me/seanglengKhe",
      label: "Telegram",
      color: "bg-sky-500 hover:bg-sky-600",
      icon: <FaTelegramPlane size={22} />,
    },
    {
      href: "https://wa.me/yourphonenumber",
      label: "WhatsApp",
      color: "bg-green-500 hover:bg-green-600",
      icon: <FaWhatsapp size={22} />,
    },
  ];

  return (
    <section className="min-h-[85vh] bg-gradient-to-b flex items-center justify-center dark:from-slate-900 dark:to-slate-800 px-4 py-10 opacity-0 fade-in">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center pt-20">
        
        {/* LEFT SIDE */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold text-indigo-600 mb-4 animate-slide-in">
            Get in Touch
          </h1>

          <p className="text-slate-600 dark:text-slate-300 max-w-md mx-auto lg:mx-0 mb-10">
            I'm always open to discussing new projects, collaboration, or
            opportunities. Feel free to reach out through the platforms below.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center lg:justify-start gap-6 mb-8 flex-wrap">
            {socials.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center tap-pop"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div
                  className={`${item.color} w-14 h-14 flex items-center justify-center rounded-full text-white shadow-md group-hover:shadow-xl transition duration-300 active:scale-90`}
                >
                  {item.icon}
                </div>
                <span className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                  {item.label}
                </span>
              </a>
            ))}
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <p>
              Email:{" "}
              <a
                href="mailto:kheseangleng@gmail.com"
                className="text-indigo-600 hover:underline"
              >
                kheseangleng@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="#"
                className="text-green-600 hover:underline"
              >
                +855 78 620 910 / +66-969138054 
              </a>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg w-full">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Send a Message
          </h2>

          <form className="space-y-5">
            <div>
              <label className="text-sm text-slate-600 dark:text-slate-400">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-indigo-500 outline-none dark:bg-slate-800 dark:border-slate-700"
              />
            </div>

            <div>
              <label className="text-sm text-slate-600 dark:text-slate-400">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-indigo-500 outline-none dark:bg-slate-800 dark:border-slate-700"
              />
            </div>

            <div>
              <label className="text-sm text-slate-600 dark:text-slate-400">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-indigo-500 outline-none dark:bg-slate-800 dark:border-slate-700"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition font-semibold shadow-md hover:shadow-lg tap-pop active:scale-95"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;