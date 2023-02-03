var cTotalFrames = 24,
    cFrameWidth = 200,
    cIndex = 0,
    cXpos = 0,
    SECONDS_BETWEEN_FRAMES = 0;
function continueAnimation() {
    cXpos += cFrameWidth;
    cIndex += 1;
    if (cIndex >= cTotalFrames) {
        cXpos = 0;
        cIndex = 0;
    }
    document.getElementById('loaderImage').style.backgroundPosition = (-cXpos) + 'px 0';
    setTimeout('continueAnimation()', SECONDS_BETWEEN_FRAMES * 1000);
}

