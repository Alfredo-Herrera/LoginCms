import './styles.css';

const ContainerImageForm = () => {
    return (
        <div
            className="hidden lg:flex w-full lg:w-1/2 login_img_section
          justify-around items-center"
        >
            <div
                className=" 
                  bg-black 
                  opacity-20 
                  inset-0 
                  z-0"
            ></div>
            <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
                <h1 className="text-white font-bold text-4xl font-sans">
                    ¿No tienes cuenta?
                </h1>
                <p className="text-white mt-1">
                    Regístrate y haz tus compras más rápido.
                </p>
                <div className="flex justify-center lg:justify-start mt-6">
                    <a
                        href="#"
                        className="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2"
                    >
                        Crear Cuenta
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContainerImageForm;
