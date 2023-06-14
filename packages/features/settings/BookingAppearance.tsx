import classNames from "classnames";
import type { ReactNode } from "react";

import { FiInfo } from "@calcom/ui/components/icon";

//The purpose of this component is to give the user an idea of what colors to expect in inline banners in different modes.
//It is used in the Appearance page
export type BookingAppearanceProps = {
  text: string;
  subText: string;
  action: string;
  dismiss: string;
  variant?: keyof typeof variantClassName;
  errs?: string;
  defaultChecked?: boolean;
  actions?: ReactNode;
  onClose?: () => void;
};

const variantClassName = {
  default: "dark:bg-[#2E2E2E] bg-[#F3F4F6]",
  info: "dark:bg-[#253985] bg-[#DEE9FC]",
  warning: "dark:bg-[#73321B] bg-[#FCEED8]",
  error: "dark:bg-[#752522] bg-[#F9E3E2]",
};

const infoVariantClassName = {
  default: "dark:text-[#FCFCFD] text-[#101010]",
  info: "dark:text-[#F0F6FE] text-[#253985]",
  warning: "dark:text-[#FCEED8] text-[#73321B]",
  error: "dark:text-[#F9E3E2] text-[#752522]",
};

const colorVariantClassName = {
  default: "dark:text-[#D6D6D6] text-[#374151]",
  info: "dark:text-[#C4DAFB] text-[#253985]",
  warning: "dark:text-[#F8D8B0] text-[#73321B]",
  error: "dark:text-[#F8D8B0] text-[#752522]",
};

const buttonVariantClassName = {
  default: "dark:text-[#FCFCFD] text-[#101010",
  info: "dark:text-[#F0F6FE] text-[#253985]",
  warning: "dark:text-[#FCEED8] text-[#73321B]",
  error: "dark:text-[#F9E3E2] text-[#752522]",
};

export function BookingAppearance(props: BookingAppearanceProps) {
  const { variant = "default", defaultChecked, text, subText, dismiss, action, errs } = props;
  return (
    <div
      data-testid="banner"
      defaultChecked={defaultChecked}
      className={classNames(
        "mb-10 min-h-[40px] w-full rounded-[6px] p-3 font-sans  ",
        variantClassName[variant],
        colorVariantClassName[variant]
      )}>
      <div className="flex flex-row items-center justify-between ">
        <div className="flex gap-[9.33px] ">
          <div>
            <FiInfo
              className={classNames("h-4 w-4 stroke-[2.5px]", infoVariantClassName[variant])}
              aria-hidden="true"
            />
          </div>
          <div>
            <p className=" mb-1 text-[14px] font-semibold leading-[16px]">{text}</p>
            <p className="text-sm font-normal">{subText} </p>
            <p className=" mt-2 font-mono text-[10px] font-medium leading-[16px]">{errs}</p>
          </div>
        </div>

        <div
          className={classNames(
            "flex flex-row gap-7 text-[14px] font-medium leading-[16px] ",
            buttonVariantClassName[variant]
          )}>
          <button>{dismiss}</button>
          <button>{action}</button>
        </div>
      </div>
    </div>
  );
}
