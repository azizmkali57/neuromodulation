import "./globals.css";

export const metadata = {
  title: "Advanced Neuromodulation Techniques | Dr. Neha Arora Verma",
  description:
    "Explore a three-day hands-on neuromodulation workshop for medical professionals covering non-invasive brain stimulation, clinical demonstrations, supervised practical training, and neurorehabilitation.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="home wp-singular page-template">{children}</body>
    </html>
  );
}
