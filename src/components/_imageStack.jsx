export const ImageStack = ({
  src,
  title,
  left,
  top,
  right,
  bottom,
  opacity = "opacity-100",
  tiltDirection = "right",
}) => {
  const tiltClass =
    tiltDirection === "right" ? "hover:rotate-6" : "hover:-rotate-6";

  return (
    <div
      className="animate-float"
      style={{ position: "absolute", left, top, right, bottom, opacity }}
    >
      <div
        className={`p-[2px] bg-gradient-to-br from-stone-300 to-stone-500 rounded-xl flex justify-center 
          transition-transform duration-200 ease-in-out 
          hover:scale-110 hover:shadow-lg hover:shadow-white hover:opacity-100
          w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] xs:scale-150 xs:w-[50px] xs:h-[50px] xs:scale-120
          scale-75 sm:scale-90 md:scale-100 ${tiltClass}`}
      >
        <div className="bg-transparent p-2 w-full h-full rounded-xl overflow-hidden">
          <img
            src={src}
            alt={title}
            title={title}
            className="object-fill w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};
