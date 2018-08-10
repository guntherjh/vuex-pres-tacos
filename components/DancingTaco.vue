<template>
    <div class="drawing-box">
        <div class="taco">
            <div class="arm lefty"></div>
            <div class="arm righty"> </div>
            <div class="eye lft"></div>
            <div class="eye rght"></div>
            <div class="cheek lt"></div>
            <div class="cheek rt"></div>
            <div class="mouth">
                <div class="stache-box">
                    <div class="moustache"></div>
                </div>
            </div>
            <div class="filling"> 
                <div class="tomatoe"></div>
                <div class="guac"></div>
                <div class="cheese animated"></div>
            </div>
        </div>
        <div class="leg right"></div>
        <div class="leg left"> </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style>

/*dancing taco styles*/
.drawing-box, .taco, .leg, .eye, .mouth, .moustache, .arm, .filling, .tomatoe, .guac, .cheese.animated, .cheek, .stache-box {
  position: absolute;
}

.drawing-box {
  width: 400px;
  height: 400px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.drawing-box .leg {
  height: 120px;
  width: 10px;
  background: linear-gradient(to bottom, #FEE07C 0%, #FEE07C 40%, white 40%, white 50%, red 50%, red 53%, white 53%, white 56%, red 56%, red 59%, white 59%, white 100%);
  z-index: 10;
  bottom: 25px;
}
.drawing-box .leg::before {
  content: "";
  position: absolute;
  width: 40px;
  height: 20px;
  background: white;
  border-radius: 20px 20px 0 0;
  bottom: 0;
}
.drawing-box .leg.left {
  left: calc(50% - 40px);
  animation: tap 5s linear;
}
.drawing-box .leg.right {
  right: calc(50% - 40px);
}
.drawing-box .taco {
  width: 350px;
  height: 175px;
  border-radius: 175px 175px 0 0;
  background: #FEE07C;
  left: 25px;
  top: calc(50% - 120px);
  animation: bounce 5s linear infinite;
}
.drawing-box .taco .eye {
  width: 25px;
  height: 25px;
  background: #383838;
  bottom: 40%;
  border-radius: 50%;
  animation: blink 2.4s ease-in-out infinite;
}
.drawing-box .taco .eye.lft {
  left: 37%;
}
.drawing-box .taco .eye.rght {
  right: 37%;
}
.drawing-box .taco .cheek {
  width: 32px;
  height: 32px;
  background: #F786AA;
  bottom: 25%;
  border-radius: 50%;
  opacity: 0.6;
}
.drawing-box .taco .cheek.lt {
  left: 27%;
}
.drawing-box .taco .cheek.rt {
  right: 27%;
}
.drawing-box .taco .mouth {
  width: 35px;
  height: 35px;
  bottom: 0;
  border-radius: 50%;
  background-image: linear-gradient(to bottom, white 0%, white 50%, #E8999A 50%, #E8999A 100%);
  left: calc(50% - 17px);
  bottom: 10%;
}
.drawing-box .taco .mouth .stache-box {
  width: 35px;
  height: 35px;
  animation: wiggle 5s ease-in-out infinite;
  transform: rotate(0deg);
}
.drawing-box .taco .mouth .stache-box .moustache {
  width: 45px;
  height: 25px;
  background: #383838;
  left: -22px;
  bottom: 18px;
  border-radius: 25px 5px 25px 5px;
  transform: rotate(-20deg);
}
.drawing-box .taco .mouth .stache-box .moustache::before {
  content: "";
  position: absolute;
  width: 45px;
  height: 25px;
  background: #383838;
  left: 30px;
  top: 10px;
  border-radius: 5px 25px 5px 25px;
  transform: rotate(40deg);
}
.drawing-box .taco .arm {
  width: 120px;
  border: 3px solid #FEE07C;
  top: 105px;
}
.drawing-box .taco .arm.lefty {
  left: -80px;
  transform: rotate(30deg);
  animation: left-hand 5s linear infinite;
}
.drawing-box .taco .arm.righty {
  right: -80px;
  transform: rotate(-30deg);
  animation: right-hand 5s linear infinite;
}
.drawing-box .taco .filling {
  width: 350px;
  height: 175px;
  border-radius: 175px 175px 0 0;
  background: #E8C34C;
  z-index: -1;
  left: -26px;
}
.drawing-box .taco .filling .guac {
  width: 330px;
  height: 165px;
  border-radius: 165px 165px 0 0;
  bottom: 5px;
  background: #82D173;
  left: 10px;
}
.drawing-box .taco .filling .guac::before, .drawing-box .taco .filling .guac::after {
  content: "";
  position: absolute;
}
.drawing-box .taco .filling .guac::before {
  width: 100px;
  height: 80px;
  background: #82D173;
  border-radius: 50%;
  bottom: 20px;
}
.drawing-box .taco .filling .guac::after {
  width: 120px;
  height: 100px;
  background: #82D173;
  border-radius: 50%;
  bottom: 70px;
  left: 55px;
}
.drawing-box .taco .filling .tomatoe {
  width: 60px;
  height: 60px;
  background: #DA5552;
  border-radius: 50%;
  top: 44px;
  left: 30px;
  z-index: 1;
}
.drawing-box .taco .filling .tomatoe::before, .drawing-box .taco .filling .tomatoe::after {
  content: "";
  position: absolute;
  width: 40px;
  height: 40px;
  background: #DA5552;
  border-radius: 50%;
}
.drawing-box .taco .filling .tomatoe::before {
  top: 85px;
  right: 40px;
}
.drawing-box .taco .filling .tomatoe::after {
  top: -50px;
  left: 95px;
}

@keyframes blink {
  0% {
    height: 25px;
  }
  10% {
    height: 10px;
    margin-bottom: 5px;
  }
  20% {
    height: 25px;
    margin-bottom: 0;
  }
  100% {
    height: 25px;
  }
}
@keyframes wiggle {
  0% {
    transform: rotate(0deg);
  }
  9% {
    transform: rotate(0deg);
  }
  11% {
    transform: rotate(-7deg);
  }
  13% {
    transform: rotate(0deg);
  }
  15% {
    transform: rotate(7deg);
  }
  17% {
    transform: rotate(0deg);
  }
  19% {
    transform: rotate(-7deg);
  }
  21% {
    transform: rotate(0deg);
  }
  23% {
    transform: rotate(7deg);
  }
  25% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes bounce {
  0% {
    top: calc(50% - 120px);
  }
  50% {
    top: calc(50% - 120px);
  }
  57% {
    top: calc(50% - 100px);
  }
  58% {
    top: calc(50% - 120px);
  }
  65% {
    top: calc(50% - 100px);
  }
  66% {
    top: calc(50% - 120px);
  }
  73% {
    top: calc(50% - 100px);
  }
  74% {
    top: calc(50% - 120px);
  }
  100% {
    top: calc(50% - 120px);
  }
}
@keyframes right-hand {
  0% {
    transform: rotate(-30deg);
  }
  50% {
    transform: rotate(-30deg);
    top: 105px;
  }
  57% {
    top: 125px;
    transform: rotate(30deg);
  }
  58% {
    top: 105px;
    transform: rotate(-30deg);
  }
  65% {
    top: 125px;
    transform: rotate(30deg);
  }
  66% {
    top: 105px;
    transform: rotate(-30deg);
  }
  73% {
    top: 125px;
    transform: rotate(30deg);
  }
  74% {
    top: 105px;
    transform: rotate(-30deg);
  }
  100% {};
}
@keyframes left-hand {
  0% {
    transform: rotate(30deg);
  }
  50% {
    transform: rotate(30deg);
    top: 105px;
  }
  57% {
    top: 125px;
    transform: rotate(-30deg);
  }
  58% {
    top: 105px;
    transform: rotate(30deg);
  }
  65% {
    top: 125px;
    transform: rotate(-30deg);
  }
  66% {
    top: 105px;
    transform: rotate(30deg);
  }
  73% {
    top: 125px;
    transform: rotate(-30deg);
  }
  74% {
    top: 105px;
    transform: rotate(30deg);
  }
  100% {};
}


</style>

