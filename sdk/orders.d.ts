import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class Orders extends ClientSDK {
    /**
     * Create Order
     *
     * @remarks
     * Creates a new order for equity or fixed income securities.
     *
     *  Equity quantities may be for fractional shares, whole shares, or notional dollar amounts. Fixed income orders may be specified in face value currency amounts, with prices expressed in conventional "percentage of par" values.
     *
     *  Upon successful submission, if the request is a duplicate, returns the existing order in its current state in the system. If the request is not a duplicate, returns the summary of the newly submitted order.
     */
    createOrder(orderCreate: components.OrderCreate, accountId: string, options?: RequestOptions): Promise<operations.OrderServiceCreateOrderResponse>;
    /**
     * Get Order
     *
     * @remarks
     * Gets an order by order ID.
     *
     *  Upon successful submission, returns the details of the queried order.
     */
    getOrder(accountId: string, orderId: string, options?: RequestOptions): Promise<operations.OrderServiceGetOrderResponse>;
    /**
     * Cancel Order
     *
     * @remarks
     * Submits an order cancellation request by order ID. Confirmation of order cancellation requests are provided through asynchronous events.
     *
     *  Upon successful submission, returns the details of the order pending cancellation.
     */
    cancelOrder(cancelOrderRequestCreate: components.CancelOrderRequestCreate, accountId: string, orderId: string, options?: RequestOptions): Promise<operations.OrderServiceCancelOrderResponse>;
    /**
     * Set Extra Reporting Data
     *
     * @remarks
     * Sets extra reporting data to an existing order. Any SetExtraReportingDataRequest must include the name of the order and the cancel_confirmed_time
     */
    setExtraReportingData(setExtraReportingDataRequestCreate: components.SetExtraReportingDataRequestCreate, accountId: string, orderId: string, options?: RequestOptions): Promise<operations.OrderServiceSetExtraReportingDataResponse>;
    /**
     * List Correspondent Orders
     *
     * @remarks
     * Lists orders matching the specified filter criteria. Results are paginated and sorted in the reverse order of their creation.
     */
    listCorrespondentOrders(correspondentId: string, filter?: string | undefined, pageSize?: number | undefined, pageToken?: string | undefined, options?: RequestOptions): Promise<operations.OrderServiceListCorrespondentOrdersResponse>;
}
//# sourceMappingURL=orders.d.ts.map