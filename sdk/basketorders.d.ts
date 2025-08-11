import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class BasketOrders extends ClientSDK {
    /**
     * Create Basket
     *
     * @remarks
     * Creates an empty basket
     *
     *  Upon successful submission, if the request is a duplicate, returns the existing basket in its current state in the system. If the request is not a duplicate, returns the summary of the newly created basket.
     */
    createBasket(basketCreate: components.BasketCreate, correspondentId: string, options?: RequestOptions): Promise<operations.BasketOrdersServiceCreateBasketResponse>;
    /**
     * Add Orders
     *
     * @remarks
     * Adds a list of basket orders to a basket
     *
     *  Upon successful submission, returns the basket with a new total count of orders within the basket
     */
    addOrders(addOrdersRequestCreate: components.AddOrdersRequestCreate, correspondentId: string, basketId: string, options?: RequestOptions): Promise<operations.BasketOrdersServiceAddOrdersResponse>;
    /**
     * Get Basket
     *
     * @remarks
     * Gets a basket by basket ID.
     *
     *  Upon successful submission, returns the details of the queried basket
     */
    getBasket(correspondentId: string, basketId: string, options?: RequestOptions): Promise<operations.BasketOrdersServiceGetBasketResponse>;
    /**
     * Submit Basket
     *
     * @remarks
     * Submits a basket for execution in the market
     *
     *  Upon successful submission, if the request is a duplicate, returns the existing basket in its current state in the system. If the request is not a duplicate, returns the summary of the newly submitted basket in a SUBMITTED state
     */
    submitBasket(submitBasketRequestCreate: components.SubmitBasketRequestCreate, correspondentId: string, basketId: string, options?: RequestOptions): Promise<operations.BasketOrdersServiceSubmitBasketResponse>;
    /**
     * List Basket Orders
     *
     * @remarks
     * Gets a list of basket orders within a basket.
     *
     *  Upon successful submission, returns a list of basket orders for the basket. If the list of basket orders becomes too large, a token is returned to retrieve the next page of basket orders.
     */
    listBasketOrders(request: operations.BasketOrdersServiceListBasketOrdersRequest, options?: RequestOptions): Promise<operations.BasketOrdersServiceListBasketOrdersResponse>;
    /**
     * List Compressed Orders
     *
     * @remarks
     * Gets a list of compressed orders within a basket.
     *
     *  Upon successful submission, returns a list of compressed orders for the basket. If the basket has not been submitted yet, this list will be empty. If the list of compressed orders becomes too large, a token is returned to retrieve the next page of compressed orders.
     */
    listCompressedOrders(correspondentId: string, basketId: string, pageSize?: number | undefined, pageToken?: string | undefined, options?: RequestOptions): Promise<operations.BasketOrdersServiceListCompressedOrdersResponse>;
}
//# sourceMappingURL=basketorders.d.ts.map