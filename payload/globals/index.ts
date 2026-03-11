import type { GlobalConfig } from "payload";

import { Config } from "./Config";
import { Settings } from "./Settings";

// The order of the globals here is the order they will appear in the admin panel
export const globals: GlobalConfig[] = [Settings, Config];
