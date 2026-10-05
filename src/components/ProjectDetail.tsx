import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper/types";
import { Navigation, Thumbs, FreeMode, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./project-gallery.css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ArrowLink, BackButton, Skeleton } from "./ui";
import Footer from "./Footer";
import NotFound from "./NotFound";
import { usePageTitle } from "../hooks/usePageTitle";
import { getAllProjects, getCategoryLabel, type ProjectDetails } from "../data/projects";

// Foto da galeria com placeholder enquanto carrega
function GalleryImage({ src, alt, eager }: { src: string; alt: string; eager: boolean }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative aspect-[16/10] bg-sand">
      {!isLoaded && <Skeleton className="absolute inset-0 rounded-none" />}
      <img
        src={src}
        alt={alt}
        ref={(img) => {
          // Imagens em cache podem já estar prontas antes do onLoad
          if (img?.complete && img.naturalWidth > 0) setIsLoaded(true);
        }}
        onLoad={() => setIsLoaded(true)}
        className={`h-full w-full object-cover transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
      />
    </div>
  );
}

function ProjectGallery({ project }: { project: ProjectDetails }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = project.images.length;

  return (
    <div className="project-gallery">
      {/* Main Swiper */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Thumbs, Keyboard]}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          navigation={total > 1}
          keyboard={{ enabled: true }}
          loop={total > 1}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="overflow-hidden rounded-sm"
        >
          {project.images.map((img, i) => (
            <SwiperSlide key={i}>
              <GalleryImage
                src={img}
                alt={`${project.title}, foto ${i + 1} de ${total}`}
                eager={i === 0}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Contador — substitui a fileira de bolinhas, que não escala para 20+ fotos */}
        {total > 1 && (
          <p
            className="absolute bottom-3 right-3 z-10 rounded-sm bg-primary-dark/85 px-2.5 py-1 text-xs font-medium tabular-nums tracking-wider text-white"
            aria-live="polite"
          >
            {activeIndex + 1} / {total}
          </p>
        )}
      </div>

      {/* Thumbs Swiper */}
      {total > 1 && (
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={8}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="thumbs-swiper mt-3"
          breakpoints={{ 640: { slidesPerView: 6 }, 1024: { slidesPerView: 7 } }}
        >
          {project.images.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt=""
                className="aspect-[3/2] w-full cursor-pointer rounded-sm bg-sand object-cover"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();

  const projects = getAllProjects();
  const index = projects.findIndex((p) => p.id === Number(projectId));
  const project = projects[index];

  usePageTitle(project?.title ?? "Projeto não encontrado");

  if (!project) {
    return (
      <>
        <NotFound
          title="Projeto não encontrado"
          message="O projeto que você está procurando não existe."
        />
        <Footer />
      </>
    );
  }

  const previousProject = projects[index - 1];
  const nextProject = projects[index + 1];

  const metadata = [
    { label: "Localização", value: project.location },
    ...(project.area ? [{ label: "Área", value: project.area }] : []),
    { label: "Tipo", value: project.type },
    { label: "Categoria", value: getCategoryLabel(project.category) },
  ];

  return (
    <>
      <main className="pt-[var(--header-height)]">
        <div className="container-page py-8 md:py-14">
          <BackButton label="Voltar aos projetos" fallbackTo="/projetos" />

          {/* Cabeçalho do projeto */}
          <header className="mt-6 border-b border-line pb-8 md:pb-10">
            <p className="eyebrow text-ink-soft">
              {project.type} · {getCategoryLabel(project.category)}
            </p>
            <h1 className="mt-4 text-[clamp(2rem,1.3rem+3vw,3.75rem)] font-light uppercase leading-[1.05] tracking-[0.04em] text-primary-dark">
              {project.title}
            </h1>
          </header>

          <div className="mt-8 grid items-start gap-10 md:mt-12 lg:grid-cols-12 lg:gap-16">
            {/* Galeria — a key reinicia o carrossel ao trocar de projeto */}
            <div className="min-w-0 lg:sticky lg:top-[calc(var(--header-height)+2rem)] lg:col-span-7">
              <ProjectGallery key={project.id} project={project} />
            </div>

            {/* Texto + ficha técnica */}
            <div className="lg:col-span-5">
              <p className="text-xl font-light leading-snug text-primary-dark md:text-2xl">
                {project.description}
              </p>

              {project.details && (
                <p className="mt-6 text-base leading-relaxed text-primary-dark">
                  {project.details}
                </p>
              )}

              <dl className="mt-10 border-t border-line">
                {metadata.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-baseline justify-between gap-6 border-b border-line py-4"
                  >
                    <dt className="eyebrow text-ink-soft">{item.label}</dt>
                    <dd className="text-right text-base font-medium text-primary-dark">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <ArrowLink to="/#contato" className="mt-10">
                Conversar sobre o meu projeto
              </ArrowLink>
            </div>
          </div>

          {/* Projeto anterior / próximo */}
          <nav
            aria-label="Outros projetos"
            className="mt-16 grid grid-cols-2 gap-6 border-t border-line pt-8 md:mt-24"
          >
            <div>
              {previousProject && (
                <Link to={`/projeto/${previousProject.id}`} className="group inline-block">
                  <span className="eyebrow flex items-center gap-2 text-ink-soft">
                    <ArrowLeft
                      size={14}
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:-translate-x-1"
                    />
                    Anterior
                  </span>
                  <span className="mt-2 block text-base font-medium text-primary-dark md:text-lg">
                    <span className="link-underline">{previousProject.title}</span>
                  </span>
                </Link>
              )}
            </div>
            <div className="text-right">
              {nextProject && (
                <Link to={`/projeto/${nextProject.id}`} className="group inline-block">
                  <span className="eyebrow flex items-center justify-end gap-2 text-ink-soft">
                    Próximo
                    <ArrowRight
                      size={14}
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                  <span className="mt-2 block text-base font-medium text-primary-dark md:text-lg">
                    <span className="link-underline">{nextProject.title}</span>
                  </span>
                </Link>
              )}
            </div>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}
