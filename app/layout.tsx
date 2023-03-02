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
        <div>
          {/* Sidebar */}

          {/* ClientProvider for react hot toast notification */}

          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
