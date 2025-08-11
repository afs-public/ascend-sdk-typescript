export declare function filesToStream(filePath: string): ReadableStream<Uint8Array>;
export declare function filesToByteArray(filePath: string): Promise<Uint8Array>;
export declare function filesToString(filePath: string): Promise<string>;
export declare function streamToByteArray(stream?: ReadableStream<Uint8Array>): Promise<Buffer>;
export declare function bytesToStream(bytes: Uint8Array): ReadableStream<Uint8Array>;
//# sourceMappingURL=files.d.ts.map