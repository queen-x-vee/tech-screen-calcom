import classNames from "classnames";
import toast from "react-hot-toast";

import { FiCheck, FiInfo } from "../icon";

type IToast = {
  message: string;
  toastVisible: boolean;
  variant?: "default" | "info" | "warning" | "error";
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

export const SuccessToast = ({ message, toastVisible }: IToast) => (
  <div
    className={classNames(
      "data-testid-toast-success bg-brand-default text-inverted mb-2 flex h-auto items-center space-x-2 rounded-md p-3 text-sm font-semibold shadow-md rtl:space-x-reverse md:max-w-sm",
      toastVisible && "animate-fade-in-up"
    )}>
    <span>
      <FiCheck className="h-4 w-4" />
    </span>
    <p data-testid="toast-success">{message}</p>
  </div>
);

export const ErrorToast = ({ message, toastVisible }: IToast) => (
  <div
    className={classNames(
      "animate-fade-in-up mb-2 flex h-auto items-center space-x-2 rounded-md p-3 text-sm font-semibold  shadow-md rtl:space-x-reverse  dark:text-[#F8D8B0]  md:max-w-sm",
      toastVisible && "animate-fade-in-up",
      variantClassName["error"],
      colorVariantClassName["error"],
      infoVariantClassName["error"]
    )}>
    <span>
      <FiInfo className=" h-4 w-4 " />
    </span>
    <p data-testid="toast-error">{message}</p>
  </div>
);

export const WarningToast = ({ message, toastVisible }: IToast) => (
  <div
    className={classNames(
      "animate-fade-in-up bg-attention dark:bg-attention dark:text-attention text-attention  mb-2 flex h-auto items-center space-x-2 rounded-md  p-3 text-sm font-semibold  shadow-md rtl:space-x-reverse  md:max-w-sm",
      toastVisible && "animate-fade-in-up",
      variantClassName["warning"],
      colorVariantClassName["warning"],
      infoVariantClassName["warning"]
    )}>
    <span>
      <FiInfo className=" text-attention dark:text-attention h-4 w-4 " />
    </span>
    <p data-testid="toast-warning">{message}</p>
  </div>
);

export const DefaultToast = ({ message, toastVisible }: IToast) => (
  <div
    className={classNames(
      "animate-fade-in-up bg-brand-default text-inverted mb-2 flex h-auto items-center space-x-2 rounded-md p-3 text-sm font-semibold shadow-md rtl:space-x-reverse md:max-w-sm",
      toastVisible && "animate-fade-in-up"
    )}>
    <span>
      <FiCheck className="h-4 w-4" />
    </span>
    <p>{message}</p>
  </div>
);

const TOAST_VISIBLE_DURATION = 6000;

export function showToast(
  message: string,
  variant: "success" | "warning" | "error",
  duration = TOAST_VISIBLE_DURATION
) {
  switch (variant) {
    case "success":
      toast.custom((t) => <SuccessToast message={message} toastVisible={t.visible} />, { duration });
      break;
    case "error":
      toast.custom((t) => <ErrorToast message={message} toastVisible={t.visible} />, { duration });
      break;
    case "warning":
      toast.custom((t) => <WarningToast message={message} toastVisible={t.visible} />, { duration });
      break;
    default:
      toast.custom((t) => <DefaultToast message={message} toastVisible={t.visible} />, { duration });
      break;
  }
}
