const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

let messages = []; //an array to store our messages

//READ all messages
app.get('/messages', (req, res) => {
    res.json(messages);
});

//READ a single message
app.get('/messages/:id', (req, res) => {
    const messageId = req.params.id;
    const message = messages.find(m => m.id === messageId);
    if (message) {
        res.json(message);
    } else {
        res.status(404).send({ error: "Message not found" });
    }
});

//CREATE a new message
app.post('/messages', (req, res) => {
    let newMessage = req.body;
    messages.push(newMessage);
    res.json(messages);
});

//UPDATE a message
app.put('/messages/:id', (req, res) => {
    const messageId = req.params.id;
    const messageIndex = messages.findIndex(m => m.id === messageId);
    if (messageIndex > -1) {
        const updatedMessage = { ...messages[messageIndex], ...req.body };
        messages[messageIndex] = updatedMessage;
        res.send(updatedMessage);
    } else {
        res.status(404).send({ error: "Message not found" });
    }
});

//DELETE a message
app.delete('/messages/:id', (req, res) => {
    const messageId = req.params.id;
    const remainingMessages = messages.filter(m => m.id !== messageId);
    messages = remainingMessages;
    res.json(messages);
});


let furniture = [
    { id: 1, name: 'Sofa Set', description: 'A comfortable 3-seater sofa set in grey.', imageURL: 'https://media.glamourmagazine.co.uk/photos/65d61935e63c67f3497ab037/16:9/w_1920,h_1080,c_limit/online%20furniture%20stores%20210224%20MAIN%20SH_MODERN_COMFY_TRULLO%20SOFA_2460_F1%20COPY.jpg' },
    { id: 2, name: 'Dining Table', description: 'A 6-seater dining table made of solid oak.', imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiuexHJBpEnJZ151Ftq9l-wmAtSt7PFrkQtg&s' },
    { id: 3, name: 'Bookshelf', description: 'A large bookshelf with five spacious shelves.', imageURL: 'https://www.ikea.com/es/en/images/products/gursken-bedroom-furniture-set-of-5-light-beige__1063815_ph182867_s5.jpg' },
    { id: 4, name: 'Coffee Table', description: 'A modern coffee table with a glass top.', imageURL: 'https://www.huset.com.au/blog/wp-content/uploads/2023/10/2.png' },
    { id: 5, name: 'Office Chair', description: 'An ergonomic office chair with adjustable height and back support.', imageURL: 'https://www.worldfurnitureonline.com/wp-content/uploads/2019/07/World-Furniture-Online_46-scaled.jpg' },
    { id: 6, name: 'Bed Frame', description: 'A queen-sized bed frame with a soft fabric finish.', imageURL: 'https://d1hy6t2xeg0mdl.cloudfront.net/image/726909/308cb4788c/800-width' },
    { id: 7, name: 'Night Stand', description: 'A wooden night stand with two drawers.', imageURL: 'https://images.prismic.io/boskyfurniture/70a95453-9737-4454-86a7-8fe94a02fb8e_maharaja.jpg' },
    { id: 8, name: 'Desk', description: 'A sleek white desk with ample workspace.', imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOEV-7nOeW-seMZFJVfQrnO3Kgf2d4_Pq0xg&s' },
    { id: 9, name: 'Wardrobe', description: 'A spacious wardrobe with sliding doors.', imageURL: 'https://www.foursquare.org.uk/wp-content/uploads/2023/10/furniture-scaled.jpg' },
    { id: 10, name: 'Armchair', description: 'A plush armchair in a vibrant yellow color.', imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvI0zlXB_Q7roBPAGEg4cPxF8rafIBZXNNDw&s' }
];

// READ all furniture items
app.get('/furniture', (req, res) => {
    res.json(furniture);
});

// READ a single furniture item
app.get('/furniture/:id', (req, res) => {
    const furnitureId = req.params.id;
    const furnitureItem = furniture.find(f => f.id === furnitureId);
    if (furnitureItem) {
        res.json(furnitureItem);
    } else {
        res.status(404).send({ error: "Furniture item not found" });
    }
});

// CREATE a new furniture item
app.post('/furniture', (req, res) => {
    let newFurniture = req.body;
    furniture.push(newFurniture);
    res.json(furniture);
});

// UPDATE a furniture item
app.put('/furniture/:id', (req, res) => {
    const furnitureId = Number(req.params.id);


    console.log("server.req.body", req.body)
    console.log("server.furnitureId", furnitureId)
    const furnitureIndex = furniture.findIndex(f => f.id === furnitureId);
    if (furnitureIndex > -1) {
        const updatedFurniture = { ...furniture[furnitureIndex], ...req.body };
        furniture[furnitureIndex] = updatedFurniture;
        res.send(updatedFurniture);
    } else {
        res.status(404).send({ error: "Furniture item not found" });
    }
});

// DELETE a furniture item
app.delete('/furniture/:id', (req, res) => {
    const furnitureId = Number(req.params.id);

    console.log("server.furnitureId", furnitureId)
    const remainingFurniture = furniture.filter(f => f.id !== furnitureId);
    furniture = remainingFurniture;
    console.log("server.furnitures", furniture)
    res.json(furniture);
});



const port = 8080;

app.listen(port, () => console.log(`Server started on port ${port}`));