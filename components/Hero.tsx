export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      >
        <source
          src="/video/hero.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 flex h-full items-center justify-center">

        <div className="max-w-3xl px-6 text-center text-white">

          <h1 className="mb-8 text-5xl md:text-7xl font-medium">
            Víkend plný emocí
          </h1>

          <p className="mx-auto max-w-2xl text-lg md:text-xl leading-relaxed">
            Vnímáme, že prostředí mění energii lidí.
          </p>

          <p className="mx-auto mt-3 max-w-2xl text-lg md:text-xl leading-relaxed">
            A že některé momenty přijdou přesně ve chvíli,
            kdy je člověk opravdu potřebuje.
          </p>

          <a
            href="#waitlist"
            className="
              mt-10
              inline-flex
              rounded-full
              border
              border-white/40
              px-8
              py-4
              backdrop-blur-sm
              transition
              hover:bg-white
              hover:text-black
            "
          >
            Objevit víkend
          </a>

        </div>

      </div>

    </section>
  );
}
