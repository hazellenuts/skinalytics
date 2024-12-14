// components/organisms/Breadcrumbs.tsx
import Breadcrumb from "@/components/atoms/Breadcrumb";

interface BreadcrumbsProps {
  breadcrumbs: { label: string; href: string }[];
}

export default function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
  return (
    <div className="bg-gray-100 text-gray-700 p-4 sticky z-10 top-0 flex space-between">
      <div className="container mx-auto">
        {breadcrumbs.map((breadcrumb, index) => (
          <span key={index}>
            <Breadcrumb label={breadcrumb.label} href={breadcrumb.href} />
            {index < breadcrumbs.length - 1 && <span className="mx-2">/</span>}
          </span>
        ))}
      </div>
      <div className="container bg-pink-100 w-1/4 text-right">
        your Name
      </div>
    </div>
  );
}
