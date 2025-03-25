import { useEffect, useState, useCallback } from "react"

export const UseCalbackExample2 = () => {

    const [desserts, setDesserts] = useState([])

    const fetchDesserts = async () => {
        await setDesserts(initialDesserts)
    }

    useEffect(() => {
        fetchDesserts()
    }, [fetchDesserts])

    return (
        <div className="flex justify-center ">

            <div className="max-w-3xl w-full ">

                {desserts && desserts.map((d, i) => (
                    <div key={i} className="my-4 border boder-stone-600 rounded-md overflow-clip">
                        <div className="flex">
                            <img className="w-45"
                                src={d.imageUrl}></img>
                            <div className="mx-4">
                                <div className="text-lg mb-2">{d.name}</div>
                                <div>{d.description}</div>

                            </div>
                        </div>
                    </div>
                ))
                }

            </div>

        </div>
    )
}

const initialDesserts = [{
    imageUrl: "https://cdn.loveandlemons.com/wp-content/uploads/2021/06/summer-desserts.jpg",
    name: "Vegan Tiramisu with Chocolate Cream and Cherries",
    description: `This vegan tiramisu dessert recipe with chocolate cream is super easy, totally delicious and can be served either in a glass or in a classic casserole dish. Make it with or without coffee and alcohol (alcohol-free) and top it with fresh berries or cherries for the perfect delightful dairy-free dessert that will be loved by everyone!

You can find this recipe here: https://biancazapatka.com/en/vegan-tiramisu-dessert/ .`

}, {
    imageUrl: "https://biancazapatka.com/wp-content/uploads/2020/07/tiramisu-dessert-easy-vegan.jpg",
    name: "Easy Summer Desserts: Strawberry Shortcake",
    description: `Which types of work are subject to copyright?
Copyright ownership gives the owner the exclusive right to use the work, with some exceptions. When a person creates an original work, fixed in a tangible medium, he or she automatically owns copyright to the work.

Many types of works are eligible for copyright protection, for example:

Audiovisual works, such as TV shows, movies, and online videos
Sound recordings and musical compositions
Written works, such as lectures, articles, books, and musical compositions
Visual works, such as paintings, posters, and advertisements`

},
{
    imageUrl: "https://images.immediate.co.uk/production/volatile/sites/2/2018/09/OLI-0918_HereNow-CremeCaramel_28005-cb31e47.jpg?quality=90&resize=556,505",
    name: "Hot Fudge Ice Cream Bar Dessert",
    description: `Hot Fudge Ice Cream Bar Dessert
4.8
(842)
·
1 hr, 35 min
·
Yield: 12
A layered frozen dessert of ice cream sandwiches, whipped topping, peanuts and peanut ...
Images may be subject to copyright. Learn More`

},
{
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTjX70ZjPUAt_m3_vyAiFIriIgB9YkEdQVRA&s",
    name: "Chocolate Layered Sweet Treat",
    description: `Satisfy your craving with our four-ingredient, quick and easy dessert cup. With layers of crushed ...
Creator: Stefan Tomic 
| 
Credit: Getty Images/iStockphoto
Want to know where this information comes from? Learn more
Images may be subject to copyright. Learn More`

}]