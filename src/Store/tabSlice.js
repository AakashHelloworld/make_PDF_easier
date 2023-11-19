import { createSlice } from "@reduxjs/toolkit";
import pdfOne from "../PDF/sample.pdf"
const initialState = {
    tabsOne: [
      {
        id:Math.random(), 
        name: 'tab1',
        content: pdfOne,
      }
      ],
    tabsTwo: [
      {
        id:Math.random(), 
        name: 'tab1',
        content: pdfOne,
      },
      ],
      split: false
    
}

export const tabSlice = createSlice({
    name: 'tab',
    initialState,
    reducers: {

      // Handling drag and drop of tabs
        dragHandler:(state, action) => {

            const { destination, source, draggableId: destinationId } = action.payload;

            if(!(source?.droppableId && destination?.droppableId)) return

            const reorderItems = (items, source, destination) => {
                const [reorderedItem] = items.splice(source.index, 1);
                items.splice(destination.index, 0, reorderedItem);
                return items;
            }

            const filterItems = (items, id) => items.filter((data)=>(data.id != id))

            if(source.droppableId == destination.droppableId) {
                if(state.tabsOne.some(data => data.id == destinationId)){
                    state.tabsOne = reorderItems(Array.from(state.tabsOne), source, destination);
                }
                if(state.tabsTwo.some(data => data.id == destinationId)){
                    state.tabsTwo = reorderItems(Array.from(state.tabsTwo), source, destination);
                }
                return
            }

            if(state.tabsOne.some(data => data.id == destinationId)){
                state.tabsTwo = [...state.tabsTwo, ...state.tabsOne.filter(data => data.id == destinationId)];
                state.tabsOne = filterItems(state.tabsOne, destinationId);

            }else if(state.tabsTwo.some(data => data.id == destinationId)){
                state.tabsOne = [...state.tabsOne, ...state.tabsTwo.filter(data => data.id == destinationId)];
                state.tabsTwo = filterItems(state.tabsTwo, destinationId);
            }

            console.log(state.tabsOne.length, state.tabsTwo.length)
            if(state.tabsOne.length==0){
              console.log("Hello I am here")
              state.tabsOne = state.tabsTwo
              state.tabsTwo = []
            }


            if(state.tabsTwo.length==0){
              console.log("Hello I am here")
                state.split = false
             }      
        },

      //  Tab Add Handler ....
      
        tabAddHandler:(state, action) => {
          const {id, folderStructure} = action.payload;
          console.log(id, folderStructure)
          if(!id) return

          const loop = (folder, id) => {
            if(folder?.id == id) {
              const data = {
                id: Math.random(),
                name: folder?.name,
                content: folder?.content
              }
              state.tabsOne = [...state.tabsOne, data]
                return folder
            }  else {
                for(let i = 0; i < folder?.child?.length; i++){
                   loop(folder?.child[i], id)
                }
            }
            
          }
          loop(folderStructure, id)

        },

          dragnoTabHandler:(state, action) => {
            
            console.log(action.payload, "Hello I am dragHndler")
            if(state.tabsTwo <= 0){
            console.log(action.payload, "Hello I am dragHndler")
          }
            
          },

          splitTogger:(state, action) => {
            state.split = !state.split
          }

    }
})



export const { dragHandler,tabAddHandler,dragnoTabHandler, splitTogger} = tabSlice.actions
export const tabReducer = tabSlice.reducer