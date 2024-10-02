import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import LayoutApp from "./_comps/layout";
import AntdLayout from "./_comps/layout/antdLayout";
import { SWRProvider } from "./_comps/layout/swr-provider";
// import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

const montserrat = Montserrat({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Grand Community",
  description: "Grand Community Influencers",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={montserrat.className}>
        <SWRProvider>
          <AntdRegistry>
            <AntdLayout>
              {/* <AntdLayout>{children}</AntdLayout> */}
              <LayoutApp>{children}</LayoutApp>
            </AntdLayout>
          </AntdRegistry>
        </SWRProvider>
      </body>
    </html>
  );
}
