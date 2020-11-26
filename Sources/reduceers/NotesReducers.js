export const intialState = [
    
]

export const reducer = (state,{type,payload}) => {
    switch(type){
        case "ADD NOTES HERE!" :
            return [...state, {
                id:Math.random(),
                title: payload.title, 
                content: payload.content
            }
            ]
        case "REMOVE" :
            return state.filter((note)=> payload !== note.id)
        case "EDIT" :
            return state.map(record => {
                if(payload.id === record.id)
                    return payload
                else    
                    return record
            })
        default :
            return state
    }
}