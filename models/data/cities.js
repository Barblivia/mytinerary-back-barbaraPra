import 'dotenv/config.js';
import '../../config/db.js';
import City from '../City.js';

let cities = [
    {
        city: "Rio de Janeiro",
        country: "Brazil",
        image: "/img/city1_Rio.jpg",
        description: "Experience the lively culture and stunning beaches of Rio de Janeiro in Brazil."
    },
    {
        city: "Paris",
        country: "France",
        image: "/img/city2_Paris.jpg",
        description: "Explore the romantic streets of Paris and visit iconic landmarks like the Eiffel Tower."
    },
]
City.insertMany(cities);