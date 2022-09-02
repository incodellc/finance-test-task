import { TypedUseSelectorHook, useSelector } from "react-redux";
import { Store } from "../Store";

export const useAppSelector: TypedUseSelectorHook<Store> = useSelector;
