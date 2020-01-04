import {prismaObjectType} from 'nexus-prisma'

const Mutation = prismaObjectType({
    name: "Mutation",
    definition(t) {
        t.prismaFields(['deleteTeam'])
            // filter: [
            //     "deleteManyTeams",
            //     "deleteManyPlayers",
            //     "updateManyTeams",
            //     "updateManyPlayers",
            // ]
        // })
    }
})

export default Mutation