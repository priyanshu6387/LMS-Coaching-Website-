// app/dashboard/layout.tsx

import Header from "../components/Header";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="p-6">{children}</main>
    </div>
  );
}
