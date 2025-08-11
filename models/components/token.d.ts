import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Represents a JSON Web Token for access to the system; See: https://datatracker.ietf.org/doc/html/rfc6749#section-5.1
 */
export type Token = {
    /**
     * The access token issued by the authorization server
     */
    accessToken?: string | undefined;
    /**
     * The lifetime in seconds of the access token
     */
    expiresIn?: number | undefined;
    /**
     * The token type for this access token
     */
    tokenType?: string | undefined;
};
/** @internal */
export declare const Token$inboundSchema: z.ZodType<Token, z.ZodTypeDef, unknown>;
/** @internal */
export type Token$Outbound = {
    access_token?: string | undefined;
    expires_in?: number | undefined;
    token_type?: string | undefined;
};
/** @internal */
export declare const Token$outboundSchema: z.ZodType<Token$Outbound, z.ZodTypeDef, Token>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Token$ {
    /** @deprecated use `Token$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Token, z.ZodTypeDef, unknown>;
    /** @deprecated use `Token$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Token$Outbound, z.ZodTypeDef, Token>;
    /** @deprecated use `Token$Outbound` instead. */
    type Outbound = Token$Outbound;
}
export declare function tokenToJSON(token: Token): string;
export declare function tokenFromJSON(jsonString: string): SafeParseResult<Token, SDKValidationError>;
//# sourceMappingURL=token.d.ts.map