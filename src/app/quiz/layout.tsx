import Breadcrumbs from "@/components/organisms/Breadcrumbs"; // Sesuaikan dengan path breadcrumbs

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto p-4">
      
      {children}
    </div>
  );
}
