enum LABEL_ALIGNMENT {
  LEFT,
  CENTER,
  RIGHT
}

interface LabelOptions {

  value: string;
  i18n?: boolean;
  alignment?: LABEL_ALIGNMENT;

}

class Label {

  public value: string;
  public i18n: boolean;
  public alignment: LABEL_ALIGNMENT;

}

abstract class LabelFactory {

  public static create(rawLabel: LabelOptions|string): Label {

    const label = new Label();

    if (typeof rawLabel === 'string') {
      label.value = rawLabel;
      label.i18n = false;
      label.alignment = LABEL_ALIGNMENT.LEFT;
      return label;
    }

    label.value = rawLabel.value;
    label.i18n = rawLabel.i18n || false;
    label.alignment = rawLabel.alignment || LABEL_ALIGNMENT.LEFT;

    return label;
  }
}

export { Label, LabelFactory, LabelOptions, LABEL_ALIGNMENT }
