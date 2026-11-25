"use client";
import { useState } from "react";
import { profile } from "@/data";

export default function ContactLine() {
  const [message, setMessage] = useState("");
  const mailHref = message.trim()
    ? `mailto:${profile.email}?subject=${encodeURIComponent("Portfolio enquiry")}&body=${encodeURIComponent(message)}`
    : `mailto:${profile.email}?subject=${encodeURIComponent("Portfolio enquiry")}`;

  return (
    <form className="message-line glass" onSubmit={event => { event.preventDefault(); window.location.href = mailHref; }}>
      <label className="sr-only" htmlFor="message">Your message</label>
      <input
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Have something in mind? Leave me a message…"
      />
      <button type="submit" className="message-send" aria-label="Open message in email app">
        ↗
      </button>
    </form>
  );
}
