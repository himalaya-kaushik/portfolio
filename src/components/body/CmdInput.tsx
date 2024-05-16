import { useContext, useEffect, useState } from "react";
import { CheckCommand, CheckCommandAndExecute } from "../../helpers/commands";
import Context from "../../Context/Context";

interface CmdInputProps {
  inputRef: React.RefObject<HTMLInputElement>;
  scrollFn: () => void;
}

const CmdInput = ({ inputRef, scrollFn }: CmdInputProps) => {
  const Ctx = useContext(Context);
  const [cmd, setCmd] = useState<string>("");
  const [cmdList, setCmdList] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);

  useEffect(() => {
    setSuggestions(Ctx.suggestions || []);
  }, [Ctx.suggestions]);

  const BreakCmd = (tempCmd: string) => {
    const tempCmdList = tempCmd.split(" ");
    setCmdList(tempCmdList);
    Ctx.setSuggestions(tempCmdList[tempCmdList.length - 1]);
  };

  const handleTabPress = () => {
    const lastWord = cmdList[cmdList.length - 1];
    const match = suggestions.find((s) => s.startsWith(lastWord));
    if (match) {
      const newCmdList = [...cmdList.slice(0, -1), match];
      const newCmd = newCmdList.join(" ");
      setCmd(newCmd);
      setCmdList(newCmdList);
    }
  };

  const extractCommandText = (liElement: JSX.Element): string => {
    const userCommandDiv = liElement.props.children[0];
      const commandText = userCommandDiv.props.children
      .filter((child: any) => typeof child === 'object' && child.type === 'p')
      .map((pElement: any) => pElement.props.children)
      .join(" ");
  
    return commandText;
  };
  
  const handleUpKeyPress = () => {
    const history = Ctx.history.STOREDLI;
    if (history && history.length > 0) {
      let newIndex;
      if (historyIndex === null) {
        newIndex = history.length - 1;
      } else {
        newIndex = Math.max(0, historyIndex - 1);
      }
      setHistoryIndex(newIndex);
      const previousCmd = history[newIndex];
      setCmd(previousCmd);
      setCmdList(previousCmd.split(" "));
    }
  };

  const onCmdSubmit = () => {
    try {
      Ctx.clearSuggestions();
      if (
        cmd.trim().toLocaleLowerCase() === "clear" ||
        cmd.trim().toLocaleLowerCase() === "cls"
      ) {
        Ctx.history.clearStoredLi();
        Ctx.history.clearSTOREDLI();
        setHistoryIndex(null);
        return;
      } else if (cmd.trim().toLowerCase() === "exit") {
        Ctx.setIsNew(true);
        setHistoryIndex(null);
        return;
      }

      const res = CheckCommandAndExecute(cmd);

      const tempCmdList = cmd.split(" ");
      Ctx.history.addSTOREDLI(cmd);

      Ctx.history.addStoredLi([
        <li
          key={"cmd" + Date.now()}
          className="flex flex-col font-semibold w-[100%] max-w-[100%] "
        >
          <div className="flex font-semibold w-[100%] max-w-[100%] ">
            <p className="text-color3">User</p>
            <p className="text-grey"> @</p>
            <p className="text-success"> himalaya_kaushik</p>
            <p className="text-grey ml-2 mr-2">$</p>
            {tempCmdList.map((cmd, index) => {
              const checkedCmd = CheckCommand(cmd);
              return (
                <p
                  className="font-medium"
                  key={index}
                  style={{
                    color: checkedCmd ? "#00ff00" : "#ff0000",
                    marginRight: index === cmdList.length - 1 ? "0" : "0.5rem",
                  }}
                >
                  {cmd}
                </p>
              );
            })}
          </div>
          <div className="pl-3 font-videoType text-[0.9rem] font-thin ">
            {res}
          </div>
        </li>,
      ]);
      scrollFn();
      setHistoryIndex(null); // Reset history index after submitting a new command
    } catch (e) {
      console.log(e);
    } finally {
      setCmd("");
      setCmdList([]);
    }
  };

  return (
    <li className="flex font-semibold w-[100%] max-w-[100%] ">
      <p className="text-color3">User</p>
      <p className="text-grey">@</p>
      <p className="text-success">himalaya-kaushik</p>
      <p className="text-grey ml-2 mr-2">$</p>
      {Ctx.isNew ||
        cmdList.map((tempCmd, index) => {
          const checkedCmd = CheckCommand(tempCmd);
          return (
            <p
              className="font-medium"
              key={"cmdview" + index}
              style={{
                color: checkedCmd ? "#00ff00" : "#ff0000",
                marginRight: index === cmdList.length - 1 ? "0" : "0.5rem",
              }}
            >
              {tempCmd}
            </p>
          );
        })}

      <span className="blinking-cursor">|</span>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onCmdSubmit();
        }}
      >
        <input
          className="text-black w-1 opacity-0"
          autoFocus={true}
          ref={inputRef}
          type="text"
          value={cmd}
          onKeyDown={(e) => {
            if (e.key === "Tab") {
              e.preventDefault();
              handleTabPress();
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              handleUpKeyPress();
            }
          }}
          onChange={(e) => {
            setCmd(e.target.value.toLowerCase());
            BreakCmd(e.target.value.toLowerCase());
            setHistoryIndex(null); // Reset history index when typing a new command
          }}
        />
      </form>
    </li>
  );
};

export default CmdInput;
