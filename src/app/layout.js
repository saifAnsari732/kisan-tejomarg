import "./globals.css";

export const metadata = {
  title: "Tejomarg | Sanatan Dharma & Culture",
  description: "तेजोमार्ग एक आध्यात्मिक और सांस्कृतिक मंच है, जो सनातन धर्म को मानने वाले लोगों, हिंदू संस्कृति और भारतीय आध्यात्मिक परंपरा को आधुनिक डिजिटल माध्यमों के द्वारा जन-जन तक पहुँचाने के लिए समर्पित है।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
