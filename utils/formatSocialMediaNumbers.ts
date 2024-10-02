export const formatNumber = (num: number, addK: boolean) => {
  return addK
    ? +num > 1000000
      ? `${Number(+num / 1000000.0).toFixed(2)}M`
      : +num > 1000
      ? `${Math.floor(+num / 1000)}K`
      : +num
    : num;
};
