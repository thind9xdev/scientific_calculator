/*
 Copyright 2023  thind9xdev

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      https://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const handleClick = (value: string): void => {
    if (value === "=") {
      let expression: string = input;
      expression = expression.replace(/(\d)\(/g, "$1*(");
      expression = expression.replace(/\)(\d)/g, ")*$1");
      try {
        setOutput(eval(expression).toString());
      } catch (error) {
        setOutput("Lỗi khi thực hiện");
      }
    } else if (value === "C") {
      setInput("");
      setOutput("");
    } else if (value === "sqrt") {
      setInput((prevInput) => prevInput + "Math.sqrt(");
    } else if (value === "cbrt") {
      setInput((prevInput) => prevInput + "Math.cbrt(");
    } else if (value === "(") {
      setInput((prevInput) => prevInput + "(");
    } else if (value === "cos") {
      setInput((prevInput) => prevInput + "Math.cos(");
    } else if (value === "tan") {
      setInput((prevInput) => prevInput + "Math.tan(");
    } else if (value === "asin") {
      setInput((prevInput) => prevInput + "Math.asinh(");
    } else if (value === "x") {
      setInput((prevInput) => prevInput + "x");
    } else if (value === "square") {
      setInput((prevInput) => prevInput + "**2");
    } else if (value === "cube") {
      setInput((prevInput) => prevInput + "**3");
    } else if (value === "power") {
      setInput((prevInput) => prevInput + "**");
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };
  // const handleClickMenu = () =>{

  // }
  const handleDelete = (): void => {
    setInput((prevInput) => prevInput.slice(0, -1)); // Xóa ký tự cuối cùng khỏi chuỗi
    setOutput(""); // Xóa kết quả
  };
  return (
    <div className="calculator">
      <input
        type="text"
        className="input"
        value={input}
        placeholder="Phép tính"
        readOnly
      />
      <input
        type="text"
        className="output"
        value={output}
        placeholder="Kết quả"
        readOnly
      />
      <div className="buttons">
        <button onClick={() => handleClick("(")}>(</button>
        <button onClick={() => handleClick(")")}>)</button>
        <button onClick={() => handleClick("sqrt")}>√</button>
        <button onClick={() => handleClick("cbrt")}>∛</button>
        <button onClick={() => handleClick("sin")}>sin</button>
        <button onClick={() => handleClick("cos")}>cos</button>
        <button onClick={() => handleClick("tan")}>tan</button>
        <button onClick={() => handleClick("asin")}>asin</button>
        {/* <button onClick={() => handleClick("x")}>x</button> */}
        <button onClick={() => handleClick("square")}>x²</button>
        <button onClick={() => handleClick("cube")}>x³</button>
        <button onClick={() => handleClick("power")}>^</button>
        {/* <button style={{backgroundColor:"green"}} onClick={() => handleClickMenu()}>menu</button>  */}
        <button
          style={{ backgroundColor: "darkgray" }}
          onClick={() => handleDelete()}
        >
          Del
        </button>{" "}
        {/* Nút xóa */}
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("C")}>C</button>
        <button onClick={() => handleClick("=")}>=</button>
      </div>
    </div>
  );
};

export default App;
