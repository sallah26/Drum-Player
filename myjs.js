  
        document.addEventListener("keypress",function(event){
            makeSound(event.key);
        });
       
        function makeSound(key){
            switch(key){
                case "q":
                    var audio = new Audio("sounds/drum-and-percussion-545.wav");
                    audio.play(); 
                    break;
                case "w":
                    var audio = new Audio("sounds/bad-joke-drums-2893.wav");
                    audio.play();
                    break;
                case "d":
                    var audio = new Audio("sounds/drum-bass-hit-2294.wav");
                    audio.play();
                    break;
                case "c":
                    var audio = new Audio("sounds/hand-tribal-drum-562.wav");
                    audio.play();
                    break;
                case "m":
                    var audio = new Audio("sounds/tribal-dry-drum-558.wav");
                    audio.play();
                    break;
                case "k":
                    var audio = new Audio("sounds/toy-drums-and-bell-ding-560.wav");
                    audio.play();
                    break;
                case "o":
                    var audio = new Audio("sounds/fail-drum-and-xylophone-568.wav");
                    audio.play();
                    break;
                case "p":
                   var audio = new Audio("sounds/joke-drums-578.wav");
                   audio.play();
                    break;
                default:
                    alert("Unknown button has been detected");
            }

        }
