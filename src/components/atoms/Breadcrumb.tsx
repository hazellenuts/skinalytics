// components/atoms/Breadcrumb.tsx
import Link from "next/link";

interface BreadcrumbProps {
  label: string;
  href: string;
}

export default function Breadcrumb({ label, href }: BreadcrumbProps) {
  return (
    <Link href={href} className="text-blue-600 hover:text-blue-800">
      {label}
    </Link>
  );
}
