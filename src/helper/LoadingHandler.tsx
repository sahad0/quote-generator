export interface LoadingState  {
    loading:boolean,
}

const requestStatus = (state:LoadingState|undefined,action:any) => {
    switch (action.type) {
      case "loading":
        return {
          loading: true,
        };
      case "success":
        return {
          loading: false,
        };
      case "error":
        return {
          loading: false,
        };
    }
  };


  export const initial_state:LoadingState = {
    loading: false,
  };
  
  export default requestStatus;