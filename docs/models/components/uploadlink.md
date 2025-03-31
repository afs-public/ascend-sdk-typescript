# UploadLink

Maps the correlation id to the signed link that can be used to upload the described document.

## Example Usage

```typescript
import { UploadLink } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: UploadLink = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `clientBatchSourceId`                                                                          | *string*                                                                                       | :heavy_minus_sign:                                                                             | User-provided identifier that relates this signed link with the request used to get it         | cda89bd0-a6bc-4acc-89da-d35bde30cbf4                                                           |
| `name`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | Identifier for the upload link; This can be used to retrieve the document after it is uploaded | dd802bfe-35f2-41e7-8372-e626685f22dc                                                           |
| `uploadLink`                                                                                   | *string*                                                                                       | :heavy_minus_sign:                                                                             | Signed link used to upload a document; The link expires one hour after being generated         |                                                                                                |