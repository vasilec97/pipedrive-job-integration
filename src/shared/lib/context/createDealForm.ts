import { FormFields } from "@/shared/types/form";
import { createContext } from "react";

export const CreateDealFormContext = createContext<FormFields>({} as FormFields)