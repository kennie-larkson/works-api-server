import {staffs} from "../data";

const resolvers = {
    Query : {
        getStaffs: () => {
            return staffs;
        }, 

        getStaff: (_parent: any, args: { id: string; }, _context: any, _info: any) => {
            const singleStaff= staffs.find(staff =>  staff.id === args.id );
            console.log(singleStaff);
            return singleStaff;
              
        },

        
    },

    Mutation : {
        addStaff: (_parent: any, args: {id: string, name: string, gender: string, rank: string, unit: string, bio: string}) => {
            const data = {
                id: args.id,
                name: args.name,
                gender: args.gender,
                rank: args.rank,
                unit: args.unit,
                bio: args.bio
            };

             staffs.push(data);
             const newStaff = staffs.find(staff => staff.id === args.id);
             return newStaff;
        },

        removeStaffById: (_parent: any, args: {id: string, })=>{


              staffs.map(staff => {
                if(staff.id === args.id){
                    const index = staffs.indexOf(staff);
                     staffs.splice(index, 1);
                return staff;
                }
            });
            
            
        },

        removeStaffByName: (_parent: any, args: { name: string, })=>{
            staffs.map(staff => {
                if(staff.name === args.name){
                    const index = staffs.indexOf(staff);
                     staffs.splice(index, 1);
                return staff;
                }
            });
            
        },
    }
    
};

export default resolvers;