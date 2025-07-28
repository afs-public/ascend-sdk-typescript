import { IncomingMessage } from "http";
import * as components from "../models/components/index.js";
export declare function validateEventPayload(req: IncomingMessage, webhookSecret: string, allowedEventAgeMS: number): Promise<components.EventMessage>;
//# sourceMappingURL=webhooks.d.ts.map