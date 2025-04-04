import { FormField, FormFieldExtendedProps } from "grommet";
import { TranslationFunction } from "../../../../../../../../../../VanillaBP/vanillabp-business-cockpit/ui/bc-shared";

interface ViolationsAwareFormFieldProps
  extends Omit<FormFieldExtendedProps, "name"> {
  violations: any;
  resetViolation: (name: string) => void;
  t: TranslationFunction;
  label: string;
  name: string;
}

const ViolationsAwareFormField = ({
  violations,
  resetViolation,
  name,
  label,
  t,
  children = undefined,
  onChange = undefined,
  ...props
}: ViolationsAwareFormFieldProps) => (
  <FormField
    name={name}
    onChange={(value) => {
      resetViolation(name);
      if (onChange) {
        onChange(value);
      }
    }}
    label={t(label)}
    error={
      violations[name] !== undefined
        ? t(`${label}_${violations[name]}`)
        : undefined
    }
    {...props}
  >
    {children}
  </FormField>
);

export { ViolationsAwareFormField };
