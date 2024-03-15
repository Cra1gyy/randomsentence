const firstName = ['Zeus', 'Apollo', 'Poseidon', 'Ares', 'Hades', 'Morpheus', 'Hermes', 'Chronos', 'Athena', 'Artemis'];
const secondName = ['God', 'Goddess', 'Deity', 'Creator', 'Divine being', 'Avatar', 'Supreme being', 'Ruler', 'Lord', 'Spirit'];
const thirdName = ['Love', 'Earth', 'Night', 'Fire', 'Lightning', 'War', 'Shadow', 'Dreams', 'Death', 'Life'];



const firstNameGen = () => {

    let gen1 = firstName[Math.floor(Math.random() * firstName.length)];

    return gen1;
}

const secondNameGen = () => {

    let gen2 = secondName[Math.floor(Math.random() * secondName.length)];

    return gen2;
}

const thirdNameGen = () => {

    let gen3 = thirdName[Math.floor(Math.random() * thirdName.length)];

    return gen3;
}



const godSentence = () => {
    console.log(firstNameGen() + ' ' + secondNameGen() + ' of ' + thirdNameGen());
}


godSentence();