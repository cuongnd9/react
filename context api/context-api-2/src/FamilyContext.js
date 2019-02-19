import React from "react";

const FamilyContext = React.createContext();

const FamilyProvider = FamilyContext.Provider;
const FamilyConsumer = FamilyContext.Consumer;

export { FamilyProvider, FamilyConsumer };
