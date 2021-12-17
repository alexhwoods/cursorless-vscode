import {
  Action,
  ActionPreferences,
  ActionReturnValue,
  Graph,
  TypedSelection,
} from "../typings/Types";
import CommandAction, { CommandArguments } from "./CommandAction";

export default class ExecuteCommand implements Action {
  getTargetPreferences: () => ActionPreferences[] = () => [
    { insideOutsideType: "inside" },
  ];
  private commandAction: CommandAction;

  constructor(graph: Graph) {
    this.run = this.run.bind(this);
    this.commandAction = new CommandAction(graph);
  }

  async run(
    targets: [TypedSelection[]],
    command: string,
    args: CommandArguments = {}
  ): Promise<ActionReturnValue> {
    return this.commandAction.run(targets, { ...args, command });
  }
}