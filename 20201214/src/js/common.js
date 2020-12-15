(function (){

    var   elemCanvas,
          elemVideo,
          elemPhone,
          context,
          windowWidth = 0, //브라우저 폭
          windowHeight = 0,  //브라우저 높이
          canvasWidth = 0, //캔버스 폭(브라우저에 맞춤)
          canvasHeight = 0, //캔버스 높이(브라우저에 맞춤)
          scrollY = 0, //현재 스크롤 위치
          relativeScrollY = 0, //각 키프레임에서 사용하는 상대적인 스크롤 위치
          prevDurations = 0, //이전 키프레임까지의 duration
          totalScrollHeight = 0, //스크롤 할 수 있는 브라우저 전체 높이(body의 높이로 세팅)
          currentKeyframe = 0, //현재 키프레임(0, 1)
          phoneWidth = 1380, //아이폰 이미지 기본 너비
          phoneHeight = 3000, //아이폰 이미지 기본 높이

          resizeHandler,
          scrollHandler,
          render,
          drawCanvas,
          calcAnimationValue,
          calFinalValue,
          init,
          pixelDuration = 0, //키프레임 당 차지하는 스크롤 높이
          keyframes = [ 
              {
                  animationValues: {
                    videoScale: [1, 2], //시작값과 끝값
                    triangleMove: [0, 200], //캔버스를 그릴 때 필요한 값들(X극)
                    rectangleMove: [0, 500] //상동(Y극)
                  }
              },  
              {
                animationValues: {
                    videoScale: [2, 0.5], //인터랙션 종료 시 작아지는 키프레임값
                    triangleMove: [200, 1000], //수치가 클수록 애니메이션 시간이 빨라진다?
                    rectangleMove: [500, 500]
                }
              } 
            ],

            elemBody = document.body,
            elemCanvas = document.getElementById('cover-canvas'),
            context = elemCanvas.getContext('2d');
            elemVideo = document.getElementById('iphone-video');

            init = function(){
                windowWidth = window.innerWidth;
                windowHeight = window.innerHeight;

                resizeHandler();
                render();

                window.addEventListener('resize', function() {
                    requestAnimationFrame(resizeHandler);
                }); //브라우저 크기가 변하는 이벤트 발생 시
                window.addEventListener('scroll', function() {
                    requestAnimationFrame(scrollHandler);
                }); //스크롤 이벤트 발생 시

                elemPhone = document.createElement('img');
                elemPhone.src = './src/img/iphone-X.png';

                elemPhone.addEventListener('load', function() {
                    drawCanvas();
                });
               
            };

            resizeHandler = function() {
                var i;
                windowWidth = window.innerWidth;
                windowHeight = window.innerHeight;
                totalScrollHeight = 0;
                pixelDuration = 0.5 * windowHeight; //브라우저의 절반만큼 스크롤링 시 인터랙션 발동

                for(i = 0; i < keyframes.length; i++ ) {
                    totalScrollHeight += pixelDuration;
                }
                totalScrollHeight += windowHeight;

                elemBody.style.height = totalScrollHeight + 'px';
                elemCanvas.width = canvasWidth = windowWidth * 2; //고해상도 이미지 처리를 위한 브라우저 2배값
                elemCanvas.height = canvasHeight = windowHeight * 2; //상동
                elemCanvas.style.width = windowWidth + 'px'; //보여줄 때는 브라우저 크기로 보여줘야 하므로 스타일에서 절반으로 줄여줌
                elemCanvas.style.height = windowHeight + 'px'; //상동

            };

            scrollHandler = function() {
                scrollY = window.pageYOffset;

                if(scrollY < 0 || scrollY < (totalScrollHeight - windowHeight)) {
                    return;
                }
                if(scrollY > pixelDuration + prevDurations) {
                    prevDurations += pixelDuration;
                    currentKeyframe++;
                } else if (scrollY < prevDurations) {
                    currentKeyframe--;
                    prevDurations -= pixelDuration;
                }
                relativeScrollY = scrollY - prevDurations;
                render();
            };

            render = function() {
                var videoScale, triangleMove, rectangleMove;

                if (keyframes[currentKeyframe]) {
                    videoScale = calcAnimationValue(keyframes[currentKeyframe].animationValues.videoScale);
                    triangleMove = calcAnimationValue(keyframes[currentKeyframe].animationValues.triangleMove);
                    rectangleMove = calcAnimationValue(keyframes[currentKeyframe].animationValues.rectangleMove);
                } else {
                    return;
                }
        

                elemVideo.style.transform = 'scale(' + videoScale + ')';
                context.clearRect(0, 0, canvasWidth, canvasHeight);
                if (elemPhone) {
                    drawCanvas(videoScale, triangleMove, rectangleMove);
                }
            };

            calcAnimationValue = function (value) {
                return (relativeScrollY / pixelDuration) * (value[1] - value[0]) + value[0];
            };

            drawCanvas = function (videoScale, triangleMove, rectangleMove) {
                var videoScale = videoScale || 1, 
                    triangleMove = triangleMove || 0, 
                    rectangleMove = rectangleMove || 0; //인자가 있으면 true, 없으면 false

                context.save();
                context.translate((canvasWidth - phoneWidth * videoScale) * 0.5, (canvasHeight - phoneHeight * videoScale) * 0.5);
                context.drawImage(elemPhone, 0, 0, phoneWidth * videoScale, phoneHeight * videoScale);
                context.restore();

                context.fillStyle = 'white';

                // 위 삼각형
                context.beginPath();
                context.moveTo(canvasWidth * 0.5 - 1500, -triangleMove - 1700);
                context.lineTo(canvasWidth * 0.5, canvasHeight * 0.5 - 150 -triangleMove);
                context.lineTo(canvasWidth * 0.5 + 1500, -triangleMove - 1700);
                context.lineTo(canvasWidth * 0.5 - 1500, -triangleMove - 1700);
                context.fill();
                context.closePath();

                // 아래 삼각형
                context.beginPath();
                context.moveTo(canvasWidth * 0.5 - 1500, canvasHeight + triangleMove + 1700);
                context.lineTo(canvasWidth * 0.5, canvasHeight * 0.5 + 150 -triangleMove);
                context.lineTo(canvasWidth * 0.5 + 1500, canvasHeight + triangleMove + 1700);
                context.lineTo(canvasWidth * 0.5 - 1500, canvasHeight + triangleMove + 1700);
                context.fill();
                context.closePath();

                // 왼쪽 삼각형
                context.beginPath();
                context.moveTo(canvasWidth * 0.5 - 1700 - triangleMove, -1700);
                context.lineTo(canvasWidth * 0.5 - 130 - triangleMove, canvasHeight * 0.5);
                context.lineTo(canvasWidth * 0.5 - 1700 - triangleMove, canvasHeight + 1700);
                context.lineTo(canvasWidth * 0.5 - 1700 - triangleMove, -1700);
                context.fill();
                context.closePath();

                 // 오른쪽 삼각형
                 context.beginPath();
                 context.moveTo(canvasWidth * 0.5 + 1700 + triangleMove, -1700);
                 context.lineTo(canvasWidth * 0.5 + 130 + triangleMove, canvasHeight * 0.5);
                 context.lineTo(canvasWidth * 0.5 + 1700 + triangleMove, canvasHeight + 1700);
                 context.lineTo(canvasWidth * 0.5 + 1700 + triangleMove, -1700);
                 context.fill();
                 context.closePath();

                //  박스 항, 하
                context.fillRect(0, canvasHeight * 0.5 - 2600 - rectangleMove, canvasWidth, 2000);
                context.fillRect(0, canvasHeight * 0.5 + 600 + rectangleMove, canvasWidth, 2000);
            };
          
            init();

})();