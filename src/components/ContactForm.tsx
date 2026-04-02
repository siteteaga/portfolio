import { useState } from "react";
import { SectionTitle, Button } from "./ui";
import {
  Mail,
  Phone,
  User,
  MessageSquare,
  Send,
  CheckCircle,
} from "lucide-react";

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

function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mensagem é obrigatória";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Mensagem deve ter pelo menos 10 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

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
        // Marcar como sucesso
        setSubmitSuccess(true);

        // Limpar o formulário após 3 segundos
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          setSubmitSuccess(false);
        }, 3000);
      } else {
        throw new Error("Falha ao enviar mensagem");
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert(
        "Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato diretamente."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex flex-col justify-center items-center py-12 md:py-20">
      <SectionTitle
        title="ENTRE EM CONTATO"
        subtitle="Vamos conversar sobre o seu projeto dos sonhos"
        className="mb-8 md:mb-16"
        showDivider={false}
      />

      <div className="max-w-3xl w-full pt-6 md:pt-10">
        {submitSuccess ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
            <h3 className="text-2xl font-bold text-[var(--color-primary-medium)] mb-2">
              Mensagem Enviada com Sucesso!
            </h3>
            <p className="text-[var(--color-primary-medium)] opacity-80">
              A Nathalia receberá sua mensagem em breve e entrará em contato.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Nome */}
            <div className="pb-4">
              <label
                htmlFor="name"
                className="flex items-center gap-2 text-[var(--color-primary-medium)] font-semibold mb-2"
              >
                <User className="w-5 h-5" />
                Nome *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border bg-white ${
                  errors.name
                    ? "border-red-500"
                    : "border-[var(--color-primary-medium)]/20"
                } focus:outline-none focus:border-[var(--color-primary-medium)] focus:ring-2 focus:ring-[var(--color-primary-medium)]/20 transition-all`}
                placeholder="Seu nome completo"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="pb-4">
              <label
                htmlFor="email"
                className="flex items-center gap-2 text-[var(--color-primary-medium)] font-semibold mb-2"
              >
                <Mail className="w-5 h-5" />
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border bg-white ${
                  errors.email
                    ? "border-red-500"
                    : "border-[var(--color-primary-medium)]/20"
                } focus:outline-none focus:border-[var(--color-primary-medium)] focus:ring-2 focus:ring-[var(--color-primary-medium)]/20 transition-all`}
                placeholder="seu@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Telefone */}
            <div className="pb-4">
              <label
                htmlFor="phone"
                className="flex items-center gap-2 text-[var(--color-primary-medium)] font-semibold mb-2"
              >
                <Phone className="w-5 h-5" />
                Telefone (opcional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border bg-white border-[var(--color-primary-medium)]/20 focus:outline-none focus:border-[var(--color-primary-medium)] focus:ring-2 focus:ring-[var(--color-primary-medium)]/20 transition-all"
                placeholder="(11) 99999-9999"
              />
            </div>

            {/* Mensagem */}
            <div className="pb-4">
              <label
                htmlFor="message"
                className="flex items-center gap-2 text-[var(--color-primary-medium)] font-semibold mb-2"
              >
                <MessageSquare className="w-5 h-5" />
                Mensagem *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`w-full px-4 py-3 rounded-lg border bg-white ${
                  errors.message
                    ? "border-red-500"
                    : "border-[var(--color-primary-medium)]/20"
                } focus:outline-none focus:border-[var(--color-primary-medium)] focus:ring-2 focus:ring-[var(--color-primary-medium)]/20 transition-all resize-none`}
                placeholder="Conte-nos sobre o seu projeto..."
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Botão de Enviar */}
            <div className="flex justify-center">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

export default ContactForm;
