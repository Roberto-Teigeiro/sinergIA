import imageJuego from "./Juego.png"
import imageNode from "./node.png"
export default function ProjectCard() {
    return (
        <html lang="es">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            </head>
            <body>
                <section className="w-screen h-screen flex justify-center items-center px-2">
                    {/* Primera tarjeta */}
                    <div className="wrapper max-w-xs bg-gray-50 rounded-b-md shadow-lg overflow-hidden mx-4">
                        <div>
                            <img src={imageJuego} alt="teus"  />
                        </div>
                        <div className="p-3 space-y-3">
                            <h3 className="text-gray-700 font-semibold text-md">
                                La Odisea de Teus
                            </h3>
                            <p className="text-sm text-gray-900 leading-sm">
                                Videojuego usando React
                            </p>
                            <p>
                                <span className="flex">
                                    
                                </span>
                            </p>
                        </div>
                        <a href="https://roxrox123.itch.io/la-odisea-de-teus-en-busca-del-tesoro-perdido">
                        <button
                            className="bg-teal-600 w-full flex justify-center py-2 text-white font-semibold transition duration-300 hover:bg-teal-500"
                        >
                            <svg
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                className="h-6 mr-1 text-white"
                            >
                               
                            </svg>
                            link
                        </button>
                        </a>
                    </div>

                    {/* Segunda tarjeta */}
                    <div className="wrapper max-w-xs bg-gray-50 rounded-b-md shadow-lg overflow-hidden mx-4">
                        <div>
                            <img src={imageNode} alt="nodejs"  />
                        </div>
                        <div className="p-3 space-y-3">
                            <h3 className="text-gray-700 font-semibold text-md">
                                Tutorial de NodeJS
                            </h3>
                            <p className="text-sm text-gray-900 leading-sm">
                                Pagina web usando el framework materiallize
                            </p>
                            <p>
                                <span className="flex">
                                    
                                </span>
                            </p>
                        </div>
                        <a href="https://roberto-teigeiro.github.io/Lab1/">
                        <button
                            className="bg-teal-600 w-full flex justify-center py-2 text-white font-semibold transition duration-300 hover:bg-teal-500"
                        >
                            <svg
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                className="h-6 mr-1 text-white"
                            > 
                            </svg>
                            link
                        </button>
                        </a>
                    </div>
                     {/* Tercera tarjeta */}
                     <div className="wrapper max-w-xs bg-gray-50 rounded-b-md shadow-lg overflow-hidden mx-4">
                        <div>
                            <img src={imageJuego} alt="montaña"  />
                        </div>
                        <div className="p-3 space-y-3">
                            <h3 className="text-gray-700 font-semibold text-md">
                                La Odisea de Teus
                            </h3>
                            <p className="text-sm text-gray-900 leading-sm">
                                Videojuego usando React
                            </p>
                            <p>
                                <span className="flex">
                                    
                                </span>
                            </p>
                        </div>
                        <a href="https://roxrox123.itch.io/la-odisea-de-teus-en-busca-del-tesoro-perdido">
                        <button
                            className="bg-teal-600 w-full flex justify-center py-2 text-white font-semibold transition duration-300 hover:bg-teal-500"
                        >
                            <svg
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                className="h-6 mr-1 text-white"
                            > 
                            </svg>
                            link
                        </button>
                        </a>
                    </div>
                </section>
            </body>
        </html>
    );
}
