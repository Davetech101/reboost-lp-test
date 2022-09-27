import blogImg from "../assets/blog-img.jpg";

const BlogSection = () => {
  return (
    <section className="blogSection">
      <main>
        <div>
          <h1>Visit our blog</h1>

          <p>
            On our blog we share our insights and deeper thinking on today's
            industry.
          </p>

          <p>
            Sharing information about how to improve your relationships with the
            industry is a key aspect of how we do business.
          </p>

          <p>Delve into our way of thinking within our blog.</p>
        </div>

        <img src={blogImg} alt="" />
      </main>
    </section>
  );
};

export default BlogSection;
