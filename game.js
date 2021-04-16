window.onload = function() {
    const basketBall = document.getElementById('basketBall');
    const basketBallCourt = document.getElementById('basketBallCourt');
    const teamAHoopToShoot = document.getElementById('hoop2');
    const teamBHoopToShoot = document.getElementById('hoop1');
    let teamName = document.getElementById('teamName');

    const scoreAlert = document.getElementById('scoreAlert');
    let scoresForTeamA = document.getElementById('scoresForTeamA');
    let scoresForTeamB = document.getElementById('scoresForTeamB');

    basketBallCourt.addEventListener('click', getClickPostion, false);


    function getClickPostion(e) {
        let divider = 2;
        let divPosition = basketBallCourt.getBoundingClientRect();
        let xPosition = e.clientX - basketBall.offsetWidth / divider - divPosition.left;
        let yPosition = e.clientY - basketBall.offsetHeight / divider - divPosition.top;
        let transform3dValue = 'translate3d(' + xPosition + 'px,' + yPosition + 'px,0)';
        basketBall.style.transform = transform3dValue;
    }

    let pointsForA = 0;
    let pointsForB = 0;
    teamAHoopToShoot.addEventListener('click', function() {
        let hideAlertTime = 3000;
        let delayTime = 300;
        setTimeout(function() {
            pointsForA++;
            scoresForTeamA.innerText = pointsForA;
            scoreAlert.style.display = 'flex';
            teamName.innerText = 'A';
            scoreAlert.style.color = 'red';
            setTimeout(function() {
                scoreAlert.style.display = 'none';
            }, hideAlertTime);
        }, delayTime);

    });
    teamBHoopToShoot.addEventListener('click', function() {
        let hideAlertTime = 3000;
        let delayTime = 300;
        setTimeout(function() {
            pointsForB++;
            scoresForTeamB.innerText = pointsForB;
            scoreAlert.style.display = 'flex';
            teamName.innerText = 'B';
            scoreAlert.style.color = 'blue';
            setTimeout(function() {
                scoreAlert.style.display = 'none';
            }, hideAlertTime);
        }, delayTime);
    });
};