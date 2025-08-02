interface GlassCardProps {
  children: any;
  className?: string;
  variant?: "default" | "light" | "dark" | "feature" | "hero";
  hover?: boolean;
  float?: boolean;
}

export const GlassCard = ({
  children,
  className = "",
  variant = "default",
  hover = false,
  float = false,
}: GlassCardProps) => {
  const baseClasses = "rounded-2xl p-6";

  const variantClasses = {
    default: "glass",
    light: "glass-light",
    dark: "glass-dark",
    feature: "glass-feature",
    hero: "glass-hero",
  };

  const modifierClasses = [hover && "glass-hover", float && "glass-float"]
    .filter(Boolean)
    .join(" ");

  const finalClasses = [
    baseClasses,
    variantClasses[variant],
    modifierClasses,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={finalClasses}>{children}</div>;
};

interface GlassButtonProps {
  children: any;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  external?: boolean;
}

export const GlassButton = ({
  children,
  href,
  onClick,
  className = "",
  variant = "default",
  size = "md",
  external = false,
}: GlassButtonProps) => {
  const baseClasses =
    "glass-button font-semibold transition-all duration-300 inline-flex items-center justify-center";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-xl",
  };

  const variantClasses = {
    default: "text-white",
    primary:
      "text-white bg-gradient-to-r from-purple-500/30 to-purple-600/30 border border-purple-400/30 backdrop-blur-md",
    secondary: "text-gray-200 border-white/40 backdrop-blur-md",
  };

  const finalClasses = [
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a
        href={href}
        className={finalClasses}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={finalClasses}>
      {children}
    </button>
  );
};

interface GlassModalProps {
  children: any;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const GlassModal = ({
  children,
  isOpen,
  onClose,
  className = "",
}: GlassModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className={`glass-modal rounded-3xl p-8 max-w-lg w-full relative z-10 ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

interface GlassNavProps {
  children: any;
  className?: string;
  sticky?: boolean;
}

export const GlassNav = ({
  children,
  className = "",
  sticky = true,
}: GlassNavProps) => {
  const baseClasses = "glass-nav z-50";
  const stickyClasses = sticky ? "sticky top-0" : "";

  const finalClasses = [baseClasses, stickyClasses, className]
    .filter(Boolean)
    .join(" ");

  return <nav className={finalClasses}>{children}</nav>;
};

interface GlassIconProps {
  icon: any;
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: "blue" | "purple" | "green" | "red" | "yellow";
}

export const GlassIcon = ({
  icon: Icon,
  className = "",
  size = "md",
  color = "purple",
}: GlassIconProps) => {
  const sizeClasses = {
    sm: "w-8 h-8 p-2",
    md: "w-12 h-12 p-3",
    lg: "w-16 h-16 p-4",
  };

  const colorClasses = {
    blue: "bg-blue-500/30 text-blue-200",
    purple: "bg-purple-500/30 text-purple-200",
    green: "bg-green-500/30 text-green-200",
    red: "bg-red-500/30 text-red-200",
    yellow: "bg-yellow-500/30 text-yellow-200",
  };

  const finalClasses = [
    "rounded-xl flex items-center justify-center",
    sizeClasses[size],
    colorClasses[color],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={finalClasses}>
      <Icon className="w-6 h-6" />
    </div>
  );
};

interface GlassTextProps {
  children: any;
  className?: string;
  variant?: "default" | "heading" | "subtitle" | "body";
}

export const GlassText = ({
  children,
  className = "",
  variant = "default",
}: GlassTextProps) => {
  const variantClasses = {
    default: "glass-text",
    heading: "glass-text text-4xl sm:text-5xl lg:text-6xl font-bold",
    subtitle: "glass-text text-xl sm:text-2xl lg:text-3xl",
    body: "glass-text text-lg sm:text-xl",
  };

  const finalClasses = [variantClasses[variant], className]
    .filter(Boolean)
    .join(" ");

  const Component =
    variant === "heading" ? "h1" : variant === "subtitle" ? "h2" : "p";

  return <Component className={finalClasses}>{children}</Component>;
};

interface GlassGridProps {
  children: any;
  className?: string;
  cols?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
}

export const GlassGrid = ({
  children,
  className = "",
  cols = 3,
  gap = "md",
}: GlassGridProps) => {
  const colClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  const gapClasses = {
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
  };

  const finalClasses = ["grid", colClasses[cols], gapClasses[gap], className]
    .filter(Boolean)
    .join(" ");

  return <div className={finalClasses}>{children}</div>;
};
