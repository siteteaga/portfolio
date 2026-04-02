import { useDate } from "../hooks/useDate";
import InstagramIcon from "../assets/svg/instagram";
import PinterestIcon from "../assets/svg/pinterest";
import LinkedInIcon from "../assets/svg/linkedin";
import { Phone, Mail } from "lucide-react";
import { SocialIcon } from "./ui";

export default function Footer() {
  // Hook para obter data atual automaticamente
  const { getCurrentYear } = useDate();
  const currentYear = getCurrentYear();

  return (
    <footer
      style={{ backgroundColor: "var(--color-primary-medium)" }}
      className="py-8 px-4"
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 pb-8 md:pb-12">
        {/* Informações de Contato */}
        <div className="flex flex-col gap-2 text-white">
          <h3 className="text-xl text-center font-bold text-[var(--color-primary-lightest)]">
            Contato
          </h3>
          <div className="flex flex-col">
            <p className="flex items-center justify-center gap-2 text-sm md:text-base">
              <Mail className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
              <a
                href="mailto:nath.arquiteta@gmail.com"
                className="hover:text-[var(--color-primary-lightest)] transition-colors break-all"
              >
                nath.arquiteta@gmail.com
              </a>
            </p>
            <p className="flex items-center justify-center gap-2 text-sm md:text-base">
              <Phone className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
              <a
                href="https://wa.me/5511994696897"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-primary-lightest)] transition-colors"
              >
                (11) 99469-6897
              </a>
            </p>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="flex flex-col gap-2 text-white">
          <h3 className="text-xl font-bold text-center text-[var(--color-primary-lightest)]">
            Redes Sociais
          </h3>
          <div className="flex justify-center gap-6 md:gap-8">
            <SocialIcon href="https://www.instagram.com/arquitetanath/#" ariaLabel="Instagram">
              <InstagramIcon className="text-[var(--color-primary-medium)]" />
            </SocialIcon>
            <SocialIcon href="https://br.pinterest.com/arquitetanath" ariaLabel="Pinterest">
              <PinterestIcon className="text-[var(--color-primary-medium)]" />
            </SocialIcon>
            <SocialIcon href="https://linkedin.com/in/nath-arquiteta" ariaLabel="LinkedIn">
              <LinkedInIcon className="text-[var(--color-primary-medium)]" />
            </SocialIcon>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white border-opacity-20 text-center text-white text-sm opacity-75 pt-6 md:pt-8">
        <p>
          &copy; {currentYear} Theaga Arquitetura. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
