export type Remap<Inp, Mapping extends {
    [k in keyof Inp]?: string | null;
}> = {
    [k in keyof Inp as Mapping[k] extends string ? Mapping[k] : Mapping[k] extends null ? never : k]: Inp[k];
};
/**
 * Converts or omits an object's keys according to a mapping.
 *
 * @param inp An object whose keys will be remapped
 * @param mappings A mapping of original keys to new keys. If a key is not present in the mapping, it will be left as is. If a key is mapped to `null`, it will be removed in the resulting object.
 * @returns A new object with keys remapped or omitted according to the mappings
 */
export declare function remap<Inp extends Record<string, unknown>, const Mapping extends {
    [k in keyof Inp]?: string | null;
}>(inp: Inp, mappings: Mapping): Remap<Inp, Mapping>;
//# sourceMappingURL=primitives.d.ts.map