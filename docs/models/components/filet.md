# FileT

The details of file containing the snapshot data. This contains the download uri and uri expiry time.

## Example Usage

```typescript
import { FileT } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: FileT = {};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `downloadUri`                                                                                         | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The signed download uri for the file. This allows the client to download the file.                    | https://storage.googleapis.com/download_link                                                          |
| `uriExpiryTime`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_minus_sign:                                                                                    | The timestamp at which the download uri expires in UTC. This is set to 1 hour after the request time. | 2023-09-30 01:00:00 +0000 UTC                                                                         |