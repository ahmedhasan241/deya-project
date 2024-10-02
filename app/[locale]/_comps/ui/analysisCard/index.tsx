const AnalysisCard = ({ title, value }) => {
  return (
    <div
      className="bg-[#F4F4F4] dark:bg-darkBGPrimary dark:shadow-darkShadow p-5 flex flex-col gap-2 rounded-tr-2xl rounded-bl-2xl
      "
    >
      <h3 className="text-[#989898] dark:text-white/60 font-medium text-lg">
        {title}
      </h3>
      <strong className="text-fontColor dark:text-white font-medium text-2xl lg:text-3xl">
        {value}
      </strong>
    </div>
  );
};

export default AnalysisCard;
