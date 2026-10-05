interface SkeletonProps {
  className?: string;
  variant?: "rectangular" | "circular" | "text";
}

export function Skeleton({ className = "", variant = "rectangular" }: SkeletonProps) {
  const baseClasses = "animate-skeleton-pulse bg-sand";

  const variantClasses = {
    rectangular: "rounded-sm",
    circular: "rounded-full",
    text: "rounded-sm h-4",
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

export function ImageSkeleton({ className = "", aspectRatio = "aspect-[3/2]" }: ImageSkeletonProps) {
  return (
    <div className={`${aspectRatio} ${className} overflow-hidden rounded-sm`}>
      <Skeleton className="w-full h-full" />
    </div>
  );
}

interface CardSkeletonProps {
  className?: string;
}

export function CardSkeleton({ className = "" }: CardSkeletonProps) {
  return (
    <div className={className}>
      <ImageSkeleton />
      <Skeleton variant="text" className="mt-4 w-2/3" />
    </div>
  );
}

export default Skeleton;
