import {prismaObjectType, prismaExtendType} from 'nexus-prisma'
import {intArg} from 'nexus'

const Player = prismaObjectType({
    name: "Player",
    definition(t) {
        t.prismaFields({
            filter: [
                "createdAt",
                "updatedAt"
            ]
        })
        t.field("herePlayer", {
            type: 'String',
            resolve({name}) {
                return `Here ${name}! ${name.toUpperCase()}`
            }
        })
    }
})

export const poorPlayer = prismaExtendType({
    type: "Query",
    definition(t) {
        t.field("poorPlayer", {
            ... t.prismaType.players,
            args: {
                number: intArg({
                    default: 0,
                    description: "Jersey number",
                    nullable: false,
                })
            },
            resolve(parent, {number}, ctx) {
                return ctx.prisma.players( {where: {number_lt: number} } )
            }
        })
    }
})

export default Player