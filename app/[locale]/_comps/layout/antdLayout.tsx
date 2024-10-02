"use client";
import StyledComponentsRegistry from "@/utils/antdRegistry";
import { ConfigProvider, theme } from "antd";
import { Almarai, Montserrat } from "next/font/google";

const almarai = Almarai({
  variable: "--font-almarai",
  weight: ["700", "400"],
  display: "swap",
  subsets: ["arabic"],
});
const montserrat = Montserrat({
  variable: "--font-montserrat",
  // weight: ["700", "400"],
  // display: "swap",
  subsets: ["latin"],
});

export default function AntdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { defaultAlgorithm, darkAlgorithm } = theme;

  return (
    <div className={`${montserrat.variable} ${montserrat.className}`}>
      <StyledComponentsRegistry>
        <ConfigProvider
          theme={{
            // algorithm: themeApp === "dark" ? darkAlgorithm : defaultAlgorithm,
            // algorithm: theme.compactAlgorithm,
            // hashed: false,
            components: {
              Button: {
                borderRadius: 42,
                paddingContentHorizontal: 36,
                paddingContentVertical: 10,
                fontSize: 14,
                borderRadiusSM: 24,
                controlOutline: "",
                primaryShadow: "none",
                colorPrimaryBg: "",
              },
              Modal: {
                fontFamily: montserrat.style.fontFamily,
              },
              Table: {
                headerBg: "rgba(169, 105, 0, 0.25)",
                headerSortActiveBg: "rgba(169, 105, 0, 0.15)",
                headerSortHoverBg: "rgba(169, 105, 0, 0.2)",
                // rowSelectedBg: themeApp === "dark" ? "#2c2c2c" : "#fff",

                // cellPaddingBlock: 12,
                cellPaddingInline: 8,
                cellPaddingBlock: 16,
                selectionColumnWidth: 12,
              },
              Divider: {
                // colorText: themeApp === "dark" ? "#9B7029" : undefined,
              },
              Menu: {
                itemColor: "#FFFFFF",
                darkItemColor: "#FFFFFF",
                itemHoverBg: "#F79400",
                darkItemHoverBg: "#F79400",
                itemHoverColor: "#9B7029",
                // itemMarginBlock: "",
                // itemMarginInline: 20,
                // itemPaddingInline: "",
                itemSelectedBg: "",
                itemSelectedColor: "#F79400",
                subMenuItemBg: "",
                iconSize: 18,
              },
              Layout: {
                // bodyBg: themeApp === "dark" ? "#2f2f2f" : "#EDEDED",
                // headerBg: themeApp === "dark" ? "#121212" : "#fff",
                // headerColor: themeApp === "dark" ? "#fff" : "#3A3A3A",
                headerHeight: 80,

                // headerPadding: ""
              },
              Input: {
                activeShadow: "",
                addonBg: "#232323",
                colorTextPlaceholder: "#8B8B8B",
                hoverBg: "#232323",
                activeBg: "#232323",
                colorBgContainer: "#232323",
                colorBorder: "transparent",
                hoverBorderColor: "transparent",
                activeBorderColor: "transparent",
              },
              Badge: {
                colorBgContainer: "#fff",
              },

              Select: {
                // optionSelectedColor: themeApp === "dark" ? "#121212" : "#fff",
                colorTextPlaceholder: "#BE7406",
                optionSelectedColor: "#BE7406",
                colorIcon: "#BE7406",
                optionFontSize: 12,
                optionHeight: 28,
                multipleItemHeight: 8,
                multipleItemHeightLG: 24,
                selectorBg: "#232323",
              },
              DatePicker: {
                activeBorderColor: "",
                hoverBorderColor: "",
                // colorBgContainer:
                // themeApp === "dark" ? "#2f2f2f" : "transparent",
                // colorBgContainer:
                //   themeApp === "dark" ? "#2f2f2f" : "transparent",

                // cellHeight: 16,
                // cellWidth: 24,
                // inputFontSize: 10,
                // inputFontSizeLG: 12,
              },
              Steps: {
                dotSize: 34,
                dotCurrentSize: 34,
              },
              Form: {
                labelFontSize: 16,
                // itemMarginBottom: 24
                verticalLabelPadding: "0 0 6px 0",
              },
            },

            token: {
              fontFamily: "inherit",
              colorPrimary: "#9B7029",
              // colorPrimaryText: "",
              // colorPrimaryHover: "",
              // colorText: themeApp === "dark" ? "#fff" : "#3A3A3A",
              colorTextSecondary: "#333333",
              colorPrimaryBg: "#866023",
              // sizeStep: 6,
              fontSize: 14,
              //   colorBgBase: "#9B7029",
            },
          }}
        >
          {children}
        </ConfigProvider>
      </StyledComponentsRegistry>
    </div>
  );
}
