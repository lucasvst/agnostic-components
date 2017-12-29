interface ActionOptions {

  command?: Function;
  event?: string;
}

class Action {

  command: Function;
  event: string;

}

abstract class ActionFactory {

  static create(rawAction: ActionOptions): Action {

    const action = new Action();

    action.command = rawAction.command || (()=>{});
    action.event = rawAction.event || 'click';

    return action;
  }

}

export { Action, ActionFactory, ActionOptions }