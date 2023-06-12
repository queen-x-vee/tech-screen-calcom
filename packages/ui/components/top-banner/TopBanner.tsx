import { XIcon } from "@heroicons/react/solid";
import classNames from "classnames";
import { noop } from "lodash";
import type { ReactNode } from "react";

import { FiAlertTriangle, FiInfo } from "../icon";

export type TopBannerProps = {
  text: string;
  variant?: keyof typeof variantClassName;
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

export function TopBanner(props: TopBannerProps) {
  const { variant = "default", text, actions, onClose } = props;
  return (
    <div
      data-testid="banner"
      className={classNames(
        "flex min-h-[40px] w-full items-start justify-between gap-8 py-2 px-4 text-center lg:items-center",
        variantClassName[variant],
        colorVariantClassName[variant]
      )}>
      <div className="flex flex-1 flex-col items-start justify-center gap-2 p-1 lg:flex-row lg:items-center">
        <p className="text-emphasis flex flex-col items-start justify-center gap-2 text-left font-sans text-sm font-medium leading-4 lg:flex-row lg:items-center">
          {variant === "error" && (
            <FiAlertTriangle
              className={classNames("text-emphasis h-4 w-4 stroke-[2.5px]", infoVariantClassName[variant])}
              aria-hidden="true"
            />
          )}
          {variant === "warning" && (
            <FiInfo
              className={classNames("text-emphasis h-4 w-4 stroke-[2.5px]", infoVariantClassName[variant])}
              aria-hidden="true"
            />
          )}
          {text}
        </p>
        {actions && (
          <div className={classNames("text-sm font-medium", buttonVariantClassName[variant])}>{actions}</div>
        )}
      </div>
      {typeof onClose === "function" && (
        <button
          type="button"
          onClick={noop}
          className="hover:bg-gray-20 text-muted flex items-center rounded-lg p-1.5 text-sm">
          <XIcon className="text-emphasis h-4 w-4" />
        </button>
      )}
    </div>
  );
}
