const reducer = (state, action) => {
    switch (action.type) {
      case 'signin':
        return {
          ...state,
          token: action.token,
        };

      case 'amount':
        return {
          ...state,
          amount: action.amount,
        };
      case 'customer':
        return {
          ...state,
          customer: action.customer,
        };
        case 'userEmail':
          return {
            ...state,
            userEmail: action.userEmail,
          };
      case 'company':
        return {
          ...state,
          company: action.company,
        };
        case 'insureduser':
          return{
            ...state,
            insureduser: action.insureduser,
          };
            
          case 'balance':
            return {
              ...state,
              balance: action.balance,
            };
            case 'message':
              return {
                ...state,
                message: action.message,
              };
            case 'companylength':
              return {
                ...state,
                companylength: action.companylength,
              };
          

      default:
        return state;
    }
  };
  export default reducer;