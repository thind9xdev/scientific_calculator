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
  const [isRad, setIsRad] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const rad = (degree: number) => {
    return degree * (Math.PI / 180);
  };

  function factorial(n: number): number {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

  const handleClick = (value: string): void => {
    rad(0);
    factorial(0);
    const operators: { [key: string]: string } = {
      "=": "",
      C: "",
      sqrt: "√",
      cbrt: "∛",
      sin: `Math.sin(${isRad ? "rad(" : ""}`,
      cos: `Math.cos(${isRad ? "rad(" : ""}`,
      tan: `Math.tan(${isRad ? "rad(" : ""}`,
      asin: `Math.asinh(${isRad ? "rad(" : ""}`,
      "X!": "!",
      x: "x",
      square: "**2",
      cube: "**3",
      power: "**",
      π: "Math.PI",
      "(": "(",
      ")": ")",
    };
    setInput((prevInput) => prevInput + (operators[value] ?? value));
  };

  const handleDelete = (): void => {
    setInput((prevInput) => prevInput.slice(0, -1));
    setOutput("");
  };

  const handleDeleteAll = (): void => {
    setInput("");
    setOutput("");
  };
  const handleCalculate = (): void => {
    let expression: string = input;

    expression = expression.replace(/(\d)\(/g, "$1*(");
    expression = expression.replace(/\)(\d)/g, ")*$1");

    expression = expression.replace(/√(\d+)/g, (_, number) => {
      return Math.sqrt(Number(number)).toString();
    });
    expression = expression.replace(/∛(\d+)/g, (_, number) => {
      return Math.cbrt(Number(number)).toString();
    });
  
  expression = expression.replace(/(\d+)!/g, (_, number) => {
    return factorial(Number(number)).toString();
   });

    try {
      setOutput(eval(expression).toString());
      setIsError(false);
    } catch (error: any) {
      setOutput("Lỗi khi thực hiện");
      setIsError(true);
    }
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
        style={
          isError
            ? {
                fontSize: "13px",
                color: "red",
              }
            : {}
        }
        className="output"
        value={output}
        placeholder="Kết quả"
        readOnly
      />
      <p style={{ fontSize: "12px" }} className="model">
        {isRad ? "Rad" : "Deg"}
      </p>
      <div className="buttons">
        <button className="button_func" onClick={() => setIsRad(false)}>
          Deg
        </button>
        <button className="button_func" onClick={() => setIsRad(true)}>
          Rad
        </button>
        <button className="button_func" onClick={() => handleClick("X!")}>
          X!
        </button>
        <button className="button_func" onClick={() => handleClick("π")}>
          {" "}
          π
        </button>
        <button className="button_func" onClick={() => handleClick("(")}>
          (
        </button>
        <button className="button_func" onClick={() => handleClick(")")}>
          )
        </button>
        <button className="button_func" onClick={() => handleClick("sqrt")}>
          √
        </button>
        <button className="button_func" onClick={() => handleClick("cbrt")}>
          ∛
        </button>
        <button className="button_func" onClick={() => handleClick("sin")}>
          sin
        </button>
        <button className="button_func" onClick={() => handleClick("cos")}>
          cos
        </button>
        <button className="button_func" onClick={() => handleClick("tan")}>
          tan
        </button>
        <button className="button_func" onClick={() => handleClick("asin")}>
          asin
        </button>
        {/* <button onClick={() => handleClick("x")}>x</button> */}
        <button className="button_func" onClick={() => handleClick("square")}>
          x²
        </button>
        <button className="button_func" onClick={() => handleClick("cube")}>
          x³
        </button>
        <button className="button_func" onClick={() => handleClick("power")}>
          ^
        </button>
        {/* <button style={{backgroundColor:"green"}} onClick={() => handleClickMenu()}>menu</button>  */}
        <button
          style={{ backgroundColor: "darkorange" }}
          onClick={() => handleDelete()}
        >
          Del
        </button>{" "}
        
        <button className="button_number" onClick={() => handleClick("7")}>
          7
        </button>
        <button className="button_number" onClick={() => handleClick("8")}>
          8
        </button>
        <button className="button_number" onClick={() => handleClick("9")}>
          9
        </button>
        <button className="button_func" onClick={() => handleClick("/")}>
          /
        </button>
        <button className="button_number" onClick={() => handleClick("4")}>
          4
        </button>
        <button className="button_number" onClick={() => handleClick("5")}>
          5
        </button>
        <button className="button_number" onClick={() => handleClick("6")}>
          6
        </button>
        <button className="button_func" onClick={() => handleClick("*")}>
          *
        </button>
        <button className="button_number" onClick={() => handleClick("1")}>
          1
        </button>
        <button className="button_number" onClick={() => handleClick("2")}>
          2
        </button>
        <button className="button_number" onClick={() => handleClick("3")}>
          3
        </button>
        <button className="button_func" onClick={() => handleClick("-")}>
          -
        </button>
        <button className="button_number" onClick={() => handleClick("0")}>
          0
        </button>
        <button className="button_func" onClick={() => handleClick(".")}>
          .
        </button>
        <button className="button_func_del" onClick={() =>  handleDeleteAll()}>
          C
        </button>
        <button className="button_func" onClick={() => handleClick("+")}>
          +
        </button>
        <button className="button_func_equal" onClick={() => handleCalculate()}>
          =
        </button>
      </div>
    </div>
  );
};

export default App;
