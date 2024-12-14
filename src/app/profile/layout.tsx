// app/dashboard/layout.tsx
import Breadcrumbs from "@/components/organisms/Breadcrumbs";
import Navbar from "@/components/organisms/Navbar";
import Sidebar from "@/components/organisms/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbs = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Your Profile", href: "/profile" },
  ];
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow ml-64">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
}
