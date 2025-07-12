"use client";

import { ChangeEvent, ReactNode, useState } from "react";

interface InputProps {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const Input = ({ name, value, onChange, placeholder }: InputProps) => (
  <input
    type="text"
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-yellow-600"
  />
);

interface TextareaProps {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

export const Textarea = ({
  name,
  value,
  onChange,
  placeholder,
}: TextareaProps) => (
  <textarea
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full px-4 py-2 border border-gray-600 rounded h-32 resize-none bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-yellow-600"
  />
);

interface ButtonProps {
  type: "button" | "submit" | "reset";
  children: ReactNode;
  className?: string;
}

export const Button = ({ type, children, className }: ButtonProps) => (
  <button
    type={type}
    className={`px-6 py-3 font-semibold text-white rounded transition bg-yellow-800 hover:bg-yellow-700 ${className}`}
  >
    {children}
  </button>
);

interface SelectProps {
  name: string;
  onValueChange: (value: string) => void;
  children: ReactNode;
  placeholder?: string;
}

export const Select = ({
  name,
  onValueChange,
  children,
  placeholder,
}: SelectProps) => (
  <select
    name={name}
    onChange={(e) => onValueChange(e.target.value)}
    className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-yellow-600"
  >
    <option value="" disabled hidden>
      {placeholder}
    </option>
    {children}
  </select>
);

interface SelectItemProps {
  value: string;
  children: ReactNode;
}

export const SelectItem = ({ value, children }: SelectItemProps) => (
  <option value={value}>{children}</option>
);

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    details: "",
    niche: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="w-full bg-gray-900/60 py-20 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Contact Form */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Focus On What You Do Best
          </h2>
          <p className="text-lg text-gray-300 mb-8">Leave the web to us</p>
          <form className="grid gap-4">
            <Input
              placeholder="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            <Input
              placeholder="Phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />
            <Input
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            <Textarea
              placeholder="Details"
              name="details"
              value={form.details}
              onChange={handleChange}
            />
            <Select
              placeholder="Select Your Niche"
              name="niche"
              onValueChange={(val) =>
                setForm((prev) => ({ ...prev, niche: val }))
              }
            >
              <SelectItem value="virtual-assistant">
                Virtual Assistant
              </SelectItem>
              <SelectItem value="web-development">Web Development</SelectItem>
              <SelectItem value="digital-marketing">
                Digital Marketing
              </SelectItem>
              <SelectItem value="business-automation">
                Business Automation
              </SelectItem>
              <SelectItem value="graphics-design">Graphics Design</SelectItem>
            </Select>
            <Button type="submit" className="mt-4">
              Book A Free Consultation
            </Button>
          </form>
        </div>

        {/* Right: Why We're a Good Fit */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white">
            What makes us a good fit?
          </h3>

          <div className="bg-gray-800 shadow-md rounded-xl p-5 space-y-2">
            <p className="text-gray-300">
              You want to dominate your niche and can handle new clients.
            </p>
            <p className="text-gray-300">
              You have systems to sign up and manage clients efficiently.
            </p>
            <p className="text-gray-300">
              You communicate regularly – we value transparency.
            </p>
            <p className="text-gray-300">
              You're looking for a turnkey partner covering all: content, links,
              paid ads.
            </p>
            <p className="text-gray-300">
              You're ready to invest $4,000+ monthly for aggressive ROI.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-white">
            In return for choosing us, we…
          </h3>

          <div className="bg-gray-800 shadow-md rounded-xl p-5 space-y-2">
            <p className="text-gray-300">
              Don't work with your direct competitors – loyalty matters.
            </p>
            <p className="text-gray-300">
              Focus on measurable ROI – we let numbers speak.
            </p>
            <p className="text-gray-300">
              Provide SEO + Google Ads under one roof.
            </p>
            <p className="text-gray-300">
              Always answer calls – we're available for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
