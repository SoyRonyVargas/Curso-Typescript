"use strict";
(function () {
    // let audioLevel = 5
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["mid"] = 5] = "mid";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.mid;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
