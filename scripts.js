let vid = document.getElementById("video");
        let btn = document.getElementById("ppButton")
        let vidoo = document.getElementById('video')
        let start = document.querySelector('.start')
        let kek = document.getElementById('check')
        const end = document.querySelector('.end')
        const progressBar = document.querySelector('.progress-bar')
        const now = document.querySelector('.now')
        let pausebyscreen = document.getElementsByClassName("gg")
        let track_index = 0;
        let track_name = document.getElementById("track-name");
        let trackname = document.getElementById("trackname");
        let track_artist = document.getElementById("track-artist");

        
      
        function getPause() {
          loadTrack(track_index);
            if(vidoo.paused){
                vidoo.play();
                btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
            } else{
                vidoo.pause();
                btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
            } 
            
        }

        

        function pausescreen(){
          loadTrack(track_index);
            if(vid.paused){
                vid.play();
                btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
            } else{
                vid.pause();
                btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
            } 
            
        }

        function upvol(){
            if(vidoo.volume >= 1){
                vidoo.volume = 1;
            }else{
                vid.volume+=0.1;
            }
            
        }

        function downvol(){
            if(vidoo.volume <= 0){
                vidoo.volume = 0;
            }else{
                vid.volume-=0.1;
            }
        }

        
        function conversion (value) {
            let minute = Math.floor(value / 60)
            minute = minute.toString().length === 1 ? ('0' + minute) : minute
            let second = Math.round(value % 60)
            second = second.toString().length === 1 ? ('0' + second) : second
            return `${minute}:${second}`
        }
      
        vidoo.onloadedmetadata = function () {
            end.innerHTML = conversion(vidoo.duration)
            start.innerHTML = conversion(vidoo.currentTime)
        }
      
        progressBar.addEventListener('click', function (event) {
          let coordStart = this.getBoundingClientRect().left
          let coordEnd = event.pageX
          let p = (coordEnd - coordStart) / this.offsetWidth
          now.style.width = p.toFixed(3) * 100 + '%'
      
          vidoo.currentTime = p * vidoo.duration
          vidoo.play()
        })
      
        setInterval(() => {
          start.innerHTML = conversion(vidoo.currentTime)
          now.style.width = vidoo.currentTime / vidoo.duration.toFixed(3) * 100 + '%'
        }, 1000)


        let track_list = [
            {
              name: "Industry Baby ",
              artist: "-Lil Nas X",
              path: "assets/industrybaby.mp4"
            },
            {
              name: "Blinding Lights ",
              artist: "-TheWeeknd",
              path: "assets/blinding.mp4"
            },
            {
              name: "Save Your Tears ",
              artist: "-TheWeeknd",
              path: "assets/saveyourtears.mp4"
            },
            {
              name: "Holiday",
              artist: "-Lil Nas X",
              path: "assets/holiday.mp4"
            },
          ];


          function nextTrack() {
            if (track_index < track_list.length - 1)
              track_index += 1;
            else track_index = 0;

            vidoo.src = track_list[track_index].path;
            loadTrack(track_index);
          }
           
          function prevTrack() {
            if (track_index > 0)
              track_index -= 1;
            else track_index = track_list.length - 1;
            vidoo.src = track_list[track_index].path;
            loadTrack(track_index);
          }

          function loadTrack(track_index) {
            trackname.textContent = "Current track: " + track_list[track_index].name;
          }