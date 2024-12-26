import React from "react";
import { useState } from "react";
import Counter from "./Counter";
export default function App() {
  const [name, setName] = useState("");

  const handleChange = () => {
    setName("Akash");
  }
  return (
      <div>
        <Counter />
      </div>
  )
}

