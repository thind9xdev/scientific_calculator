import { formattedNumber } from "../../utils";

interface SceenDisPlayProps {
  input: string;
  output: string;
  isError: boolean;
}
const SceenDisPlay = ({ input, isError, output, }: SceenDisPlayProps) => {
  return (
    <>
      <div className="result_container">
        <div className="resut_input">{input ? input :0 }</div>
        <div className="resut_output">{isError ? output : formattedNumber(Number(output))}</div>
      </div>
     
    </>
  );
};
export default SceenDisPlay;
