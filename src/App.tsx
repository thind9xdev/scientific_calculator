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
import { KeyBoard, SceenDisPlay } from "./components";
import { factorial, rad } from "./utils";
const App: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [isRad, setIsRad] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const handleClick = (value: string): void => {
    rad(0);
    factorial(0);
    const operators: { [key: string]: string } = {
      "=": "",
      C: "",
      sqrt: "√",
      cbrt: "∛",
      sin: `sin(`,
      cos: `cos(`,
      tan: `tan(`,
      asin: `asin(`,
      "X!": "!",
      x: "x",
      square: "²",
      cube: "³",
      power: "**",
      π: "π",
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

   expression = expression.replace(/(\d+)/g, "$1*√");

    expression = expression.replace(/√(\d+)/g, (_, number) => {
      return Math.sqrt(Number(number)).toString();
    });
    expression = expression.replace(/∛(\d+)/g, (_, number) => {
      return Math.cbrt(Number(number)).toString();
    });
    expression = expression.replace(/π/g, Math.PI.toString());
    expression = expression.replace(/sin\((\d+)\)/g, (_, number) => {
      return isRad
        ? Math.sin(Number(number)).toString() 
        : Math.sin(rad(Number(number))).toString() 
    });
    

    expression = expression.replace(/cos\((\d+)\)/g, (_, number) => {
      return isRad
        ? Math.cos(Number(number)).toString()
        : Math.cos(rad(Number(number))).toString();
    });
    
    expression = expression.replace(/asin\((\d+)\)/g, (_, number) => {
      return isRad
        ? Math.asin(Number(number)).toString()
        : Math.asin(rad(Number(number))).toString();
    });
    expression = expression.replace(/tan\((\d+)\)/g, (_, number) => {
      return isRad
        ? Math.tan(Number(number)).toString()
        : Math.tan(rad(Number(number))).toString();
    });
    expression = expression.replace(/asin\((\d+)\)/g, (_, number) => {
      return isRad
        ? Math.asin(Number(number)).toString()
        : Math.asin(rad(Number(number))).toString();
    });
    expression = expression.replace(/(\d+)²/g, (_, number) => {
      return Math.pow(Number(number), 2).toString();
    });
    expression = expression.replace(/(\d+)³/g, (_, number) => {
      return Math.pow(Number(number), 3).toString();
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
      <SceenDisPlay input={input} isError={isError} output={output} />
   
      <p style={{ fontSize: "12px" }} className="model">
        {isRad ? "Rad" : "Deg"}
      </p>
      <KeyBoard
        handleCalculate={handleCalculate}
        handleClick={handleClick}
        handleDelete={handleDelete}
        handleDeleteAll={handleDeleteAll}
        setIsRad={setIsRad}
      />
    </div>
  );
};

export default App;
