import {createSlice,nanoid} from '@reduxjs/toolkit'
const initialState={
    languageFilter:{}
}
const languageFilterSlice=createSlice({
    name:'languageFilter',
    initialState,
    reducers:{
        addLanguage:(state,action)=>{
            const language={
                id:nanoid(),
                language:`with_original_language=${action.payload.code}`,
                languageId:action.payload.code,
                languageTitle:action.payload.title,
                languagePrefix:'discover/movie'
            }
            state.languageFilter=language
        }
    }
})
// export const {addTodo,removeTodo}=todoSlice.actions
// export default todoSlice.reducer
export const {addLanguage} =languageFilterSlice.actions
export default languageFilterSlice.reducer