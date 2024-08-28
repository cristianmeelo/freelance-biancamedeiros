import CompareImage from "react-compare-image";

export const CompareSection = () => {
  const beforeImageUrl = "/images/before.png";
  const afterImageUrl = "/images/after.jpeg";

  return (
    <section className="relative w-full bg-gray-100 flex items-center justify-center py-12">
      <div className="w-full max-w-3xl h-[400px] md:h-[600px]">
        <CompareImage
          leftImage={beforeImageUrl}
          rightImage={afterImageUrl}
          sliderLineColor="rgba(255, 255, 255, 0.8)"
        />
      </div>
    </section>
  );
};
