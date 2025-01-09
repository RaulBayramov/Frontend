import { videoLengthFormat } from "../../js_files/utils/videoTime.js";

describe("test suite: VideoLengthFormat->converts seconds to the hour:minute:second format", () => {
    it("0 second === 00:00:00", () => {
        expect(videoLengthFormat(0)).toBe('00:00:00')
    })
    it("61 second === 00:01:01", () => {
        expect(videoLengthFormat(61)).toBe('00:01:01')
    })
    it("3661 second === 01:01:01", () => {
        expect(videoLengthFormat(3661)).toBe('01:01:01')
    })
    it("359999 second === 99:59:59", () => {
        expect(videoLengthFormat(359999)).toBe('99:59:59')
    })
})