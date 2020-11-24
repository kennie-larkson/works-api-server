import {gql} from "apollo-server-express";


const typeDefs = gql`

type Query {
    # getStaff(staffID: String): Staff
    getStaffs: [Staff]!
    getStaff(id: String): Staff
}

type Staff {
    id: String!
    name: String!
    gender: String
    rank: String!
    unit: String!
    bio: String!
}
    
type Mutation {
    addStaff(id: String, name: String, rank: String, gender: String, bio: String, unit: String ): Staff
    removeStaffById(id: String): Staff
    removeStaffByName(id: String, name: String, gender: String, unit: String, rank: String, bio: String): Staff
}
    
`



export default typeDefs;





    
   


