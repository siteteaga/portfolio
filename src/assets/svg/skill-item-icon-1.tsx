interface SkillItemIcon1Props {
    className?: string;
    fill?: string;
  }
  
  export default function SkillItemIcon1({ className = "", fill = "currentColor" }: SkillItemIcon1Props) {
    return (
      <svg className={className} viewBox="0 0 49 49" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <path d="M9.5 9.5L2 2V47H47L39.5 39.5M9.5 9.5L17 17M9.5 9.5L7 12M39.5 39.5L32 32M39.5 39.5L37 42M17 17L24.5 24.5M17 17L14.5 19.5M24.5 24.5L32 32M24.5 24.5L22 27M32 32L29.5 34.5M9.5 24.5V39.5H24.5L9.5 24.5Z" stroke="var(--color-primary-dark)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      
    );
  }
  