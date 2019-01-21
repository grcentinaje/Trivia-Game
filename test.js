

        function clear() {
            button.on('click', showQuestion);
            $("#opt").empty();
        } // clear

        $(document).ready(function () {

            var qArr = {
                // {
                    q1: 'What was the name of the crab in THE LITTLE MERMAID?',
                    opt1: ['Sebastion', 'Triton', 'Flounder', 'Scuttle'],
                    ans1: 'Sebastion',
                // },
                // {
                    q2: 'What did Ariel sacrifice to become human?',
                    opt2: ['Pet crab', 'Fork', 'Pearls', 'Her voice.'],
                    ans2: 'Her voice.',
                // },
                // {
                    q3: 'What is a dinglehopper?',
                    opt3: ['pipe', 'fork', 'statue', 'mirror'],
                    ans3: 'Fork',
                // },
                // {
                    q4: 'How many days was Ariel allowed in attempt to have the prince kiss her to become permanently human?',
                    opt4: ['1', '2', '3', '4'],
                    ans4: '3',
                // },
                // {
                    q5: "How did Ursula sabatoge Ariel's plans to prevent her from becoming human?",
                    opt5: ['She sent her minions.', 'She became human too.', 'She put a spell on Ariel.', 'She kidnapped the prince.'],
                    ans5: 'She became human too.',
                // },
            }; // q

            $("#questionPage").hide();
            $("#results").hide();

            $("button").click(function () {
                $(this).fadeOut();
                $("#questionPage").show();
                convertSec();
                
                var counter = 0
                var timeLeft = 30

                function convertSec(s) {

                    var sec = s % 60;
                    var min = Math.floor(s / 60);
                    return min + ":" + sec;
                } // convertSec

                var timer = $("#timer").html(convertSec(timeLeft - counter));

                var interval = setInterval(time, 1000);

                function time() {
                    counter++;
                    timer.html(convertSec(timeLeft - counter));
                    if (timeLeft === 0) {
                        stop();
                    }
                } // timeIt

                function stop() {
                    clearInterval(interval);
                } //stop
            }); // start button // comment to here

            var score = 0
            var incorrect = 0
            var missed = 0

            $("#opt1").click(function () { 
                
                var opt1Val = document.getElementById("#opt1").value;
                if (opt1val === opt1val){
                    score++;
                    correct++;
                } else {
                    incorrect++;
                }
                
            });

            $("#opt2").click(function () { 
                
                var opt2Val = document.getElementById("#opt2").value;
                if (opt2val === opt2val){
                    score++;
                    correct++;
                } else {
                    incorrect++;
                }
                
            });

            $("#opt3").click(function () { 
                
                var opt3Val = document.getElementById("#opt3").value;
                if (opt3val === opt3val){
                    score++;
                    correct++;
                } else {
                    incorrect++;
                }
                
            });

            $("#opt4").click(function () { 
                
                var opt4Val = document.getElementById("#opt4").value;
                if (opt4val === opt4val){
                    score++;
                    correct++;
                } else {
                    incorrect++;
                }
                
            });

            $("#opt5").click(function () { 
                
                var opt5Val = document.getElementById("#opt5").value;
                if (opt5val === opt5val){
                    score++;
                    correct++;
                } else {
                    incorrect++;
                }
                
            });

            $("#results").show(function(){
                if (timer === 0){
                $("#questionPage").hide();
                }
            });

     }); // doc.ready