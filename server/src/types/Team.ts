import {prismaObjectType} from 'nexus-prisma'

const Team = prismaObjectType({
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

export default Team;