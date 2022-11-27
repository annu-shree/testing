import React from react;

const UserContext = React.createContext();

const useUserContext = () => {
    const context = useContext(UserContext);
    return context;
};

const UseContextProvider = ({ children }) => {
    

}