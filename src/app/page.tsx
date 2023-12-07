import AosInit from "@/components/aosInit";
import Carousel from "@/components/carrusel";
import Footer from "@/components/footer";
import BlogPreview from "@/views/blogPreview";
import Certificates from "@/views/certificates";
import CifrasEmpresa from "@/views/cifrasEmpresa";
import PrincipalTeam from "@/views/principalTeam";
import ProductosYServicios from "@/views/productosySercicios";

function Home() {
  return (
    <div className="w-full h-[200vh] flex flex-wrap justify-center">
      <Carousel />
      <section className="w-[1300px] mt-5 min-h-[50vh] flex flex-wrap items-center justify-center">
        <ProductosYServicios />
      </section>
      <section className="w-full mt-[50px]">
        <CifrasEmpresa />
      </section>
      <section className="w-full bg-secondary flex flex-wrap justify-center items-center">
        <BlogPreview />
      </section>
      <section className="w-full bg-primary flex flex-wrap justify-center items-center">
        <PrincipalTeam />
      </section>
      <section className="w-[1300px] flex flex-wrap justify-center items-center">
        <Certificates />
      </section>
      <Footer />
      <AosInit />
    </div>
  );
}

export default Home;
