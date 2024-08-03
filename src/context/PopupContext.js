import { createContext, useContext, useState } from "react";
import { useCars } from "./CarItemsContext";

const PopupContext = createContext();

function PopupProvider({ children }) {
  const [showPopupD, setShwoPopupD] = useState(false);
  const [ItemToDelete, setItemToDelete] = useState();
  const { deteleFromCart } = useCars();
  function onYesClick() {
    deteleFromCart(ItemToDelete);
  }

  return (
    <PopupContext.Provider
      value={{
        showPopupD,
        setShwoPopupD,
        setItemToDelete,
        ItemToDelete,
        onYesClick,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
}

function usePopup() {
  const context = useContext(PopupContext);
  if (context === undefined) {
    throw new Error("PopupContext are used wrong");
  }
  return context;
}

export { PopupProvider, usePopup };
