import { useDate } from "../hooks/useDate";
import InstagramIcon from "../assets/svg/instagram";
import PinterestIcon from "../assets/svg/pinterest";
import LinkedInIcon from "../assets/svg/linkedin";
import { Phone, Mail } from "lucide-react";
import { Logo, SocialIcon } from "./ui";

export default function Footer() {
  // Hook para obter data atual automaticamente
  const { getCurrentYear } = useDate();
  const currentYear = getCurrentYear();

  return (
    <footer className="on-dark bg-primary-medium text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-12 md:gap-8 md:py-16 lg:gap-16">
        <div className="md:col-span-5">
          <Logo className="h-12 md:h-14" />
        </div>

        {/* Informações de Contato */}
        <div className="md:col-span-4">
          <h2 className="eyebrow">Contato</h2>
          <ul className="mt-5 space-y-3 text-base">
            <li className="flex items-start gap-3">
              <Mail className="mt-1 h-4 w-4 flex-shrink-0" aria-hidden="true" />
              <a
                href="mailto:nathalialeme@teagaarquitetura.com.br"
                className="link-underline break-all"
              >
                nathalialeme@teagaarquitetura.com.br
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-1 h-4 w-4 flex-shrink-0" aria-hidden="true" />
              <a
                href="https://wa.me/5511994696897"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline"
              >
                (11) 99469-6897
              </a>
            </li>
          </ul>
        </div>

        {/* Redes Sociais */}
        <div className="md:col-span-3">
          <h2 className="eyebrow">Redes sociais</h2>
          <div className="mt-5 flex gap-3">
            <SocialIcon href="https://www.instagram.com/arquitetanath/#" ariaLabel="Instagram">
              <InstagramIcon className="h-6 w-6" />
            </SocialIcon>
            <SocialIcon href="https://br.pinterest.com/arquitetanath" ariaLabel="Pinterest">
              <PinterestIcon className="h-6 w-6" />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/arquitetanath/" ariaLabel="LinkedIn">
              <LinkedInIcon className="h-6 w-6" />
            </SocialIcon>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container-page">
        <p className="border-t border-white/30 py-6 text-sm">
          &copy; {currentYear} TEAGÁ Arquitetura e Interiores. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
