import "./globals.css";

export const metadata = {
  title: "ChatGPT Clone",
  description: "This is a chatgpt clone.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          {/* Sidebar */}

          {/* ClientProvider for react hot toast notification */}

          <div className="bg-[#343541] flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
