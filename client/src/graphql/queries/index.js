import gql from 'graphql-tag'

export const TEAMS = gql`
query teams {
  teams {
    id
    region
    abbrev
    name
    city
    state
  }
}
`
export const PLAYERS_ON_TEAM = gql`
query players($id: ID!) {
  team(where: {
    id: $id
  }){
    id
    region
    abbrev
    name
    city
    state
    players {
      id
      name
      number
    }
  }
}
`