
   // Wistia Video
  const wistiaVideoId = "df2872v5dr";
  
  
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

      
      
      // Survey 1
      video.bind("timechange", function (t) {
        
          // PopUp Spects
        let openSecond = 20;
        let closeSecond = 30;
        let surveyURL = "https://es.surveymonkey.com/r/8JCJZD3";
        let surveyHeight = '500px';
        let surveyWidth = '600px';
        
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
       
       // Survey 2
      video.bind("timechange", function (t) {
        
          // PopUp Spects
        let openSecond = 35;
        let closeSecond = 50;
        let surveyURL = "https://es.surveymonkey.com/r/ZZZ5GB9";
        let surveyHeight = '500px';
        let surveyWidth = '600px';
        
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
      
    
    },
  });
