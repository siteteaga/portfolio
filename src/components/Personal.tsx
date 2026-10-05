import nathOrganic from "../assets/images/nath-organic.webp";
import InstagramIcon from "../assets/svg/instagram";
import { SectionTitle, SocialIcon } from "./ui";

export default function Personal() {
  return (
    <section className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
      {/* Lado da imagem */}
      <div className="lg:col-span-5">
        <img
          src={nathOrganic}
          alt="Nathalia Leme - Arquiteta especializada em Psicoarquitetura"
          width={986}
          height={894}
          loading="lazy"
          className="mx-auto h-auto w-full max-w-md lg:max-w-none"
        />
      </div>

      {/* Lado do texto */}
      <div className="lg:col-span-7">
        <SectionTitle eyebrow="Sobre a arquiteta" title="Nathalia Leme" />

        {/* Texto principal */}
        <div className="mt-8 max-w-[60ch] space-y-5 text-base leading-relaxed text-primary-dark md:text-lg">
          <p>
            Sou arquiteta especializada em{" "}
            <strong className="font-semibold">Psicoarquitetura</strong> e meu
            propósito é transformar ambientes em espaços de pertencimento e
            acolhimento. Acredito que cada projeto deve refletir a essência de
            quem habita, indo muito além das tendências.
          </p>

          <p>
            Antes de definir cores ou formas, busco compreender sentimentos,
            histórias e a vida que cada pessoa deseja viver.
          </p>
        </div>

        {/* Botão Instagram */}
        <div className="mt-9">
          <SocialIcon
            href="https://www.instagram.com/arquitetanath/#"
            variant="button"
            ariaLabel="Siga @arquitetanath no Instagram"
          >
            <InstagramIcon className="h-6 w-6" />
            <span className="text-sm font-semibold tracking-wide">
              Siga no Instagram
            </span>
            <span className="text-sm opacity-75">@arquitetanath</span>
          </SocialIcon>
        </div>
      </div>
    </section>
  );
}
