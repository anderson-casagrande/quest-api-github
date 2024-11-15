import {basesUrl, eventsQuantity} from '/src/scripts/variables.js'

async function getLastEvents(userName){
    const response = await fetch(`${basesUrl}/${userName}/events?per_page=${eventsQuantity}`)
    return await response.json()
}

export {getLastEvents}