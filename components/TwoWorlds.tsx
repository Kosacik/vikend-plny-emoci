export default function TwoWorlds() {
  return (
    <section className="section py-32">

      <div className="mb-16 text-center">
        <h2 className="text-5xl">
          Dva světy. Jedna energie.
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2">

        <div className="rounded-3xl bg-[#E8DFCF] p-10">
          <h3 className="mb-6 text-4xl">
            Potřebuješ vypnout
          </h3>

          <p className="text-lg leading-relaxed">
            Příroda. Klid. Přítomnost.
            <br />
            <br />
            Prostor, kde nemusíš nic dokazovat.
            Jen být.
          </p>
        </div>

        <div className="rounded-3xl bg-[#567A8A] p-10 text-white">
          <h3 className="mb-6 text-4xl">
            Potřebuješ ožít
          </h3>

          <p className="text-lg leading-relaxed">
            Voda. Pohyb. Dobrodružství.
            <br />
            <br />
            Nové zážitky, které vrací energii zpátky
            do života.
          </p>
        </div>

      </div>

      <div className="mx-auto mt-12 max-w-2xl text-center">
        <p className="text-xl">
          Nemusíš si vybírat.
          
          Obě energie patří k sobě.
        </p>
      </div>

    </section>
  );
}