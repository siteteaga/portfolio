interface SkeletonProps {
  className?: string;
  variant?: "rectangular" | "circular" | "text";
}

export function Skeleton({ className = "", variant = "rectangular" }: SkeletonProps) {
  const baseClasses = "animate-skeleton-pulse bg-gradient-to-r from-[var(--color-overlay-light)] via-[var(--color-border-light)] to-[var(--color-overlay-light)] bg-[length:200%_100%]";

  const variantClasses = {
    rectangular: "rounded-2xl",
    circular: "rounded-full",
    text: "rounded-md h-4",
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      aria-hidden="true"
    />
  );
}

interface ImageSkeletonProps {
  className?: string;
  aspectRatio?: string;
}

export function ImageSkeleton({ className = "", aspectRatio = "aspect-[4/3]" }: ImageSkeletonProps) {
  return (
    <div className={`${aspectRatio} ${className} overflow-hidden rounded-2xl`}>
      <Skeleton className="w-full h-full" />
    </div>
  );
}

interface CardSkeletonProps {
  className?: string;
}

export function CardSkeleton({ className = "" }: CardSkeletonProps) {
  return (
    <div className={`rounded-2xl overflow-hidden shadow-lg ${className}`}>
      <ImageSkeleton aspectRatio="aspect-[4/3] md:aspect-[6/3]" />
    </div>
  );
}

export default Skeleton;
