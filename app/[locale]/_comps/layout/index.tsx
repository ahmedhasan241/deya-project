"use client";
import React, { useEffect } from "react";
import { Layout } from "antd";
import LayoutHeader from "./header/layoutHeader";

const { Content } = Layout;

const LayoutApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout className="min-h-screen" style={{ minHeight: "100vh" }}>
      <LayoutHeader />
      <Content className="container  bg-[#262626]">{children}</Content>
    </Layout>
  );
};

export default LayoutApp;
