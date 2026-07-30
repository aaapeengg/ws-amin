import AdminTopbar from "./components/AdminTopbar";
import AdminSidebar from "./components/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex">

      <AdminSidebar />

      <div className="flex-1 flex flex-col">

        <AdminTopbar />

        <main className="flex-1 overflow-y-auto">

          <div className="p-8">
            {children}
          </div>

        </main>

      </div>

    </div>
  );
}