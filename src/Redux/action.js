// Action type

export const ADD_COUNT="ADD_COUNT";
export const ADD_TODO="ADD_TODO";
export const DEL_TODO="DEL_TODO";
// Action creator
export const addCount=(data)=>{
    return {
        type:ADD_COUNT,
        payload:data,
    };
};
export const addTodo=(data)=>{
    return {
        type:ADD_TODO,
        payload:data,
    };
};
export const delTodo=(data)=>{
    return {
        type:DEL_TODO,
        payload:data,
    };
};
