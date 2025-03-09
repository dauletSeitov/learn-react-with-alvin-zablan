import { useState } from "react"
import clsx from "clsx"
import ToogleButton from "./ToogleButton"

const SimpleDarkMode = () => {


    const [get, set] = useState(false)

    return (

        <div className={clsx("flex justify-center  p-4", get ? "text-neutral-300 bg-neutral-700" : "text-black bg-white")}>

            <div className="w-full max-w-2xl flex flex-col items-center">
                <ToogleButton
                    onClick={() => set((prev) => !prev)}
                    label={"dark mode "}
                    enabled={get} />
                <p>La Honda CBF500 fue una motocicleta tipo estándar naked fabricada por Honda del 2004 al 2008 en Japón. Fue una de las mejores motocicletas para principiantes y para uso diario de su tiempo. La CBF500 tiene un veloz motor de 2 cilindros bien fabricado, confiable y de comportamiento noble. Buena potencia para un motor de principiante y con un buen valor de reventa. Si se compara contra la Kawasaki ER-6 quizás la Honda CBF500 se vea simplona, pero mucha gente prefiere motocicletas no tan llamativas.4​2

                    A partir del 2006 se empezó a ofrecer como opción el sistema de frenado ABS.

                    Características generales
                    Chasis
                    Con un chasis de moto de carretera y unas carcasas muy ligeras, la moto se ve dotada de un muy buen motor el cual tiene una Cilindrada de 499 cc dando una potencia máxima de (56 cv). El modelo nuevo de la Honda CBF 500 se ha visto mejorado en muchos aspectos, pudiéndose destacar el relativo bajo consumo a la velocidad máxima. El tanque de combustible tiene una capacidad a tope de 15,7 de gasolina, los cuales le permiten una autonomía de unos 400 km. El consumo medio de la nueva Honda CBF500 es de unos 5,2 L a los 100 km.

                    Motor
                    Posee un motor bicilíndrico de 4 tiempos refrigerado por agua ofreciendo una potencia de 56 cv.
                    Capacidad máxima de combustible: 19 litros incluida reserva.
                    Capacidad máxima de aceite : 3,2 litros.5
                    Posee un sistema de admisión por carburación y un filtro de aire seco. La nueva honda CBF 500 también puede tener la opción de aportarnos una mayor seguridad y calidad de frenada introduciendo el sistema de frenado ABS.
                </p>
                <p>
                    Transmisión
                    En su sistema de transmisión tiene un sistema multidisco bañado en aceite permitiendo 6 velocidades con una transmisión final en forma de cadena. El sistema de cambio de marcha no posee alteraciones con respecto al sistema tradicional Honda.

                    Suspensión
                    Dentro de la suspensión, se pueden diferenciar la delantera y la trasera, siendo la primera del tipo telescópica convencional y la trasera Prolink con un mono-amortiguador de 4 posiciones ajustables.

                    Diseño
                    Sus llanta de aluminio reducen el peso de la rueda considerablemente y esta tiene una forma multi-radio,dándole un diseño extraordinario. Como colores de las carcasas externas se pueden elegir blanco con un vinilo intermedio rojo, negra completa o roja.

                    Accesorios originales
                    La honda CBF5006​ tenía disponible una gran variedad de accesorios originales Honda. Los accesorios destacados pueden ser:
                </p>
                <p>
                    maletín trasero de 39 l.
                    maletas laterales especialmente diseñadas.
                    calentador de puños
                    escape Akrapovic. Akrapovic es una marca fundada en el año 1990 basándose en la experiencia de la optimización de la moto estudiada por Igor Akrapovic. Desde entonces Akrapovic se ha convertido en la marca número uno en la venta de escapes para coches y moto, tanto para calle como para competición.7
                    guardabarros delantero.
                    red para carga.
                    funda protectora para la moto
                </p>
            </div>
        </div>

    )
}

export default SimpleDarkMode