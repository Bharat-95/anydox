"use client";

import React, { useState } from "react";

export default function BookIntroCall() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div>
          <h1 className="text-4xl font-bold mb-4">Book an Intro Call</h1>
          <p className="text-lg mb-6 text-slate-300">
            Learn how Anydox can streamline your document workflows using AI.
            Get a live demo and answers to all your questions.
          </p>
          <ul className="list-disc ml-5 text-slate-300 mb-6 space-y-2">
            <li>Understand our key features & benefits</li>
            <li>Custom solution walkthrough for your use case</li>
            <li>No sales pressure – just honest help</li>
          </ul>
          <p className="text-sm text-slate-500">
            Takes less than 2 minutes to book.
          </p>
        </div>

        {/* Right: Form */}
        <div className="bg-white text-slate-800 rounded-xl shadow-md p-8">
          {submitted ? (
            <div className="text-center text-green-600 font-medium text-lg">
              ✅ Thanks for booking! We'll be in touch soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Company (optional)</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition-all"
              >
                Book Intro Call
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
