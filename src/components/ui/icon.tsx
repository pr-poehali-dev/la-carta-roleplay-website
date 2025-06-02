import {
  LucideIcon,
  Home,
  Menu,
  X,
  Play,
  Users,
  Newspaper,
  CreditCard,
  ShoppingBag,
  User,
  MessageCircle,
  Globe,
  Youtube,
  CircleAlert,
  Car,
  Shield,
  Building,
  Heart,
  Trophy,
  Clock,
  Briefcase,
  Calendar,
  Crown,
  AlertTriangle,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Home,
  Menu,
  X,
  Play,
  Users,
  Newspaper,
  CreditCard,
  ShoppingBag,
  User,
  MessageCircle,
  Globe,
  Youtube,
  CircleAlert,
  Car,
  Shield,
  Building,
  Heart,
  Trophy,
  Clock,
  Briefcase,
  Calendar,
  Crown,
  AlertTriangle,
};

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  fallback?: string;
}

const Icon = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}: IconProps) => {
  const IconComponent = iconMap[name] || iconMap[fallback];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found, using fallback "${fallback}"`);
    return <iconMap.CircleAlert size={size} className={className} />;
  }

  return <IconComponent size={size} className={className} />;
};

export default Icon;
