
export default function ResultLayout({
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
