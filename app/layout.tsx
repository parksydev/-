import "./globals.css";

export const metadata = {
  title: '이디저디',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-[#f7f7f7]">
        {children}
      </body>
    </html>
  );
}