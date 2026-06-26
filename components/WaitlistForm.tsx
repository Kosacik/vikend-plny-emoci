"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (response.ok) {
      setSent(true);

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } else {
      alert("Nepodařilo se odeslat formulář.");
    }
  }

  if (sent) {
    return (
      <section className="section py-32">
        <div className="mx-auto max-w-2xl text-center">

          <h2 className="text-5xl mb-8">
            Děkujeme.
          </h2>

          <p className="text-xl opacity-80 leading-relaxed">
            Ozveme se,
            <br />
            až přijde správný čas.
          </p>

        </div>
      </section>
    );
  }

  return (
    <section
      id="waitlist"
      className="section py-32"
    >
      <div className="mx-auto max-w-2xl">

        <h2 className="mb-6 text-center text-5xl">
          Přitahuje Tě tenhle prostor?
        </h2>

        <p className="mb-12 text-center text-xl">
          Napiš pár slov →
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            type="text"
            required
            placeholder="Jméno"

            value={form.name}

            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }

            className="w-full rounded-2xl border p-4"
          />

          <input
            type="email"
            required
            placeholder="E-mail"

            value={form.email}

            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }

            className="w-full rounded-2xl border p-4"
          />

          <textarea
            rows={5}
            required
            placeholder="Co Tě na víkend přitahuje"

            value={form.message}

            onChange={(e) =>
              setForm({
                ...form,
                message: e.target.value,
              })
            }

            className="w-full rounded-2xl border p-4"
          />

          <div className="flex justify-center">

            <button
              disabled={loading}
              type="submit"
              className="cta-button"
            >
              {loading ? "Odesílám..." : "Poslat →"}
            </button>

          </div>

        </form>

      </div>
    </section>
  );
}