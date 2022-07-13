import { useState, createContext, Dispatch, ReactNode, SetStateAction } from "react";

export type ExpenfitureCategoryListContextType = {
    expenditureCategory:never[];
    setExpenditureCategory: Dispatch<SetStateAction<never[]>>;
};

export const ExpenditureCategoryListContext = createContext<ExpenfitureCategoryListContextType>(
  {} as ExpenfitureCategoryListContextType
);

export const ExpenditureCategoryListProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [ expenditureCategory, setExpenditureCategory] = useState<never[]>([]);
  return (
    <ExpenditureCategoryListContext.Provider value={{ expenditureCategory, setExpenditureCategory }}>
      {children}
    </ExpenditureCategoryListContext.Provider>
  );
};