<template>
<div class="home">
  <div class="first">
      <h2>Passport <span>OAuth2.0</span></h2>
  </div>
  <div class="second container">
    <div class=fakeMenu>
  <div class="fakeButtons fakeClose"></div>
  <div class="fakeButtons fakeMinimize"></div>
  <div class="fakeButtons fakeZoom"></div>
</div>
<div class="fakeScreen">
  <p class="line1">$(sudo) Let's see what Open Authentication tells 3rd Party apps about us.<span class="cursor1">_</span></p>
</div>
  </div>
  <div class="third container">
    <h5>Click one of the below and<span>get started</span></h5>
    <div class="options">
      <div class="grid-item">
        <img src="../../static/img/google.png" alt="Google" width="70" height="70" @click.prevent="authenticate('google')">
      </div>
      <div class="grid-item">
        <img src="../../static/img/twitter.png" alt="Github" width="70" height="70" @click.prevent="authenticate('twitter')">
      </div>
      <div class="grid-item">
        <img src="../../static/img/amazon.png" alt="Amazon" width="70" height="70" @click.prevent="authenticate('amazon')">
      </div>
    </div>
    <div class="options2">
      <div class="grid-item" style="grid-column-start:3;">
        <img src="../../static/img/github.png" alt="Twitter" width="70" height="70" @click.prevent="authenticate('github')">
      </div>
      <div class="grid-item" style="grid-column-start:6;">
        <img src="../../static/img/facebook.png" alt="Facebook" width="70" height="70" @click.prevent="authenticate('facebook')">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  methods:{
    authenticate(provider){
      window.location = `http://localhost:3000/auth/${provider}`
    }
  }
}
</script>

<style scoped>
img{
  cursor: pointer;
}
.options{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.options2{
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  padding-top: 2rem;
}
.grid-item{
  text-align: center;
}
h5{
  text-align: center;
}
h5 span{
  display: block;
  padding-bottom: 3rem;
}
@media only screen and (max-width: 768px){
  .fakeMenu, .fakeScreen{
  width: 100%!important;
  margin: 0 auto!important;
}
  .options{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
  p {
  position: relative;
  left: 50%;
  margin-left: -8.5em;
  text-align: left;
  font-size: 1.3rem!important;
  font-family: monospace;
  white-space: normal;
  overflow: hidden;
  width: 0;
}
}
.third{
  padding: 3rem 0;
  position: relative;
}
.home{
  min-height: 100vh;
  background-color: #272727;
  color: #747474;
}
.first h2{
  text-align: center;
  padding: 2rem;
}
body {
  background-color: #272727;
  padding: 10px;
}

.fakeMenu{
  height: 40px!important;
}

.fakeButtons {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  border: 1px solid #000;
  position: relative;
  top: 6px;
  left: 6px;
  background-color: #ff3b47;
  border-color: #9d252b;
  display: inline-block;
}

.fakeMinimize {
  left: 11px;
  background-color: #ffc100;
  border-color: #9d802c;
}

.fakeZoom {
  left: 16px;
  background-color: #00d742;
  border-color: #049931;
}

.fakeMenu {
  width: 550px;
  box-sizing: border-box;
  height: 25px;
  background-color: #bbb;
  margin: 0 auto;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}

.fakeScreen {
  background-color: #151515;
  box-sizing: border-box;
  width: 550px;
  margin: 0 auto;
  padding: 20px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

p {
  position: relative;
  left: 50%;
  margin-left: -8.5em;
  text-align: left;
  font-size: 1.5rem;
  font-family: monospace;
  white-space: normal;
  overflow: hidden;
  width: 0;
}

span {
  color: #fff;
  font-weight: bold;
}

.line1 {
  color: #9CD9F0;
  -webkit-animation: type .5s 1s steps(20, end) forwards;
  -moz-animation: type .5s 1s steps(20, end) forwards;
  -o-animation: type .5s 1s steps(20, end) forwards;
  animation: type .5s 1s steps(20, end) forwards;
}

.cursor1 {
  -webkit-animation: blink 1s 2s 2 forwards;
  -moz-animation: blink 1s 2s 2 forwards;
  -o-animation: blink 1s 2s 2 forwards;
  animation: blink 1s 2s 2 forwards;
}

.line2 {
  color: #CDEE69;
  -webkit-animation: type .5s 4.25s steps(20, end) forwards;
  -moz-animation: type .5s 4.25s steps(20, end) forwards;
  -o-animation: type .5s 4.25s steps(20, end) forwards;
  animation: type .5s 4.25s steps(20, end) forwards;
}

.cursor2 {
  -webkit-animation: blink 1s 5.25s 2 forwards;
  -moz-animation: blink 1s 5.25s 2 forwards;
  -o-animation: blink 1s 5.25s 2 forwards;
  animation: blink 1s 5.25s 2 forwards;
}

.line3 {
  color: #E09690;
  -webkit-animation: type .5s 7.5s steps(20, end) forwards;
  -moz-animation: type .5s 7.5s steps(20, end) forwards;
  -o-animation: type .5s 7.5s steps(20, end) forwards;
  animation: type .5s 7.5s steps(20, end) forwards;
}

.cursor3 {
  -webkit-animation: blink 1s 8.5s 2 forwards;
  -moz-animation: blink 1s 8.5s 2 forwards;
  -o-animation: blink 1s 8.5s 2 forwards;
  animation: blink 1s 8.5s 2 forwards;
}

.line4 {
  color: #fff;
  -webkit-animation: type .5s 10.75s steps(20, end) forwards;
  -moz-animation: type .5s 10.75s steps(20, end) forwards;
  -o-animation: type .5s 10.75s steps(20, end) forwards;
  animation: type .5s 10.75s steps(20, end) forwards;
}

.cursor4 {
  -webkit-animation: blink 1s 11.5s infinite;
  -moz-animation: blink 1s 8.5s infinite;
  -o-animation: blink 1s 8.5s infinite;
  animation: blink 1s 8.5s infinite;
}

@-webkit-keyframes blink {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-moz-keyframes blink {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-o-keyframes blink {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-webkit-keyframes type {
  to {
    width: 17em;
  }
}

@-moz-keyframes type {
  to {
    width: 17em;
  }
}

@-o-keyframes type {
  to {
    width: 17em;
  }
}

@keyframes type {
  to {
    width: 17em;
  }
}
</style>
