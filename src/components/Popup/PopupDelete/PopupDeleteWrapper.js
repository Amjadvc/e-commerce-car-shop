import { usePopup } from "../../../context/PopupContext";
import PopupDelete from "./PopupDelete";

function PopupDeleteWrapper({ snackShow }) {
  const { showPopupD, setShwoPopupD, ItemToDelete, onYesClick } = usePopup();
  return (
    <>
      {showPopupD && (
        <PopupDelete
          setShwoPopupD={setShwoPopupD}
          onYesClick={onYesClick}
          snackShow={snackShow}
          ItemToDelete={ItemToDelete}
        />
      )}
    </>
  );
}

export default PopupDeleteWrapper;
