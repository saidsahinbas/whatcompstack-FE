<template>
    <div class="container">
        <div class="text">
          <h1>Page Not Found</h1>
          <p>We can't seem to find the page you're looking for. Please check the URL for any typos.</p>
          <ul class="menu">
            <li><a href="/">Go to Homepage</a></li>
          </ul>
        </div>
        <div><img class="image" src="https://omjsblog.files.wordpress.com/2023/07/errorimg.png" alt=""></div>
      </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #22232e;
  font-family: 'Poppins', sans-serif;
}
a{
  text-decoration: none;
}
ul{
  list-style: disc;
  color: #e0ffff;
}
section {
  width: 100%;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  column-gap: 20px;
}
.container img {
  width: 420px;
}
.text {
  display: block;
  padding: 40px 40px;
  width: 450px;
}
.text h1 {
  color: #00c2cb;
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 15px;
}
.text p {
  font-size: 15px;
  color: #e0ffff;
  margin-bottom: 15px;
  line-height: 1.5rem;
  margin-bottom: 15px;
}
.text .input-box{
  position: relative;
  display: flex;
  width: 100%;
}

.menu{
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-left: 30px;
}
.menu li a{
  display: flex;
  font-size: 1rem;
  color: #00c2cb;
  transition: 0.1s;
}
@media screen and (max-width:600px) {
  .container{
    display: flex;
    flex-direction: column-reverse;
  }
  .text,.image{
    width: 100%;
  } 
  .container{
    min-width: 200px;
    padding: 40px 0px;
  }
  .text{
    display: block;
    width: 100%;
    padding: 20px 40px;
  }
  .image{
    display: flex;
    width: 200px;
    align-self: center;
    justify-content: center;
    margin: auto;
  }
}
</style>
