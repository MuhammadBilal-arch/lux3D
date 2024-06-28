export const ColoredButton = ({
  title,
  type,
  onHandleClick,
  textColor = "text-black",
  afterIcon,
  background,
  borderColor
}) => {
  return (
    <button
      type={type || "button"}
      onClick={onHandleClick}
      className={`${background} min-w-32 text-center flex items-center justify-center max-w-min border ${borderColor} transition duration-300 delay-300 hover:text-black hover:bg-white hover:border-white whitespace-nowrap items-center py-2 px-4 md:px-5 xl:px-8 ${textColor} rounded-3xl text-xs md:text-xs lg:text-base`}
    >
      {title}
      {afterIcon && <div className="px-2">{afterIcon}</div>}
    </button>
  );
};

export const WhiteButton = ({ title, type, onHandleClick, textColor = "text-black" }) => {
  return (
    <button
      type={type || "button"}
      onClick={onHandleClick}
      className={`bg-white min-w-32 text-center py-2 px-4 md:px-5 ${textColor} transition duration-300 delay-300 hover:text-black hover:bg-white hover:border-white rounded-3xl text-xs md:text-sm lg:text-base`}
    >
      {title}
    </button>
  );
};

export const TransparentButton = ({ title, type, onHandleClick, textColor = 'text-white' , borderColor="border-white" }) => {
  return (
    <button
      type={type || "button"}
      onClick={onHandleClick}
      className={`bg-transparent min-w-32 text-center py-2 px-4 md:px-5 xl:px-8 transition duration-300 delay-300 
      hover:text-black hover:bg-white hover:border-white ${textColor} border ${borderColor} rounded-3xl text-xs md:text-sm lg:text-base`}
    >
      {title}
    </button>
  );
};
