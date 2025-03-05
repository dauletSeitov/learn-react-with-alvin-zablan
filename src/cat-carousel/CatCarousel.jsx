import CatCard from "./CatCard"
import NavButton from "./NavButton";

const CATS = [
    {
        name: "Tommy",
        age: 5,
        breed: "Bulldog",
        location: "New York",
        imageUrl: "https://moremotoracing.com/img/cms/BANNER%20OFFLINE%20(1).png"
    },
    {
        name: "Rex",
        age: 3,
        breed: "German Shepherd",
        location: "Chicago",
        imageUrl: "https://www.ovexscooter.com/2539-large_default/ovex-x-rider-xl-moto-cross.jpg"
    },
    {
        name: "Bella",
        age: 2,
        breed: "Labrador",
        location: "Los Angeles",
        imageUrl: "https://pitbikeimr.com/2518-thickbox_default/mir-racing-moto-5-2023.jpg"
    },
    {
        name: "Milo",
        age: 4,
        breed: "Beagle",
        location: "San Francisco",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgZ_sowCh1WjwSotkRvqYzBBmxq7aqYAZIOw&s"
    },
    {
        name: "Charlie",
        age: 1,
        breed: "Poodle",
        location: "Seattle",
        imageUrl: "https://img2.storyblok.com/620x0/smart/f/176629/7314x4876/31c2ff1077/cfmoto-hero-image-mt-touring-both-03.jpg"
    }
];
const CatCarousel = () => {


    console.log("CATS:", CATS[0])
    return (


        <div className="flex justify-center items-center">
            <NavButton icon="fa-angle-left"/>
            <CatCard cat={CATS[0]} />
            <NavButton icon="fa-angle-right"/>
        </div>

    )


}



export default CatCarousel