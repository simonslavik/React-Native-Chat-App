import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

type GlobalContextType = {
  showLoginView: boolean;
  setShowLoginView: Dispatch<SetStateAction<boolean>>;
  currentUserName: string;
  setCurrentUserName: Dispatch<SetStateAction<string>>;
  currentUser: string;
  setCurrentUser: Dispatch<SetStateAction<string>>;
  allUsers: any[];
  setAllUsers: Dispatch<SetStateAction<any[]>>;
  allChatRooms: any[];
  setAllChatRooms: Dispatch<SetStateAction<any[]>>;
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  currentGroupName: string;
  setCurrentGroupName: Dispatch<SetStateAction<string>>;
  allChatMessages: any[];
  setAllChatMessages: Dispatch<SetStateAction<any[]>>;
  currentChatMesage: string;
  setCurrentChatMessage: Dispatch<SetStateAction<string>>;
};

export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined
);

function GlobalState({ children }: { children: ReactNode }) {
  const [showLoginView, setShowLoginView] = useState(false);
  const [currentUserName, setCurrentUserName] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [allChatRooms, setAllChatRooms] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentGroupName, setCurrentGroupName] = useState("");
  const [allChatMessages, setAllChatMessages] = useState([]);
  const [currentChatMesage, setCurrentChatMessage] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        showLoginView,
        setShowLoginView,
        currentUserName,
        setCurrentUserName,
        currentUser,
        setCurrentUser,
        allUsers,
        setAllUsers,
        allChatRooms,
        setAllChatRooms,
        modalVisible,
        setModalVisible,
        currentGroupName,
        setCurrentGroupName,
        allChatMessages,
        setAllChatMessages,
        currentChatMesage,
        setCurrentChatMessage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
