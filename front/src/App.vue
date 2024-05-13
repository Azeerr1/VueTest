<template>
  <div id="app">

    <div class="main">
      <div class="header">
        <div class="nav">
          <img src="./assets/logo.png" alt="logo" class="logo">
          <div class="info">
            <div class="logo-text">Wicaebeth</div>
              <div style="display:flex; gap:15px">
                <img src="./assets/github.png" @click="OpenUrl('https://github.com/WicaebethTheo/')" alt="github" class="logo-inf">
                <img src="./assets/twitter.png" @click="OpenUrl('https://twitter.com/Wicaebeth_')" alt="twitter" class="logo-inf">
                <img src="./assets/discord.png" @click="OpenUrl('https://discordapp.com/users/257152912776495104')" alt="discord" class="logo-inf">
                <img src="./assets/konect.png" @click="OpenUrl('https://konect.gg/wicaebeth')" alt="konect" class="logo-inf">
              </div>
          </div>
        </div>
      </div>
         
      <div class="main-content">
        <div class="content">
          <div class="case1">
            <div class="case1-titre">Serveur HomeLab</div>
            <div class="case1-gap">
              <div class="case1-text typing">Ce site web fonctionne sur mon serveur Homelab, qui est connecté à Internet via un proxy inversé à l'aide de NGINX</div> 
              <div class="case1-text typing typing-delay">Proxy manager. Il héberge plusieurs services en utilisant Docker.</div>
            </div>
          </div>
          <div class="tag-list">
            <div class="inner">
              <div class="tag"><span>#</span>Homelab</div>
              <div class="tag"><span>#</span>Radar</div>
              <div class="tag"><span>#</span>Sonar</div>
              <div class="tag"><span>#</span>Docker</div>
              <div class="tag"><span>#</span>Optimisation</div>
              <div class="tag"><span>#</span>Homelab</div>
              <div class="tag"><span>#</span>Radar</div>
              <div class="tag"><span>#</span>Sonar</div>
              <div class="tag"><span>#</span>Docker</div>
              <div class="tag"><span>#</span>Optimisation</div>
              <div class="tag"><span>#</span>Homelab</div>
              <div class="tag"><span>#</span>Radar</div>
              <div class="tag"><span>#</span>Sonar</div>
              <div class="tag"><span>#</span>Docker</div>
              <div class="tag"><span>#</span>Optimisation</div>
              <div class="tag"><span>#</span>Homelab</div>
              <div class="tag"><span>#</span>Radar</div>
              <div class="tag"><span>#</span>Sonar</div>
              <div class="tag"><span>#</span>Docker</div>
              <div class="tag"><span>#</span>Optimisation</div>
            </div>
            <div class="fade"></div>
          </div>
          <div class="case2">
            <div class="case3">
              <div class="case3-titre">DOCKER</div>
              <div class="case-c" @click="OpenUrl('https://sonarr.wicaebeth.fr/')"><img src="./assets/sonarr.png" alt="SONARR" class="logo">SONARR</div>
              <div class="case-c1" @click="OpenUrl('https://radarr.wicaebeth.fr/')"><img src="./assets/radarr.png" alt="RADARR" class="logo">RADARR</div>
              <div class="case-c" @click="OpenUrl('https://emby.wicaebeth.fr/')"><img src="./assets/emby.png" alt="EMBY" class="logo">EMBY</div>
              <div class="case-c1" @click="OpenUrl('https://jellyfin.wicaebeth.fr/')"><img src="./assets/jellyfin.png" alt="JELLYFIN" class="logo">JELLYFIN</div>
            </div>
            <div class="case3">
              <div class="case3-titre">SERVICES</div>
              <div class="case-c" @click="OpenUrl('https://wicaebeth.fr/opti/')"><img src="./assets/optimisation.png" alt="OPTIMISATION" class="logo">OPTIMISATION</div>
              <div class="case-c1" @click="OpenUrl('https://radar.wicaebeth.fr/')"><img src="./assets/radarr.png" alt="RADAR" class="logo">RADAR</div>
              <div class="case-c" @click="OpenUrl('https://share.wicaebeth.fr/')"><img src="./assets/pingvin.png" alt="PINGVIN" class="logo">PINGVIN</div>
            </div>
          </div>
          <div class="case4">
            <div class="case4-titre">SERVER SPECS</div>
            <div class="case4-content">
                <div class="spec">
                  <div class="test"><img src="./assets/mb.png" alt="carte-mère" class="icon">B450 Tomahawk</div>
                  <div class="test"><img src="./assets/cpu.png" alt="Processeur" class="icon">Ryzen 9 3900XT</div>
                  <div class="test"><img src="./assets/gpu.png" alt="Carte-graphique" class="icon">Quadro P2000</div>
                </div>
                <div class="bouger"><img src="./assets/opti.png" alt="opti"></div>
                <div class="spec">
                  <div class="test"><img src="./assets/ram.png" alt="Mémoire" class="icon">64 GB DDR4</div>
                  <div class="test"><img src="./assets/hdd.png" alt="Stockage" class="icon">36 TB of storage</div>
                  <div class="test"><img src="./assets/os.png" alt="Os" class="icon">Unraid OS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer"><br><br><br></div>
    </div>
  <router-view/>
  </div>
