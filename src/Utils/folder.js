export const folder={
    name:"root",
    type:"folder",
    id:Math.random(),
    child:[
        {
            name:"folder 2",
            type:"folder",
            id:Math.random(),
            child:[
                {
                    name:"2-1folder",
                    type:"folder",
                    id:Math.random(),
                    child:[
                        {
                            name:"2-2file",
                            type:"file",
                            id:Math.random(),
                            content:{}
                        }
                    ]
                }
            ]
        },
        {
            name:"folder 1",
            type:"folder",
            id:Math.random(),
            child:[
                {
                    name:"file2",
                    type:"file",
                    id:Math.random(),
                    content:{}
                },
                {
                    name:"file3",
                    type:"folder",
                    id:Math.random(),
                    child:[
                    
                    ]
                }
            ]
        }
    ]
}