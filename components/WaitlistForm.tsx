export default function WaitlistForm() {
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

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Jméno"
            className="
              w-full
              rounded-2xl
              border
              p-4
            "
          />

          <input
            type="email"
            placeholder="E-mail"
            className="
              w-full
              rounded-2xl
              border
              p-4
            "
          />

          <textarea
            rows={5}
            placeholder="Co Tě na víkend přitahuje"
            className="
              w-full
              rounded-2xl
              border
              p-4
            "
          />

         <div className="flex justify-center">
          <button
            type="submit"
            className="cta-button"
            >
            Chci na víkend
          </button>
         </div>


        </form>

      </div>

    </section>
  );
}