import React from "react";
import Card from "../components/Card";
import images from "./images.json";
console.log("card right?")

function shuffle (array) {
  var i = 0, j = 0, temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
  }
}

shuffle(images);
console.log(images);
function Home() {
  return (
    <div>
      <Card>
      </Card>
    </div>
  );
}

export default Home;
