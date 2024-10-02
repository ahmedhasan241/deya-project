const OverViewCard = ({ title, count }) => {
  return (
    <div className="shadow-card dark:shadow-none dark:bg-darkBGPrimary py-4 px-5  min-h-[175px]">
      <h3 className="w-full text-lg font-medium">{title}</h3>
      <div className="flex justify-center items-center w-full h-full">
        <span className="text-2xl font-medium">{count}</span>
      </div>
    </div>
  );
};

export default OverViewCard;
