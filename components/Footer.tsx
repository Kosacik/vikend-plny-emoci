import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-16">

      <div className="section">

        <div className="text-center">

          <p className="mb-2 text-xl">
            Víkend plný emocí
          </p>

          <p className="text-sm opacity-70">
            Česko • Chorvatsko
          </p>

          <div className="mt-10 flex justify-center">

            <Image
              src="/logo/kos.png"
              alt="KOS"
              width={40}
              height={40}
            />

          </div>

        </div>

      </div>

    </footer>
  );
}