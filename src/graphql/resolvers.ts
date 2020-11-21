
const staffs = [
    { 
      id: "1", 
      name: "Arc. Adeyemo Adekunle",
      rank: "Ag. HOD / Deputy Director",
      unit: "Quantity Survey",
      gender: "",
      bio: "hdjdjdsk jaklasl sksklsl kklsskl"
     }, 
     { 
      id: "2", 
      name: "Engr. O.C. Olowa",
      rank: "Deputy Director",
      unit: "Quantity Survey",
      gender: "",
      bio: "hdjdjdsk jaklasl sksklsl kklsskl" 
    },
    { 
      id: "3", 
      name: "Engr. M.B. Jenyo",
      rank: "Deputy Director",
      unit: "Quantity Survey",
      gender: "",
      bio: "hdjdjdsk jaklasl sksklsl kklsskl" 
    }, 
    { 
      id: "4", 
      name: "Engr. Alege",
      rank: "Asst. Chief",
      unit: "Quantity Survey",
      gender: "",
      bio: "hdjdjdsk jaklasl sksklsl kklsskl" 
    },
    { 
      id: "5", 
      name: "Arc. Abdulakeem",
      rank: "Principal Architect",
      unit: "Quantity Survey",
      gender: "",
      bio: "hdjdjdsk jaklasl sksklsl kklsskl" 
    }, 
    { 
      id: "6", 
      name: "Mr. Abdulakeem Ojuolape",
      rank: "Chief Admin Officer",
      unit: "Quantity Survey",
      gender: "",
      bio: "hdjdjdsk jaklasl sksklsl kklsskl" 
    },
    { 
      id: "7", 
      name: "Engr. Abdulrasak Oluwanisola",
      rank: "Deputy Director",
      unit: "Quantity Survey",
      gender: "",
      bio: "hdjdjdsk jaklasl sksklsl kklsskl" 
    },
    { 
      id: "8", 
      name: "Engr. Adua .T.",
      rank: "Deputy Director",
      unit: "Quantity Survey",
      gender: "",
      bio: "hdjdjdsk jaklasl sksklsl kklsskl" 
    },
    { 
      id: "9", 
      name: "Engr. Bamidele Segun",
      rank: "Senior Engineer",
      unit: "Quantity Survey",
      gender: "",
      bio: "hdjdjdsk jaklasl sksklsl kklsskl" 
    }, 
    { 
      id: "10", 
      name: "Engr. Adeyi",
      rank: "Principal Engineer",
      unit: "Quantity Survey",
      gender: "",
      bio: "hdjdjdsk jaklasl sksklsl kklsskl" 
    },
    { 
      id: "11", 
      name: "Engr. uthman Eletu",
      rank: "Senior Engineer",
      unit: "Quantity Survey",
      gender: "",
      bio: "hdjdjdsk jaklasl sksklsl kklsskl" 
    },
    { 
      id: "12", 
      name: "Mrs. Ruqayat Solagberu",
      rank: "Deputy Director",
      unit: "Quantity Survey",
      gender: "",
      bio: "hdjdjdsk jaklasl sksklsl kklsskl" 
    },
      ];


const resolvers = {
    Query : {
        getStaffs: () => {
            return staffs;
        }, 

        getStaff: (_parent: any, args: { id: string; }, _context: any, _info: any) => {
            const singleStaff= staffs.find(staff => { staff.id === args.id; })
            console.log(singleStaff);
            return singleStaff;
            
            
        },

        
    },

    Mutation : {
        addStaff: (_parent: any, args: {id: string, name: string, gender: string, rank: string, unit: string, bio: string}) => {
             staffs.push()
             const newStaff = staffs.find(staff => {staff.id === args.id});
             return newStaff;
        },
    }
    
};

export default resolvers;