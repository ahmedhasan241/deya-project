import { useGetOffices } from "@/app/[locale]/settings/offices/_api/query";
import React, { useState } from "react";
import Select from "../../ui/select";
import { useTranslations } from "next-intl";

const OfficesSelector = ({ status = undefined, ...props }: any) => {
  const [search, setSearch] = useState("");
  const { offices, loading } = useGetOffices({ search, status, per_page: 50 });
  const t = useTranslations();
  return (
    <Select
      size="large"
      showSearch
      placeholder={t("companies.offices")}
      optionFilterProp="children"
      onSearch={(value) => setSearch(value)}
      filterOption={false}
      loading={loading}
      allowClear
      mode="multiple"
      options={offices?.map((item) => ({ value: item.id, label: item.name }))}
      {...props}
    />
  );
};

export default OfficesSelector;
