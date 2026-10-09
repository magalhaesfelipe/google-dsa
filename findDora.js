const florest = ["Roma", "Ceaser", "Dora", "Einstein"];

function findDoraNow(florest) {
    let dora = '';
    let time0 = performance.now(); 

    for (let y = 0; y < florest.length; y++) {
        if (florest[y] === 'Dora') {
            console.log('We found Dora at index: ', y, 'in the forest. \n');
            dora = florest[y];
        }
    }
    let time1 = performance.now();
    console.log('Loop to find Dora took', (time1 - time0), ' milliseconds. \n')

    if (dora.length === 0) {
        console.log('We could not find dora')
    } else {
        console.log('Dora was found')
    }
}

findDoraNow(florest)
