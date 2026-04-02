import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper/types";
import { Navigation, Pagination, Thumbs, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./project-gallery.css";
import { MapPin, Maximize2, Tag } from "lucide-react";
import { BackButton, Skeleton } from "./ui";
import { getProjectById } from "../data/projects";

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [projectId]);

  const project = getProjectById(Number(projectId));

  if (!isVisible) {
    return (
      <div className="min-h-screen bg-[var(--color-primary-bg)]">
        <div className="px-4 md:px-8 lg:px-20 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <Skeleton className="w-full h-[400px]" />
          <div className="flex flex-col gap-4">
            <Skeleton className="h-10 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-[var(--color-primary-bg)] flex flex-col items-center justify-center gap-6 px-4">
        <p className="text-6xl font-bold text-[var(--color-primary-medium)] opacity-30">404</p>
        <h1 className="text-2xl font-semibold text-[var(--color-primary-dark)]">Projeto não encontrado</h1>
        <p className="text-[var(--color-primary-medium)]">O projeto que você está procurando não existe.</p>
        <button
          onClick={() => navigate("/projetos")}
          className="px-6 py-3 bg-[var(--color-primary-medium)] text-white rounded-2xl font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
        >
          Ver todos os projetos
        </button>
      </div>
    );
  }

  const badges = [
    { label: "Localização", value: project.location, icon: <MapPin size={12} /> },
    ...(project.area ? [{ label: "Área", value: project.area, icon: <Maximize2 size={12} /> }] : []),
    { label: "Categoria", value: project.category, icon: <Tag size={12} /> },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-primary-bg)]">
      {/* HERO */}
      <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <img
          src={project.images[0]}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay elegante */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

        {/* Conteúdo */}
        <div className="relative z-10 h-full px-4 md:px-8 lg:px-20 flex flex-col justify-between py-6">
          <div className="flex justify-between items-center">
            <BackButton label="Voltar aos Projetos" />
            <img
              src="/images/logo-th.webp"
              alt="Theaga Arquitetura"
              className="h-10 md:h-14 object-contain brightness-0 invert"
            />
          </div>

          <div className="pb-10">
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-wide">
              {project.title}
            </h1>

            <div className="flex gap-3 mt-4">
              <span className="text-xs font-semibold uppercase tracking-widest bg-white/20 text-white px-3 py-1 rounded-full backdrop-blur-sm">
                {project.type}
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest bg-white/10 text-white/80 px-3 py-1 rounded-full backdrop-blur-sm">
                {project.category}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* C. Grid */}
      <div className="px-4 md:px-8 lg:px-20 py-10 md:py-16 grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_1fr] gap-8 lg:gap-x-16 lg:gap-y-8 items-start">

        {/* Título + Descrição — mobile: acima da galeria | desktop: col direita linha 1 */}
        <div className="order-1 lg:order-2 flex flex-col gap-3">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary-dark)] tracking-wide">
            {project.title}
          </h2>
          <hr className="border-[var(--color-border-medium)]" />
          <p className="italic text-[var(--color-primary-medium)] text-base md:text-lg leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Gallery — mobile: meio | desktop: col esquerda span 2 linhas */}
        <div className="order-2 lg:order-1 lg:row-span-2 sticky top-8 w-full project-gallery">
          {/* Main Swiper */}
          <Swiper
            modules={[Navigation, Pagination, Thumbs]}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            navigation={true}
            pagination={{ clickable: true }}
            loop={project.images.length > 1}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            {project.images.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt={`${project.title} ${i + 1}`}
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                  loading={i === 0 ? "eager" : "lazy"}
                  fetchPriority={i === 0 ? "high" : "auto"}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbs Swiper */}
          <div style={{ paddingTop: '1rem' }}>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={8}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Thumbs]}
              className="thumbs-swiper"
              breakpoints={{ 640: { slidesPerView: 5 }, 1024: { slidesPerView: 6 } }}
            >
              {project.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={`${project.title} ${i + 1}`}
                    className="w-full h-16 md:h-20 object-cover rounded-xl cursor-pointer"
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Detalhes + Badges — mobile: abaixo da galeria | desktop: col direita linha 2 */}
        <div className="order-3 lg:order-3 flex flex-col gap-6">
          {project.details && (
            <p className="text-[var(--color-primary-dark)]/80 text-sm md:text-base leading-relaxed">
              {project.details}
            </p>
          )}

          {/* Badges de metadados */}
          <div className="grid grid-cols-2 gap-3">
            {badges.map((badge, i) => (
              <div
                key={badge.label}
                className={`bg-white/70 backdrop-blur-sm rounded-2xl p-3 md:p-4 border border-[var(--color-primary-medium)]/20 shadow-sm flex flex-col gap-1 ${
                  badges.length % 2 !== 0 && i === badges.length - 1 ? "col-span-2" : ""
                }`}
              >
                <div className="flex items-center gap-1 text-[var(--color-primary-medium)]">
                  {badge.icon}
                  <span className="text-xs font-semibold uppercase tracking-wider">{badge.label}</span>
                </div>
                <span className="text-sm font-medium text-[var(--color-primary-dark)]">{badge.value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
