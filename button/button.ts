import { Label, LabelFactory, LabelOptions } from './../label/label';
import { Action, ActionFactory, ActionOptions } from './../action/action';

interface ButtonOptions {

  clazz: string;
  icon: string;

  enabled: Function;
  visible: Function;
  show: Function;

  label: LabelOptions;
  action: ActionOptions;
  children: ButtonOptions[];

}

class Button {

  public clazz: string;
  public icon: string;

  public enabled: Function;
  public visible: Function;
  public show: Function;

  public label: Label;
  public action: Action;
  public children: Button[];

}

abstract class ButtonFactory {

  public static create(rawButton: ButtonOptions): Button {

    const button = new Button();

    button.clazz = rawButton.clazz;
    button.icon = rawButton.icon;

    button.enabled = rawButton.enabled || (_ => true);
    button.visible = rawButton.visible || (_ => true);
    button.show = rawButton.show || (_ => true);

    button.label = LabelFactory.create(rawButton.label);
    button.action = ActionFactory.create(rawButton.action);
    button.children = ButtonFactory.many(rawButton.children);

    return button;
  }

  public static many(rawButtons: ButtonOptions[]): Button[] {
    return Array.isArray(rawButtons) ? rawButtons.map(
      rawButton => ButtonFactory.create(rawButton)
    ) : [];
  }
}

export { Button, ButtonFactory }
