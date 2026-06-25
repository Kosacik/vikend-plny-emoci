import Image from "next/image";

export default function StoryGallery() {
  return (
    <section className="section py-24">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl md:text-6xl text-center mb-10">
          Jak takový víkend plyne
        </h2>

        <p className="text-center text-lg max-w-2xl mx-auto mb-24 opacity-80">
          Každý přijíždí s něčím jiným.
          <br />
          A každý si odváží něco jiného.
        </p>

        {/* BLOK 1 */}

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h3 className="text-3xl mb-6">
              Zpomalit.
            </h3>

            <p className="text-lg leading-relaxed opacity-80">
              Ráno bez spěchu.
              Čas na kávu.
              Na ticho.
              Na rozhovory,
              které obvykle odkládáme.
            </p>
          </div>

          <Image
            src="/images/sea-cafe.jpg"
            alt="Společná snídaně u moře"
            width={900}
            height={700}
            className="rounded-3xl object-cover"
          />
        </div>

        {/* BLOK 2 */}

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <Image
            src="/images/meditation.jpg"
            alt="Meditace"
            width={900}
            height={700}
            className="rounded-3xl object-cover h-full"
          />

          <div className="flex flex-col justify-center">
            <h3 className="text-3xl mb-6">
              Nadechnout se.
            </h3>

            <p className="text-lg leading-relaxed opacity-80">
              Někdy stačí změnit prostředí.
              A najednou člověk slyší věci,
              které předtím přehlížel.
            </p>
          </div>
        </div>

        {/* HERO FOTO */}

        <div className="mb-24">
          <Image
            src="/images/barefoot.jpg"
            alt="Svoboda na lodi"
            width={1200}
            height={900}
            className="rounded-3xl object-cover w-full"
          />
        </div>



        {/* BLOK 3 */}

<div className="grid md:grid-cols-3 gap-8 items-center mb-24">

  {/* Levý obrázek */}

  <Image
    src="/images/ferrata.jpg"
    alt="Ferrata"
    width={500}
    height={700}
    className="rounded-3xl object-cover w-full"
  />

  {/* Text */}

  <div className="text-center px-4">
    <h3 className="text-3xl mb-6">
      Objevit.
    </h3>

    <p className="text-lg leading-relaxed opacity-80">
      Ferraty.
      <br />
      Plachtění.
      <br />
      Yoga.
      <br />
      <br />
      Nebo cokoliv,
      co jsi nikdy nezkusil
      nebo nezkusila.
    </p>
  </div>

  {/* Pravý sloupec */}

  <div className="flex flex-col gap-4">

    <Image
      src="/images/acroyoga.jpg"
      alt="Acroyoga"
      width={500}
      height={350}
      className="rounded-3xl object-cover w-full"
    />

    <Image
      src="/images/yogaplay.jpg"
      alt="Yogaplay"
      width={500}
      height={350}
      className="rounded-3xl object-cover w-full"
    />

  </div>

</div>




	{/* BLOK 4 */}

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">

          <Image
            src="/images/sailing.jpg"
            alt="Společná snídaně u moře"
            width={900}
            height={700}
            className="rounded-3xl object-cover"
          />


          <div>
            <h3 className="text-3xl mb-6">
              Zpomalit.
            </h3>

            <p className="text-lg leading-relaxed opacity-80">
              Ráno bez spěchu.
              Čas na kávu.
              Na ticho.
              Na rozhovory,
              které obvykle odkládáme.
            </p>
          </div>
       
        </div>


        {/* ZÁVĚR */}

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-3xl md:text-4xl leading-relaxed">
            Každý víkend je{" "}
            <span className="manifest-accent">
              jiný.
            </span>
          </p>

          <p className="text-3xl md:text-4xl leading-relaxed">
            Stejně jako{" "}
            <span className="manifest-accent">
              lidé
            </span>,{" "}
            kteří přijedou.
          </p>
        </div>






      </div>
    </section>
  );
}