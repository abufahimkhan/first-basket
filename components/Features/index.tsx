"use client";
import SectionHeader from "../Common/SectionHeader";
import HomeMadeProductCards from "../HomeMadeProducts"; // Adjust path as needed

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "OUR PRODUCTS",
              subtitle: "Core Features of Our Homemade Goods",
              description: `Browse our unique selection of high-quality, handmade items carefully crafted with love and natural ingredients.`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 lg:mt-15 xl:mt-20">
            <HomeMadeProductCards />
          </div>
        </div>
      </section>
      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
