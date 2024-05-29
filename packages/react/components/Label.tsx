import React from "react";
import { VariantProps, vcn } from "../shared";

const [labelVariant, resolveLabelVariantProps] = vcn({
  base: "",
  variants: {
    direction: {
      vertical: "flex flex-col gap-2 justify-center items-start",
      horizontal: "flex flex-row gap-2 justify-start items-center",
    },
  },
  defaults: {
    direction: "vertical",
  },
});

interface LabelProps
  extends VariantProps<typeof labelVariant>,
    React.ComponentPropsWithoutRef<"label"> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  const [variantProps, otherPropsCompressed] = resolveLabelVariantProps(props);

  return (
    <label
      ref={ref}
      {...otherPropsCompressed}
      className={labelVariant(variantProps)}
    />
  );
});

export { Label };
