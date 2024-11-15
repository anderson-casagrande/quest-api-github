import {basesUrl} from '/src/scripts/variables.js'

async function getUser(userName) {
    const response = await fetch(`${basesUrl}/${userName}`)
    return await response.json()
}

export {getUser}