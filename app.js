const locations = [
    '🏦', '🏥', '🏨', '⛪️', '🏢'
]

const people = [{
    name: 'Jimbo',
    picture: '🤵',
    location: '🏦'
},
{
    name: 'Sammy',
    picture: '🙆‍♀️',
    location: '🏦'
},
{
    name: 'Michael',
    picture: '👷',
    location: '🏦'
},
{
    name: 'Robert',
    picture: '👷',
    location: '🏥'
},
{
    name: 'Terry',
    picture: '🤴',
    location: '🏥',
},
{
    name: 'Bill',
    picture: '🕵️',
    location: '🏨',
},
{
    name: 'Marie',
    picture: '👩‍🍳',
    location: '🏨',
},
{
    name: 'Mykeal',
    picture: '💂',
    location: '⛪️',
},
{
    name: 'Phil',
    picture: '🧜‍♂️',
    location: '⛪️',
},
{
    name: 'Wilson',
    picture: '🏐',
    location: '🏢',
},
{
    name: 'Wendy',
    picture: '👩‍⚕️',
    location: '🏢',
},
{
    name: 'Jeremy',
    picture: '🦹',
    location: '🏢',
}
]

drawTown()

function drawTown() {
    locations.forEach((local) => {
        let inArea = people.filter((npc) => npc.location == local)
        let npcEmoji = inArea.map((npc) => npc.picture)
        document.getElementById(local).innerText = npcEmoji.join('  ')
    })
}

function attack(local) {
    // console.log(local)
    let inArea = people.filter((npc) => npc.location == local)
    inArea.map((npc) => npc.picture = '🦇')
    // console.log(inArea, 'mapped')
    movePeople()
    drawTown()
    checkWin()
}

function checkWin() {
    let turned = people.filter((npc) => npc.picture == '🦇')
    if (turned.length == people.length) {
        window.alert('CHALLENGE COMPLETE')
    }
}

function movePeople() {
    people.forEach(person => {
        if (person.picture != '🦇') {
            let randomIndex = Math.floor(Math.random() * locations.length)
            person.location = locations[randomIndex]
        }
    })
}