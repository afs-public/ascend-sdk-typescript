import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The details of file containing the snapshot data. This contains the download uri and uri expiry time.
 */
export type FileT = {
    /**
     * The signed download uri for the file. This allows the client to download the file.
     */
    downloadUri?: string | undefined;
    /**
     * The timestamp at which the download uri expires in UTC. This is set to 1 hour after the request time.
     */
    uriExpiryTime?: Date | null | undefined;
};
/**
 * The process date of the snapshot. This date corresponds to the underlying data within the snapshot.
 */
export type SnapshotProcessDate = {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | undefined;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | undefined;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | undefined;
};
/**
 * A snapshot of the data at a specific point in time. This contains the snapshot details and the download_uri of the file containing the snapshot data.
 */
export type Snapshot = {
    /**
     * The timestamp at which the snapshot was created at in UTC.
     */
    createTime?: Date | null | undefined;
    /**
     * The details of file containing the snapshot data. This contains the download uri and uri expiry time.
     */
    file?: FileT | null | undefined;
    /**
     * The name of the resource.
     */
    name?: string | undefined;
    /**
     * The process date of the snapshot. This date corresponds to the underlying data within the snapshot.
     */
    processDate?: SnapshotProcessDate | null | undefined;
    /**
     * The unique identifier of the snapshot file.
     */
    snapshotId?: string | undefined;
    /**
     * The type of the snapshot.
     */
    snapshotType?: string | undefined;
    /**
     * The version of the snapshot.
     */
    version?: string | undefined;
};
/** @internal */
export declare const FileT$inboundSchema: z.ZodType<FileT, z.ZodTypeDef, unknown>;
/** @internal */
export type FileT$Outbound = {
    download_uri?: string | undefined;
    uri_expiry_time?: string | null | undefined;
};
/** @internal */
export declare const FileT$outboundSchema: z.ZodType<FileT$Outbound, z.ZodTypeDef, FileT>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FileT$ {
    /** @deprecated use `FileT$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FileT, z.ZodTypeDef, unknown>;
    /** @deprecated use `FileT$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FileT$Outbound, z.ZodTypeDef, FileT>;
    /** @deprecated use `FileT$Outbound` instead. */
    type Outbound = FileT$Outbound;
}
export declare function fileToJSON(fileT: FileT): string;
export declare function fileFromJSON(jsonString: string): SafeParseResult<FileT, SDKValidationError>;
/** @internal */
export declare const SnapshotProcessDate$inboundSchema: z.ZodType<SnapshotProcessDate, z.ZodTypeDef, unknown>;
/** @internal */
export type SnapshotProcessDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const SnapshotProcessDate$outboundSchema: z.ZodType<SnapshotProcessDate$Outbound, z.ZodTypeDef, SnapshotProcessDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SnapshotProcessDate$ {
    /** @deprecated use `SnapshotProcessDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SnapshotProcessDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `SnapshotProcessDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SnapshotProcessDate$Outbound, z.ZodTypeDef, SnapshotProcessDate>;
    /** @deprecated use `SnapshotProcessDate$Outbound` instead. */
    type Outbound = SnapshotProcessDate$Outbound;
}
export declare function snapshotProcessDateToJSON(snapshotProcessDate: SnapshotProcessDate): string;
export declare function snapshotProcessDateFromJSON(jsonString: string): SafeParseResult<SnapshotProcessDate, SDKValidationError>;
/** @internal */
export declare const Snapshot$inboundSchema: z.ZodType<Snapshot, z.ZodTypeDef, unknown>;
/** @internal */
export type Snapshot$Outbound = {
    create_time?: string | null | undefined;
    file?: FileT$Outbound | null | undefined;
    name?: string | undefined;
    process_date?: SnapshotProcessDate$Outbound | null | undefined;
    snapshot_id?: string | undefined;
    snapshot_type?: string | undefined;
    version?: string | undefined;
};
/** @internal */
export declare const Snapshot$outboundSchema: z.ZodType<Snapshot$Outbound, z.ZodTypeDef, Snapshot>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Snapshot$ {
    /** @deprecated use `Snapshot$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Snapshot, z.ZodTypeDef, unknown>;
    /** @deprecated use `Snapshot$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Snapshot$Outbound, z.ZodTypeDef, Snapshot>;
    /** @deprecated use `Snapshot$Outbound` instead. */
    type Outbound = Snapshot$Outbound;
}
export declare function snapshotToJSON(snapshot: Snapshot): string;
export declare function snapshotFromJSON(jsonString: string): SafeParseResult<Snapshot, SDKValidationError>;
//# sourceMappingURL=snapshot.d.ts.map