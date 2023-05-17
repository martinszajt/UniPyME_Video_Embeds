  // Wistia Video
  const wistiaVideoId = "bx5cvnl74z";
  
  
  let wistiaEmbed = document.getElementById("wistia_embed");
  wistiaEmbed.classList.add("wistia_async_" + wistiaVideoId);
  window._wq = window._wq || [];
  _wq.push({
    id: wistiaVideoId,
    options: {
      playerColor: "#54bbff",
      wmode: "transparent",
      fullscreenButton: false,
    },

    onReady: function (video) {
      let activeSurvey = null;
      const iframe = document.getElementById("survey");
      const iframe_container = document.getElementById("survey-container");

      
      
      // Start Survey 1
      video.bind("timechange", function (t) {
        
          // PopUp Spects
          let openSecond = 1066;
          let closeSecond = 1077;
          let surveyURL = "https://es.surveymonkey.com/r/76GN8KN";
          let surveyHeight = '570px';
          let surveyWidth = '445px';
        
          //Do-Not change
          if (t > openSecond && t < closeSecond) {
            if (!activeSurvey) {
              iframe.style.height = surveyHeight;
              iframe.style.width = surveyWidth;
              activeSurvey = surveyURL;
              iframe.src = surveyURL;
              iframe_container.classList.add("visible");
            }
          }
          if (t > closeSecond || t < openSecond) {
            if (activeSurvey === surveyURL) {
              activeSurvey = null;
              iframe.src =
                "https://unipymelatam.com/survey-callback";
              iframe_container.classList.remove("visible");
            }
          }
        });
      // End Survey 1


      // Start Survey 2
      video.bind("timechange", function (t) {
        
          // PopUp Spects
        let openSecond = 3280;
        let closeSecond = 3291;
        let surveyURL = "https://es.surveymonkey.com/r/7ZTJ2LL";
        let surveyHeight = '700px';
        let surveyWidth = '500px';
        
        
        //Do-Not change
        if (t > openSecond && t < closeSecond) {
          if (!activeSurvey) {
            iframe.style.height = surveyHeight;
            iframe.style.width = surveyWidth;
            activeSurvey = surveyURL;
            iframe.src = surveyURL;
            iframe_container.classList.add("visible");
          }
        }
        if (t > closeSecond || t < openSecond) {
          if (activeSurvey === surveyURL) {
            activeSurvey = null;
            iframe.src =
              "https://unipymelatam.com/survey-callback";
            iframe_container.classList.remove("visible");
          }
        }


      });
      // End Survey 2
      
    
    },
  });
