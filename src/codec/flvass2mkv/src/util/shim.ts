/***
 * Copyright (C) 2018 Qli5. All Rights Reserved.
 * 
 * @author qli5 <goodlq11[at](163|gmail).com>
 * 
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

const _navigator = typeof navigator === 'object' && navigator || { userAgent: 'chrome' } as typeof navigator;

const _Blob = typeof Blob === 'function' && Blob || class {
    constructor(array: BlobPart[]) {
        return Buffer.concat(array.map(Buffer.from.bind(Buffer)));
    }
} as unknown as typeof Blob;

const _TextEncoder = typeof TextEncoder === 'function' && TextEncoder || class {
    encode(chunk: string) {
        return Buffer.from(chunk, 'utf-8');
    }
} as unknown as typeof TextEncoder;

const _TextDecoder = typeof TextDecoder === 'function' && TextDecoder || class extends require('string_decoder').StringDecoder {
    decode(chunk: ArrayBuffer) {
        return this.end(Buffer.from(chunk));
    }
} as unknown as typeof TextDecoder;

export { _navigator as navigator, _Blob as Blob, _TextEncoder as TextEncoder, _TextDecoder as TextDecoder };
export default { navigator: _navigator, Blob: _Blob, TextEncoder: _TextEncoder, TextDecoder: _TextDecoder };
