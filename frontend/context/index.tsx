import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type GlobalContextType = {
  showLoginView: boolean;
  setShowLoginView: Dispatch<SetStateAction<boolean>>;
  userName: string;
  setUserName: Dispatch<SetStateAction<string>>;
  currentUser: string | null;
  setCurrentUser: Dispatch<SetStateAction<string | null>>;
  allUsers: string[];
  setAllUsers: Dispatch<SetStateAction<string[]>>;
  allChatRooms: string[];
  setAllChatRooms: Dispatch<SetStateAction<string[]>>;
};

export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined
);

type GlobalStateProps = {
  children: ReactNode;
};

function GlobalState({ children }: GlobalStateProps) {
  const [showLoginView, setShowLoginView] = useState(false);
  const [userName, setUserName] = useState("");
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [allUsers, setAllUsers] = useState<string[]>([]);
  const [allChatRooms, setAllChatRooms] = useState<string[]>([]);
  return (
    <GlobalContext.Provider
      value={{
        showLoginView,
        setShowLoginView,
        userName,
        setUserName,
        currentUser,
        setCurrentUser,
        allUsers,
        setAllUsers,
        allChatRooms,
        setAllChatRooms,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
