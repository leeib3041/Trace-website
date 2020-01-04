import {prisma} from "../generated/prisma-client"
import faker from 'faker'
import {teams as teamsJson} from './teams.json'

let teamsJsonSnippet = teamsJson
teamsJsonSnippet.length = 100

const teams = teamsJsonSnippet.map((team) => {
    return {
        region: team.region,
        abbrev: team.abbrev,
        name: team.name,
        city: team.city,
        state: team.state,
        players: [...Array(12)].map(() => {
            return {
                name: faker.name.firstName(),
                number: faker.random.number({
                    max: 100,
                    min: 1,
                    precision: 1,
                })
            }
        })
    }
})

const seedDatabase = async () => {
    for (const team of teams) {
        const dbTeam = await prisma.createTeam({
            region: team.region,
            abbrev: team.abbrev,
            name: team.name,
            city: team.city,
            state: team.state
        })
        for (const player of team.players) {
            const dbPlayer = await prisma.createPlayer({
                name: player.name,
                number: player.number,
                team: {
                    connect: {
                        id: dbTeam.id
                    }
                }
            })
        }
    }
}
seedDatabase()