import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../[locale]/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import AntdLayout from "../[locale]/_comps/layout/antdLayout";
import { SWRProvider } from "../[locale]/_comps/layout/swr-provider";

const montserrat = Montserrat({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Grand Community",
  description: "Grand Community Influencers",
};

export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={montserrat.className}>
        <SWRProvider>
          <AntdRegistry>
            <AntdLayout>{children}</AntdLayout>
          </AntdRegistry>
        </SWRProvider>
      </body>
    </html>
  );
}
