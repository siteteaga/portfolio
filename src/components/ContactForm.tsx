import { useEffect, useRef, useState } from "react";
import { SectionTitle, Button } from "./ui";
import { Check, Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const EMPTY_FORM: FormData = { name: "", email: "", phone: "", message: "" };

const WHATSAPP_URL = "https://wa.me/5511994696897";
const CONTACT_EMAIL = "nathalialeme@teagaarquitetura.com.br";

function getFieldError(name: keyof FormErrors, value: string): string | undefined {
  const trimmed = value.trim();

  if (name === "name" && !trimmed) {
    return "Nome é obrigatório";
  }

  if (name === "email") {
    if (!trimmed) return "Email é obrigatório";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return "Email inválido";
  }

  if (name === "message") {
    if (!trimmed) return "Mensagem é obrigatória";
    if (trimmed.length < 10) return "Mensagem deve ter pelo menos 10 caracteres";
  }

  return undefined;
}

const labelClasses = "mb-2 block text-sm font-semibold text-primary-dark";

function inputClasses(hasError: boolean) {
  return `w-full rounded-sm border bg-surface px-4 py-3 text-base text-primary-dark placeholder:text-ink-soft/60 transition-colors duration-200 focus:outline-none focus:ring-1 disabled:opacity-60 ${
    hasError
      ? "border-danger focus:border-danger focus:ring-danger"
      : "border-line-strong focus:border-primary-dark focus:ring-primary-dark"
  }`;
}

function ContactForm() {
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const successRef = useRef<HTMLDivElement>(null);

  const isSubmitting = status === "submitting";

  // Leva o foco para a confirmação, para leitores de tela e teclado
  useEffect(() => {
    if (status === "success") {
      successRef.current?.focus();
    }
  }, [status]);

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {
      name: getFieldError("name", formData.name),
      email: getFieldError("email", formData.email),
      message: getFieldError("message", formData.message),
    };

    setErrors(newErrors);
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Limpa o erro do campo quando o usuário começa a digitar
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // Valida ao sair do campo, sem acusar erro em campo que nem foi preenchido
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (!value.trim()) return;

    setErrors((prev) => ({
      ...prev,
      [name]: getFieldError(name as keyof FormErrors, value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validateForm();
    const firstInvalid = (["name", "email", "message"] as const).find(
      (field) => newErrors[field]
    );

    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    setStatus("submitting");

    try {
      // Preparar dados para Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "b0c4d88a-629c-433d-bc57-d825b868d7fb", // Substituir pelo Access Key do Web3Forms
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Não informado",
          message: formData.message,
          subject: `Novo contato do site - ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormData(EMPTY_FORM);
        setStatus("success");
      } else {
        throw new Error("Falha ao enviar mensagem");
      }
    } catch (error) {
      // Mantém o que foi digitado para a pessoa tentar de novo
      console.error("Erro ao enviar formulário:", error);
      setStatus("error");
    }
  };

  return (
    <section className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5">
        <SectionTitle
          title="Entre em contato"
          subtitle="Vamos conversar sobre o seu projeto dos sonhos"
        />

        {/* Canais diretos, para quem prefere não usar o formulário */}
        <dl className="mt-10 border-t border-line">
          <div className="border-b border-line py-5">
            <dt className="eyebrow text-ink-soft">WhatsApp</dt>
            <dd className="mt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-lg font-medium text-primary-dark"
              >
                (11) 99469-6897
              </a>
            </dd>
          </div>
          <div className="border-b border-line py-5">
            <dt className="eyebrow text-ink-soft">Email</dt>
            <dd className="mt-2">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="link-underline break-all text-lg font-medium text-primary-dark"
              >
                {CONTACT_EMAIL}
              </a>
            </dd>
          </div>
        </dl>
      </div>

      <div className="lg:col-span-7">
        {status === "success" ? (
          <div
            ref={successRef}
            tabIndex={-1}
            role="status"
            className="border-t-2 border-accent-dark pt-8 focus:outline-none"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-dark text-white">
              <Check size={22} aria-hidden="true" />
            </span>
            <h3 className="mt-6 text-2xl font-medium text-primary-dark">
              Mensagem enviada
            </h3>
            <p className="mt-3 max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
              A Nathalia receberá sua mensagem em breve e entrará em contato.
            </p>
            <Button
              variant="outline"
              className="mt-8"
              onClick={() => setStatus("idle")}
            >
              Enviar outra mensagem
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {/* Nome */}
            <div>
              <label htmlFor="name" className={labelClasses}>
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                autoComplete="name"
                aria-required="true"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={inputClasses(Boolean(errors.name))}
                placeholder="Seu nome completo"
              />
              {errors.name && (
                <p id="name-error" className="mt-2 text-sm font-medium text-danger">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {/* Email */}
              <div>
                <label htmlFor="email" className={labelClasses}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  autoComplete="email"
                  aria-required="true"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={inputClasses(Boolean(errors.email))}
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <p id="email-error" className="mt-2 text-sm font-medium text-danger">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Telefone */}
              <div>
                <label htmlFor="phone" className={labelClasses}>
                  Telefone <span className="font-normal text-ink-soft">(opcional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  autoComplete="tel"
                  className={inputClasses(false)}
                  placeholder="(11) 99999-9999"
                />
              </div>
            </div>

            {/* Mensagem */}
            <div>
              <label htmlFor="message" className={labelClasses}>
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                rows={6}
                aria-required="true"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`${inputClasses(Boolean(errors.message))} resize-y`}
                placeholder="Conte-nos sobre o seu projeto..."
              />
              {errors.message && (
                <p id="message-error" className="mt-2 text-sm font-medium text-danger">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Erro de envio — no lugar do alert() */}
            {status === "error" && (
              <div
                role="alert"
                className="border-l-2 border-danger bg-danger/5 px-4 py-3 text-base text-primary-dark"
              >
                <p className="font-semibold">Não foi possível enviar sua mensagem.</p>
                <p className="mt-1">
                  Tente novamente ou fale direto pelo{" "}
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline underline-offset-4"
                  >
                    WhatsApp
                  </a>
                  .
                </p>
              </div>
            )}

            {/* Botão de Enviar */}
            <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
              {isSubmitting ? (
                <>
                  <span
                    className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                    aria-hidden="true"
                  />
                  Enviando...
                </>
              ) : (
                <>
                  Enviar mensagem
                  <Send size={16} aria-hidden="true" />
                </>
              )}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}

export default ContactForm;
