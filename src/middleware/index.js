import { applyMiddleware } from "redux";
import logger from "./Logger";
export default applyMiddleware(logger);
