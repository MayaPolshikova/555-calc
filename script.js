        function calcLunch(items) {
            let LunchCost = 0;
            for (let item of items) {
                let dish = item.split(":");
                LunchCost = LunchCost + parseInt(dish[1]);
            }
            return [LunchCost, LunchCost/items.length];
        }

        function onButtonClick(){
            let results = document.querySelector("#results");
            let textRa = document.querySelector("#ra").value;
            let textRb = document.querySelector("#rb").value;
            let textC = document.querySelector("#c").value;

            let unitRa = +document.querySelector("#sra").value;
            let unitRb = +document.querySelector("#srb").value;
            let unitC = +document.querySelector("#src").value;

            let Ra = parseInt(textRa);
            let Rb = parseInt(textRb);
            let C = parseInt(textC);

            console.log(unitRa, unitRb, unitC);

            let f = (1.44/((Ra*unitRa+2*Rb*unitRb)*C*unitC)).toFixed(2);
            console.log(`NE555 Output signal frequency is ${f} Hz`);

            results.textContent = `${f} Hz`;
        }

        function onButtonClick2() {
            let results2 = document.querySelector("#results2");
            let textC2 = document.querySelector("#c2").value;
            let textF = document.querySelector("#f").value;

            let unitC2 = +document.querySelector("#src2").value;
            let unitF = +document.querySelector("#sf").value;

            let C2 = parseInt(textC2);
            let F = parseInt(textF);

            console.log(unitC2, unitF, C2, F);

            let R1 = (1.44*(2*0.51-1)/(F*unitF*C2*unitC2)).toFixed(0);
            let R2 = (1.44*(1-0.51)/(F*unitF*C2*unitC2)).toFixed(0);
            console.log(`R1 is ${R1} Ohm; R2 is ${R2} Ohm`);

            results2.textContent = `R1 is ${R1} Ohm; R2 is ${R2} Ohm`;
        }

        function onButtonClick3() {
            let results2 = document.querySelector("#results3");
            let textRa3 = document.querySelector("#ra3").value;
            let textRb3 = document.querySelector("#rb3").value;

            let unitRa3 = +document.querySelector("#sra3").value;
            let unitRb3 = +document.querySelector("#srb3").value;

            let Ra3 = parseInt(textRa3);
            let Rb3 = parseInt(textRb3);

            console.log(unitRa3, unitRb3, Ra3, Rb3);

            let D = ((Ra3*unitRa3+Rb3*unitRb3)/(Ra3*unitRa3+2*Rb3*unitRb3)).toFixed(2);
            console.log(D);

            results2.textContent = `Duty cycle is ${100*D} %`;
        }


        function changeBg() {
            let currentValue = document.querySelector("#bgs").value;
            document.body.style.backgroundColor = currentValue;
            let fDiv = document.querySelector("#freq-div");
            let dDiv = document.querySelector("#D-div");
            let rDiv = document.querySelector("#r-div");

            if (currentValue === "f") {
                dDiv.style.display = 'none';
                fDiv.style.display = 'block';
                rDiv.style.display = 'none';
            }
            else if (currentValue === "d") {
                dDiv.style.display = 'block';
                fDiv.style.display = 'none';
                rDiv.style.display = 'none';
            }
            else if (currentValue === "r") {
                dDiv.style.display = 'none';
                fDiv.style.display = 'none';
                rDiv.style.display = 'block';
            }
        }