import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { PageIterator } from "../types/operations.js";
export declare class Reader extends ClientSDK {
    /**
     * List Event Messages
     *
     * @remarks
     * Gets a list of events.
     */
    listEventMessages(filter?: string | undefined, pageSize?: number | undefined, pageToken?: string | undefined, options?: RequestOptions): Promise<PageIterator<operations.ReaderListEventMessagesResponse, {
        cursor: string;
    }>>;
    /**
     * Get Event Message
     *
     * @remarks
     * Gets the details of a specific event.
     */
    getEventMessage(messageId: string, options?: RequestOptions): Promise<operations.ReaderGetEventMessageResponse>;
}
//# sourceMappingURL=reader.d.ts.map