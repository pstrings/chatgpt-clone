import SessionProvider from "@/components/SessionProvider";
import { getServerSession } from "next-auth";
import SideBar from "@/components/sidebar";
import "./globals.css";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Login from "@/components/login";

export const metadata = {
  title: "ChatGPT Clone",
  description: "This is a chatgpt clone.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
                <SideBar />
              </div>

              {/* ClientProvider for react hot toast notification */}

              <div className="bg-[#343541] flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
