import { createContext, useContext, useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import db from "../config/firebase/database";

const ItemContext = createContext();

const ItemContextProvider = ({ children }) => {
  const [item, setItem] = useState([]);
  const [idDb, setIdDb] = useState([]);
  const [rawData, setRawData] = useState([]);
  const uid = JSON.parse(localStorage.getItem("uid"));

  useEffect(() => {
    if (uid) {
      onValue(ref(db, `users/${uid}`), (snapshot) => {
        const data = snapshot.val();
        setRawData(data);
        const newId = [];
        const newItem = [];

        if (data) {
          Object.keys(data).forEach((key) => {
            newId.push(key);
            newItem.push(data[key]);
          });
          setIdDb(newId);
          setItem(newItem);
        }
      });
    }

    return () => {
      setItem([]);
      setIdDb([]);
      setRawData([]);
    };
  }, []);

  return (
    <ItemContext.Provider value={{ rawData, item, idDb, setItem, setIdDb }}>
      {children}
    </ItemContext.Provider>
  );
};

export const useItem = () => {
  return useContext(ItemContext);
};
export default ItemContextProvider;
