import {prismaObjectType} from 'nexus-prisma'

const Teams = prismaObjectType({
    name: "Team",
    definition(t) {
        t.prismaFields({
            filter: [
                "createdAt",
                "updatedAt"
            ]
        })
    }
})

export default Teams;