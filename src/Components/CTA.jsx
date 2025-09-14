import React from "react";

const CTA = () => {
  return (
    <section
      style={{
        backgroundImage: "url(/Cta.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "300px",
      }}
      className=" px-[213px] mt-12 overflow-hidden"
    >
      <h3>How do we help you to grow?</h3>
      <p className="line-clamp-3">
        With lots of unique blocks, you can easily build a page without coding.
        Build your next landing page.
      </p>
    </section>
  );
};

export default CTA;
