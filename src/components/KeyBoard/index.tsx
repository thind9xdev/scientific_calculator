interface KeyBoardProps {
  setIsRad: (isRad: boolean) => void;
  handleClick: (key: string) => void;
  handleDelete:()=>void;
  handleDeleteAll:()=>void;
  handleCalculate:()=>void
}
const KeyBoard = ({ setIsRad, handleClick,handleDelete,handleCalculate,handleDeleteAll }: KeyBoardProps) => {
  return (
    <>
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
        <button className="button_func_del" onClick={() => handleDeleteAll()}>
          C
        </button>
        <button className="button_func" onClick={() => handleClick("+")}>
          +
        </button>
        <button className="button_func_equal" onClick={() => handleCalculate()}>
          =
        </button>
      </div>
    </>
  );
};
export default KeyBoard;
