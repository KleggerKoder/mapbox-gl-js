// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow
/* eslint-disable camelcase */

const {StructArray} = require('../../util/struct_array');

/**
 * Implementation of the StructArray layout:
 * [0]: Uint16[3]
 *
 * @private
 */
class StructArrayLayout_1_3ui extends StructArray {
    uint8: Uint8Array;
    uint16: Uint16Array;

    _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.uint16 = new Uint16Array(this.arrayBuffer);
    }

    emplaceBack(v0: number, v1: number, v2: number) {
        const i = this.length;
        this.resize(this.length + 1);
        const o2 = i * 3;
        this.uint16[o2 + 0] = v0;
        this.uint16[o2 + 1] = v1;
        this.uint16[o2 + 2] = v2;
        return i;
    }

}

StructArrayLayout_1_3ui.prototype.bytesPerElement = 6;

module.exports = StructArrayLayout_1_3ui;