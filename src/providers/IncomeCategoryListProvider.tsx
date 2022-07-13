import { useState, createContext, Dispatch, ReactNode, SetStateAction } from "react";

export type IncomeCategoryListContextType = {
  incomeCategory: never[] ;
  setIncomeCategory: Dispatch<SetStateAction<never[]>>;
};

export const IncomeCategoryListContext = createContext<IncomeCategoryListContextType>(
  {} as IncomeCategoryListContextType
);

export const IncomeCategoryListProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [incomeCategory, setIncomeCategory] = useState<never[]>([]);
  return (
    <IncomeCategoryListContext.Provider value={{ incomeCategory, setIncomeCategory }}>
      {children}
    </IncomeCategoryListContext.Provider>
  );
};