</template>

<script>
export default {
	name: "App",
	components: {},
  methods:{
    changePage(Page){
      if(this.$route.path !== Page){
        this.$router.push(Page)
      }
    },
    OpenUrl(Url){
      window.open(Url)
    }
  },   
  mounted() {
    document.title = 'Wicaebeth | Home';
  }
};


</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
@keyframes float {
  0%{
    transform:translateY(0);
  }
  50%{
    transform:translateY(-50px);
  }
  100%{
    transform:translateY(0);
  }
}
@keyframes loop {
  0%{
    transform:translateX(0);
  }
  100%{
    transform:translateX(-50%);
  }
}

body::-webkit-scrollbar {
  width: 5px;
}
  
body::-webkit-scrollbar-track {
  background:rgba(80, 80, 80, 0.5);
}
  
body::-webkit-scrollbar-thumb {
  background-color:rgb(45, 36, 54);
  border-radius: 5em;
}

body{
  overflow-x:hidden;
  margin:0;
  background-image:url("./assets/background.png");
  background-size: cover;
  background-color:black;
}

.main{
  display:flex;
  flex-direction: column;
  width:100vw;
  height:100vh;
  gap:40px;
  .header{
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top:40px;
    .nav{
      display:flex;
      justify-content: center;
      align-items: center;
      gap:40px;
      .info{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(202, 201, 202, 0.8);
        border-radius:10px;
        width: 250px;
        height: 120px;
        .logo-inf{
          width:30px;
          height:30px;
          cursor:pointer;
        }
      }
    }
    .logo{
      width:150px;
      height:150px;
      border-radius:100px;
    }
    .logo-text{
      font-family:'Montserrat';
      font-size:40px;
    }
  }

  .tag-list{
    width:1200px;
    font-family: 'Montserrat';
    position:relative;
    overflow:hidden;
    .fade{
    position:absolute;
    background:linear-gradient(90deg,rgba(23, 16, 31, 1), transparent 20%, transparent 80%,
    rgba(18, 12, 38, 1));
    inset:0;
    pointer-events: none;
    }
    .inner{
      width:fit-content;
      display:flex;
      gap:1rem;
      animation: loop 30s linear infinite;
      .tag{
        display:flex;
        align-items: center;
        gap:0 0.2rem;
        font-size:0.9rem;
        background-color: rgba(231, 231, 231, 0.8);
        padding: 0.7rem 1rem;
        border-radius: 0.4rem;
        box-shadow: 
            0 0.1rem 0.2rem #00000033,
            0 0.1rem 0.5rem #0000004d,
            0 0.2rem 1.5rem #00000066;
        .span{
          font-size:1.2rem;
        }
      }
    }
  }



  .main-content{
    display:flex;
    justify-content: center;
    align-items: center;
    .content{
      display:flex;
      flex-direction: column;
      width:max-content;
      gap:40px;
      .case1{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width:1200px;
        height:250px;
        background-color: rgba(13, 14, 14, 0.8);
        border-radius:30px;
        gap:20px;
        .case1-gap{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .case1-titre{
          color:#f0f1ef;
          font-family: 'Montserrat';
          font-size:30px;
        }
        .typing{
          overflow:hidden;
          animation:typing 4s steps(150, end) forwards;
        }
        @keyframes typing{
          0% { width:0%; }
          100% { width:100%; }
        }
        .typing-delay{
          animation-delay:4s;
          width:0%;
        }
        .case1-text{
          color:#f0f1ef;
          font-family: 'Montserrat';
          font-size:20px;
          text-align:center;
          text-wrap: nowrap;
        }
      }
      .case2{
        display:flex;
        justify-content: space-evenly;
        background-color: rgba(13, 14, 14, 0.8);
        border-radius:30px;
        height:700px;
        flex-wrap: wrap;
        .case3{
          display:flex;
          flex-direction: column;
          width:400px;
          height:700px;
          border-radius:30px;
          gap:50px;
          margin-top:40px;
          .case3-titre{
            font-size:30px;
            font-family:'Montserrat';
            color:#fff;
            text-decoration:underline;
            text-underline-offset:20px;
          }
          .logo{
            margin-left:40px;
            width:50px;
            height:50px;
          }
        }
        .case-c{
          display:flex;
          justify-content: left;
          align-items: center;
          background-color:#340655;
          height:70px;
          border-radius:10px;
          gap:40px;
          font-family: 'Montserrat';
          font-size:15px;
          color:#ffffff;
          transition: .7s;
          &:hover{
            background-color:#480975;
            cursor: pointer;
          }
        }
        .case-c1{
          display:flex;
          justify-content: left;
          align-items: center;
          background-color:#121213;
          height:70px;
          border-radius:10px;
          gap:40px;
          font-family: 'Montserrat';
          font-size:15px;
          color:#ffffff;
          transition: .7s;
          &:hover{
            background-color:#161617;
            cursor: pointer;
          }
        }
      }
      .case4{
        display:flex;
        justify-content: space-evenly;
        flex-direction: column;
        background-color: rgba(13, 14, 14, 0.8);
        margin-top:50px;
        border-radius:30px;
        height:600px;
        flex-wrap: wrap;
        .case4-titre{
          font-size:30px;
          font-family:'Montserrat';
          color:#fff;
          text-decoration:underline;
          text-underline-offset:20px;
          margin-left:78px;
        }
        .case4-content{
          display:flex;
          justify-content:space-evenly;
          .spec{
            display:flex;
            flex-direction: column;
            justify-content: center;
            color:white;
            font-family:'Montserrat';
            font-size:20px;
            gap:40px;
            .test {
              display:flex;
              align-items: center;
              gap:20px;
            }
            .icon{
              display:flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              width:60px;
              height:60px;
            }
          }
          .bouger img {
            width: 25rem;
            transform: translateY(0px);
            animation: float 8s ease-in-out infinite;
          }
        }
      }
    }
  }

  .footer{
    width:100px;
    height:500px;
  }
}
// Responsive

@media screen and (max-width: 800px) {
  .main{
  display:flex;
  flex-direction: column;
  width:750px;
  height:100vh;
  gap:40px;
  .header{
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top:40px;
    .nav{
      display:flex;
      justify-content: center;
      align-items: center;
      gap:40px;
      .info{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(202, 201, 202, 0.8);
        border-radius:10px;
        width: 250px;
        height: 120px;
        .logo-inf{
          width:30px;
          height:30px;
          cursor:pointer;
        }
      }
    }
    .logo{
      width:150px;
      height:150px;
      border-radius:100px;
    }
    .logo-text{
      font-family:'Montserrat';
      font-size:40px;
    }
  }

  .tag-list{
      width:700px;
      font-family: 'Montserrat';
      position:relative;
      overflow:hidden;
      .fade{
      position:absolute;
      background:linear-gradient(90deg,rgba(23, 16, 31, 1), transparent 20%, transparent 80%,
      rgba(18, 12, 38, 1));
      inset:0;
      pointer-events: none;
      }
      .inner{
        width:fit-content;
        display:flex;
        gap:1rem;
        animation: loop 30s linear infinite;
        .tag{
          display:flex;
          align-items: center;
          gap:0 0.2rem;
          font-size:1.9rem;
          background-color: rgba(231, 231, 231, 0.8);
          padding: 0.7rem 1rem;
          border-radius: 0.4rem;
          box-shadow: 
              0 0.1rem 0.2rem #00000033,
              0 0.1rem 0.5rem #0000004d,
              0 0.2rem 1.5rem #00000066;
          .span{
            font-size:1.2rem;
          }
        }
      }
    }
  

    .main-content{
      display:flex;
      justify-content: center;
      align-items: center;
      .content{
        display:flex;
        flex-direction: column;
        width:700px;
        gap:40px;
        .case1{
          width:700px;
          height:450px;
          .case1-gap{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width:600px;
          }
          .case1-titre{
            font-size:40px;
          }
          .typing{
            overflow:hidden;
            animation:typing 0s steps(150, end) forwards;
          }
          @keyframes typing{
            0% { width:100%; }
            100% { width:100%; }
          }
          .typing-delay{
            animation-delay:0s;
            width:100%;
          }
          .case1-text{
            font-size:25px;
            text-wrap:wrap;
          }
        }
        .case2{
          display:flex;
          justify-content: space-evenly;
          background-color: rgba(13, 14, 14, 0.8);
          border-radius:30px;
          height:1200px;
          align-items:self-end;
          .case3{
            display:flex;
            flex-direction: column;
            width:400px;
            height:500px;
            border-radius:30px;
            gap:50px;
            margin-top:40px;
            .case3-titre{
              font-size:40px;
              font-family:'Montserrat';
              color:#fff;
              text-decoration:underline;
              text-underline-offset:20px;
            }
            .logo{
              margin-left:40px;
              width:50px;
              height:50px;
            }
          }
          .case-c{
            display:flex;
            justify-content: left;
            align-items: center;
            background-color:#340655;
            height:70px;
            border-radius:10px;
            gap:40px;
            font-family: 'Montserrat';
            font-size:25px;
            color:#ffffff;
            transition: 0s;
            &:hover{
              background-color:#480975;
              cursor: pointer;
            }
          }
          .case-c1{
            display:flex;
            justify-content: left;
            align-items: center;
            background-color:#121213;
            height:70px;
            border-radius:10px;
            gap:40px;
            font-family: 'Montserrat';
            font-size:25px;
            color:#ffffff;
            transition: 0s;
            &:hover{
              background-color:#161617;
              cursor: pointer;
           }
          }
        }
        .case4{
        display:flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        background-color: rgba(13, 14, 14, 0.8);
        margin-top:50px;
        border-radius:30px;
        height:1200px;
        flex-wrap: wrap;
        .case4-titre{
          font-size:40px;
          font-family:'Montserrat';
          color:#fff;
          text-decoration:underline;
          text-underline-offset:20px;
          margin-left:0px;
        }
        .case4-content{
          display:flex;
          justify-content:space-evenly;
          flex-direction: column;
          .spec{
            display:flex;
            flex-direction: column;
            justify-content: center;
            color:white;
            font-family:'Montserrat';
            font-size:25px;
            gap:40px;
            .test {
              display:flex;
              align-items: center;
              gap:20px;
            }
            .icon{
              display:flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              width:60px;
              height:60px;
            }
          }
          .bouger img {
            width: 25rem;
            transform: translateY(0px);
            animation: float 0s ease-in-out infinite;
          }
        }
      }
    }
  }
}
}
</style>