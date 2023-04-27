import Image from "next/image";
import Imagen7 from "../image/7.png";
import Link from "next/link";

const Septimo = () => {
  return (
    <div className="text-center flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">
        Tres docenas de Tortilla de maiz
      </h1>
      <div className="mx-auto">
        <Image
          src={Imagen7}
          alt="Imagen del Producto"
          priority
          width={500}
          height={64}
          className="object-contain mb-4"
        />
      </div>
      <p className="text-base text-gray-500">
        Tres docenas de tortilla de maíz es un paquete generoso y práctico para
        aquellos que buscan una opción conveniente para preparar sus platillos
        mexicanos favoritos. Este paquete contiene 36 tortillas de maíz,
        elaboradas con los mejores ingredientes y cuidadosamente seleccionados
        para garantizar su calidad y autenticidad.
      </p>
      <p className="text-base text-gray-500">
        Las tortillas de maíz son una parte fundamental de la cocina mexicana y
        son perfectas para preparar platillos como tacos, enchiladas,
        quesadillas y mucho más. Son suaves, flexibles y llenas de sabor, lo que
        las hace perfectas para cualquier relleno que desees agregar.
      </p>
      <p className="text-base text-gray-500">
        Cada tortilla de maíz es elaborada con una receta tradicional,
        utilizando solo maíz molido y agua, lo que las hace naturales y
        saludables. Son cocidas en un comal caliente para crear una textura
        suave y ligeramente tostada, lo que le agrega un sabor excepcional a tus
        platillos.
      </p>
      <p className="text-base text-gray-500">
        Este paquete de tres docenas de tortilla de maíz es ideal para aquellos
        que buscan disfrutar de la autenticidad de la cocina mexicana en grandes
        cantidades. Es perfecto para hogares grandes, reuniones familiares,
        fiestas y cualquier evento en el que se desee servir platillos
        mexicanos.
      </p>
      <div className="fixed bottom-4 left-4">
        <Link href="/productos" legacyBehavior>
          <a className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Septimo;
