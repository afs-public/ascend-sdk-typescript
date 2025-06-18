export type BackoffStrategy = {
    initialInterval: number;
    maxInterval: number;
    exponent: number;
    maxElapsedTime: number;
};
export type RetryConfig = {
    strategy: "none";
} | {
    strategy: "backoff";
    backoff?: BackoffStrategy;
    retryConnectionErrors?: boolean;
};
export declare function retry(fetchFn: () => Promise<Response>, options: {
    config: RetryConfig;
    statusCodes: string[];
}): Promise<Response>;
//# sourceMappingURL=retries.d.ts.map