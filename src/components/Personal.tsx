import nath from "../assets/images/nath.webp";
import nathOrganic from "../assets/images/nath-organic.webp";
import InstagramIcon from "../assets/svg/instagram";
import { SectionTitle, SocialIcon } from "./ui";

export default function Personal() {
  return (
    <section className="relative py-12 md:py-16">

      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary-medium)]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-accent-dark)]/5 rounded-full blur-3xl -z-10"></div>

      <div className="flex flex-col justify-center items-center px-4">
        <SectionTitle
          title="SOBRE A ARQUITETA"
          showDivider={false}
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center pt-10">
        {/* Lado da imagem */}
        <div className="flex-1 w-full lg:max-w-xl">
          <div className="relative group">
            {/* Imagem */}
            <img
              src={nathOrganic}
              alt="Nathalia Leme - Arquiteta especializada em Psicoarquitetura"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Lado do texto */}
        <div className="flex flex-col flex-1 gap-5 md:gap-8">
          {/* Card principal */}
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-5 md:p-8 lg:p-10 shadow-xl">
            <div className="text-[var(--color-primary-dark)]">
              {/* Título */}
              <div className="mb-4 md:mb-6">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2 bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary-medium)] bg-clip-text text-transparent pt-2">
                  Nathalia Leme
                </h3>
              </div>

              {/* Texto principal */}
              <div className="space-y-4 md:space-y-6 text-base md:text-lg lg:text-xl leading-relaxed">
                <p className="text-[var(--color-primary-dark)]/90 pt-4 md:pt-6">
                  Sou arquiteta especializada em{" "}
                  <span className="font-semibold text-[var(--color-primary-medium)]">
                    Psicoarquitetura
                  </span>{" "}
                  e meu propósito é transformar ambientes em espaços de
                  pertencimento e acolhimento. Acredito que cada projeto deve
                  refletir a essência de quem habita, indo muito além das
                  tendências.
                </p>

                <p className="text-[var(--color-primary-dark)]/80">
                  Antes de definir cores ou formas, busco compreender
                  sentimentos, histórias e a vida que cada pessoa deseja viver.
                </p>
              </div>
            </div>
          </div>


          {/* Botão Instagram */}
          <div className="flex justify-center lg:justify-end">
            <SocialIcon
              href="https://www.instagram.com/arquitetanath/#"
              variant="button"
              ariaLabel="Siga no Instagram"
            >
              <div className="relative">
                <InstagramIcon
                  className="w-10 h-10 md:w-12 md:h-12 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                  fill="white"
                />
                <img
                  src={nath}
                  alt="Nathalia"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover absolute top-0.5 md:top-1 left-6 md:left-8 transition-all duration-300 group-hover:scale-110 group-hover:ring-2 group-hover:ring-white group-hover:ring-offset-1"
                />
              </div>
              <span className="text-white font-bold text-sm md:text-base transition-all duration-300">
                Siga no Instagram!
              </span>
            </SocialIcon>
          </div>
        </div>
      </div>
    </section>
  );
}
