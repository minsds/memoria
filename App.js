import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function App() {
  const [board, setBoard] = useState([
    { id: 1, status: 0, color: "#8E44AD" },
    { id: 2, status: 0, color: "#DC7633" },
    { id: 3, status: 0, color: "#3498DB" },
    { id: 4, status: 0, color: "#DC7633" },
    { id: 5, status: 0, color: "#3498DB" },
    { id: 6, status: 0, color: "#8E44AD" },
  ]);

  const [prev, setPrev] = useState(-1)

  const olhar = (atual) => {
    if (board[atual].color == board[prev].color){
      board[atual].status = 1;
      board[prev].status = 1;
      setBoard([...board])
      setPrev(-1)
    }
  }

  function handleClick(id){
    if(prev === -1){
        items[id].stat = "active"
        setItems([...items])
        setPrev(id)
    }else{
        check(id)
    }
}

  const statusCard = (card, index) => {
    if (card.status === 0) {
      let newBoard = [...board];
      card.status = 1;
      newBoard[index] = card;
      setBoard(newBoard);
    }
    
    else {
      let newBoard = [...board];
      card.status = 0;
      newBoard[index] = card;
      setBoard(newBoard);
    }
  };


 


  return (
    <View style={styles.container}>
      {board.map((card, index) => (
        <TouchableOpacity key={card.id} onPress={() => statusCard(card, index)}>
          <View
            style={[
              styles.card,
              { backgroundColor: card.status === 0 ? "#ABB2B9" : card.color },
            ]}
          ></View>
        </TouchableOpacity>

        
      ))}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    height: 50,
    width: 40,
    borderRadius: 4,
    margin: 4,
  },
});
